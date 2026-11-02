import fs from "fs";
import path from "path";
import Papa from "papaparse";

export interface DietRecord {
  Diet_type: string;
  Recipe_name: string;
  Description: string;
  Cuisine_type: string;
  Protein: string;
  Carbs: string;
  Fat: string;
  Extraction_day?: string;
  Extraction_time?: string;
}

export function getDietData(): DietRecord[] {
  const filePath = path.join(process.cwd(), "data", "All_Diets.csv");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
  });
  return parsed.data as DietRecord[];
}