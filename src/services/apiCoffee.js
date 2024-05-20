import supabase from "./supabase";

export async function getCoffees(name) {
  // if (name) {
  //   let { data, error } =
  // }

  let { data, error } = name
    ? await supabase.from("coffees").select("*").eq("name", name)
    : await supabase.from("coffees").select("*");

  console.log(name);
  console.log(data);

  if (error) {
    // console.error(error);
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

// create TABLE USERS (
//   id uuid references auth.users not null primary key,
//   username text,
//   email text,
//   password text
// );

// create OR replace function public.handle_newer_user()
// returns trigger as $$
// begin
//   insert into public.users (id, username, email, password)
//   values (new.id, new.username, new.email, new.password);
//   return new;
// end;
// $$ language plpgsql security definer;

// create trigger on_newer_user
//   after insert on auth.users
//   for each row execute procedure public.handle_new_user()
