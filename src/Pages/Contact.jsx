// import { TextField, Button } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import { getCurrentUser } from "../services/apiAuth";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import { isValidEmail, isValidPhone } from "../utils/helpers";
import Btn from "../ui/Btn";

const Contact = () => {
  const data = useLoaderData();
  const errors = useActionData();

  const { email, fullName } = data?.user_metadata;

  console.log(errors);

  return (
    <section className="py-16">
      <div className="align-element ">
        <div className="flex flex-col  gap-8 md:flex-row lg:gap-14">
          <div className="md:w-[50%]">
            <h3 className="text-2xl font-semibold mb-2 text-brownish-1">
              About Us
            </h3>
            <p className="text-lg font-semibold mb-3">
              Have any questions about Kofe?
            </p>

            <div className="space-y-3">
              <p className="text-sm">
                You can contact us on our customer service line where we will be
                happy to assist you during weekdays from 08:00 – 17:00 on:
              </p>
              <p className="text-sm">Telephone - 0861 40 40 41</p>
              <p className="text-sm">
                Email -{" "}
                <a
                  href="mailto:customerservice@Kofe.co.za"
                  className="underline underline-offset-2"
                >
                  customerservice@Kofe.co.za
                </a>
              </p>
            </div>
          </div>

          <div className="md:w-[50%]">
            <h3 className="text-2xl font-semibold mb-4 text-brownish-1">
              Send us an email
            </h3>
            <Form method="POST" className="space-y-4 ">
              <div className="space-y-1">
                <label className="capitalize text-brownish-2 font-medium text-sm curs">
                  First Name
                </label>
                <input
                  type={"text"}
                  name={"fullName"}
                  defaultValue={fullName}
                  className="py-2  px-4 text-sm bg-transparent w-full rounded-sm focus:outline-none border border-brownish-1 focus:border-brownish-2"
                  required
                />
                <p className="mt-2 text-sm">{errors?.fullName}</p>
              </div>

              <div className="space-y-1">
                <label className="capitalize text-brownish-2 font-medium text-sm curs">
                  Email
                </label>
                <input
                  type={"email"}
                  name={"email"}
                  defaultValue={email}
                  className="py-2  px-4 text-sm bg-transparent w-full rounded-sm focus:outline-none border border-brownish-1 focus:border-brownish-2"
                  required
                />
                <p className="mt-2 text-sm">{errors?.email}</p>
              </div>

              <div className="space-y-1">
                <label className="capitalize text-brownish-2 font-medium text-sm curs">
                  Phone Number
                </label>
                <input
                  type={"tel"}
                  name={"phone"}
                  className="py-2  px-4 text-sm bg-transparent w-full focus:outline-none rounded-sm border border-brownish-1 focus:border-brownish-2"
                  required
                />
                <p className="mt-2 text-sm">{errors?.phone}</p>
              </div>

              <div className="space-y-1">
                <label className="capitalize text-brownish-2 font-medium text-sm curs">
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="5"
                  className="py-2  px-4 text-sm bg-transparent w-full rounded-sm border focus:outline-none border-brownish-1 focus:border-brownish-2"
                ></textarea>
                <p className="mt-2 text-sm">{errors?.comment}</p>
              </div>
              <Btn type={"medium"}>submit</Btn>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const loader = async () => {
  const user = getCurrentUser();
  return user;
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { fullName, email, phone, comment } = data;

  const errors = {};

  // validate the fields

  if (!fullName.length || fullName.trim().length === 0) {
    errors.fullName = "Please provide a valid name";
  }

  if (!isValidEmail(email)) {
    errors.email = "Please provide a valid email";
  }

  if (!isValidPhone(phone)) {
    errors.phone = "Please provide a valid name";
  }

  if (!comment || comment.trim().length === 0) {
    errors.comment = "Your comment cannot be empty!";
  }

  if (comment.length > 250) {
    errors.comment = "Your comment cannot be greater than 250 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }
  const newComment = {
    fullName,
    email,
    phone,
    comment,
  };

  // const commentObj = await createComment(newComment);
  // console.log(commentObj);
  // return commentObj;
  return null;
};

export default Contact;
