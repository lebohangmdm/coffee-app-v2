export async function getCoffees() {
  const { data, error } = await supabase.from("coffees").select("*");

  if (error) {
    console.error(error);
    throw new Error("Coffees could not be loaded");
  }

  return data;
}
