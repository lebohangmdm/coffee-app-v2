import supabase from "./supabase";

export const createComment = async (newComment) => {
  const { data, error } = await supabase
    .from("comments")
    .insert([newComment])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not create the comment");
  }

  return data;
};
