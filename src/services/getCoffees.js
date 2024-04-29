import supabase from "./supabase";

export async function getCoffees() {
  const { data, error } = await supabase.from("coffees").select("*");

  if (error) {
    console.error(error);
    throw new Error("Coffees could not be loaded");
  }

  return data;
}

export async function getCoffee(id) {
  const { data, error } = await supabase
    .from("coffees")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Could not load the coffee");
  }

  return data;
}
