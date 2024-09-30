import { supabase } from "./supabase";

export async function getQuranQuestions() {
  let { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("categoryName", "quran"); // Filter by categoryName = 'quran'

  if (error) throw new Error("Error fetching questions");

  return data;
}

export async function getGeneralQuestions() {
  let { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("categoryName", "general"); // Filter by categoryName = 'quran'

  if (error) throw new Error("Error fetching questions");

  return data;
}
