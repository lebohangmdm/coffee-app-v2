import supabase from "./supabase";

export const register = async ({ username, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      username,
    },
  });

  if (error) {
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);

  return data;
};
