import { useState } from "react";
import Checkbox from "../ui/Checkbox";

import { getCurrentUser, updateCurrentUser } from "../services/apiAuth";
import { Form, useActionData, useLoaderData } from "react-router-dom";

import FormRow from "../ui/FormRow";

const Profile = () => {
  const [checked, setChecked] = useState(false);
  const data = useLoaderData();
  const { email, fullName } = data?.user_metadata;
  const errors = useActionData();
  console.log(errors);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <section className="py-16 height-dvh">
      <div className="align-element">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="items-start">
            <h3 className="text-xl font-serif text-brownish-1 font-semibold md:text-2xl ">
              Account Information
            </h3>
            <hr className="w-full h-[2px]  mt-2 mb-4 bg-amber-800" />
            <Form method="POST">
              <div className="space-y-4">
                <FormRow
                  label={"Full Name"}
                  type={"text"}
                  name={"fullName"}
                  defaultValue={fullName}
                  error={errors?.fullName}
                />
                <FormRow
                  label={"Email"}
                  type={"email"}
                  name={"email"}
                  defaultValue={email}
                  disable
                />
                <Checkbox
                  label={"Change Password"}
                  checked={checked}
                  onChange={handleChange}
                />
                <div>
                  <button className="text-base block  font-medium rounded-sm uppercase py-2 px-4 bg-brownish-1 text-white hover:brightness-200 transition-all duration-160">
                    Update Name
                  </button>
                </div>
              </div>
            </Form>
          </div>

          {checked && (
            <div className="items-start">
              <h3 className="text-xl font-serif text-brownish-1 font-semibold md:text-2xl ">
                Change Password
              </h3>
              <hr className="w-full h-[2px]  mt-2 mb-4 bg-amber-800" />
              <Form method="POST">
                <div className="space-y-4">
                  <FormRow
                    label={"Password"}
                    type={"password"}
                    name={"password"}
                    error={errors?.password}
                  />
                  <FormRow
                    label={"Confirm Password"}
                    type={"password"}
                    name={"confirmPassword"}
                    error={errors?.confirmPassword}
                  />
                  <div>
                    <button className="text-base block  font-medium rounded-sm uppercase py-2 px-4 bg-brownish-1 text-white hover:brightness-200 transition-all duration-160">
                      Update Password
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const fullName = data?.fullName;
  const password = data?.password;
  const confirmPassword = data?.confirmPassword;

  const errors = {};

  if ((fullName && !fullName.length) || (fullName && fullName.trim() === " ")) {
    errors.fullName = "Please provide a valid name";
  }

  if (password && password.length < 6) {
    errors.password = "Please ensure your password is at least 6 characters";
  }

  if (password && password !== confirmPassword && confirmPassword) {
    errors.confirmPassword = "It appears your passwords don't match";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  let user;

  if (fullName) {
    user = await updateCurrentUser({ fullName });
  }
  if (password) {
    user = await updateCurrentUser({ password });
  }

  return user;
};

export const loader = async () => {
  const user = await getCurrentUser();

  return user;
};

export default Profile;
