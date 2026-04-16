import { neon } from '@neondatabase/serverless'

export async function supabaseInsert(table: string, data: Record<string, unknown>) {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    console.error(`DB insert to ${table} skipped: missing DATABASE_URL`)
    return false
  }

  try {
    const sql = neon(databaseUrl)

    const columns = Object.keys(data)
    const values = Object.values(data)

    // Build parameterised INSERT: INSERT INTO table ("col1", "col2") VALUES ($1, $2)
    const colList = columns.map(c => `"${c}"`).join(', ')
    const paramList = columns.map((_, i) => `$${i + 1}`).join(', ')
    const query = `INSERT INTO ${table} (${colList}) VALUES (${paramList})`

    await sql.query(query, values)

    return true
  } catch (error) {
    console.error(`DB insert to ${table} error:`, error instanceof Error ? error.message : error)
    return false
  }
}
