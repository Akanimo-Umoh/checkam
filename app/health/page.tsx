import { createClient } from "@/lib/supabase/server"

export default async function HealthPage() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("data_refreshes")
    .select("finished_at, medicines_total")
    .eq("status", "success")
    .order("finished_at", { ascending: false })
    .limit(1)

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>CheckAm health</h1>
      {error ? (
        <p>Database error: {error.message}</p>
      ) : data.length === 0 ? (
        <p>Connected to Supabase. No data loads yet.</p>
      ) : (
        <p>
          Connected. Last load: {data[0].finished_at} ({data[0].medicines_total}{" "}
          medicines)
        </p>
      )}
    </main>
  )
}
