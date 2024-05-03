import { useState } from "react";
import Checkbox from "../ui/Checkbox";

const Profile = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <section className="py-16 bg-white">
      <div className="align-element">
        <div className="grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="">
            <h3 className="text-xl font-serif text-brownish-1 font-semibold md:text-2xl">
              My Account
            </h3>
            <hr className="w-full h-[2px]  mt-2 mb-4 bg-amber-800" />
            <form>
              <div className="space-y-4 mb-8">
                <div className="space-y-1 ">
                  <label className="capitalize text-brownish-2 font-medium text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="py-[2px] px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="capitalize text-brownish-2 font-medium text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="py-[2px] px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
                    required
                    disabled
                  />
                </div>
                <Checkbox
                  label={"Change Password"}
                  checked={checked}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="text-base block  font-medium rounded-sm uppercase py-2 px-4 bg-brownish-1 text-white hover:brightness-200 transition-all duration-160">
                  Save
                </button>
              </div>
            </form>
          </div>
          {checked && (
            <div className="items-start">
              <h3 className="text-xl font-serif text-brownish-1 font-semibold md:text-2xl ">
                Change Password
              </h3>
              <hr className="w-full h-[2px]  mt-2 mb-4 bg-amber-800" />
              <form>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="capitalize text-brownish-2 font-medium text-sm">
                      Current Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      className="py-[2px] px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="capitalize text-brownish-2 font-medium text-sm">
                      New Password
                    </label>
                    <input
                      type="text"
                      name="newPassword"
                      className="py-[2px] px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="capitalize text-brownish-2 font-medium text-sm">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      name="confirmPassword"
                      className="py-[2px] px-4 bg-transparent w-full rounded-sm border border-brownish-1 focus:border-brownish-2"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
