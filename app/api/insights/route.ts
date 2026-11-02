import { NextResponse } from "next/server";
import { getDietData } from "@/lib/data";

export async function GET() {
  const data = getDietData();
  
  const totalRecipes = data.length;
  
  // Count unique diet types
  const dietTypesMap: { [key: string]: number } = {};
  data.forEach((row) => {
    const diet = row.Diet_type || "Unknown";
    dietTypesMap[diet] = (dietTypesMap[diet] || 0) + 1;
  });

  return NextResponse.json({
    title: "Nova Diet Insights Dashboard",
    totalRecipes,
    dietBreakdown: dietTypesMap,
    sampleRecord: data[0] || null,
  });
}