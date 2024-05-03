import supabase from "./supabase";

export const register = async ({ firstName, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
      },
    },
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
};

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, firstName }) {
  //  Update password || fullName

  let updateData;
  if (password) updateData = { password };
  if (firstName) updateData = { data: { firstName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}
