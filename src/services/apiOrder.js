import supabase from "./supabase";

export const createOrder = async (newOrder) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Order could not be created");
  }

  return data;
};

export const getOrder = async (id) => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    throw new Error("Order could not be fetched");
  }

  return data;
};

export const getOrders = async () => {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }

  return data;
};
