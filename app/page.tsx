import { getDietData } from "@/lib/data";
import Dashboard from "@/components/Dashboard";

export default function Page() {
  const rawData = getDietData();
  // Pass only what we need to the client component
  const data = rawData.map((row) => ({
    Diet_type: row.Diet_type,
    Recipe_name: row.Recipe_name,
    Cuisine_type: row.Cuisine_type,
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <Dashboard data={data} />
    </main>
  );
}