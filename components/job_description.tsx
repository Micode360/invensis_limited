import { useState } from "react";
import { DaysAgo } from "./date_format";
import ReactMarkdown from "react-markdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function JobDescription({ menu, setMenu, job }: any) {
  const [option, setOption] = useState<any>({ type: "description", value: "" });
  const [status, setStatus] = useState<string>("");

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    location: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().required(),
    location: Yup.string().required(),
  });

  let [attachment, setAttachment] = useState<any>({
    attachment: "",
    attachmentError: "",
  });

  const renderError = (errMessage: any) => (
    <p className="text-[#9e3818]">{errMessage}</p>
  );

  const fileUpload = (e: any) => {
    let value = e.target.files[0];
    let type = e.target.files[0].type.split("/")[1];

    if (type.toLowerCase() === "pdf") {
      return setAttachment({
        ...attachment,
        attachment: value,
        attachmentError: "",
      });
    } else
      return setAttachment({
        ...attachment,
        attachmentError: "Invalid file format",
      });
  };

  const onSubmit = (values: any) => {
    if (attachment.attachment === "") {
      setAttachment({
        ...attachment,
        attachmentError: "Error in uploading file. try again",
      });
      return;
    }

    setStatus("pending");

    let formData = new FormData();
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("email", values.email);
    formData.append("location", values.location);
    formData.append("jobId", job.id);
    formData.append("file", attachment.attachment);
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/public/apply`, formData)
      .then(() => {
        setStatus("success");
        window.location.reload()
      })
      .catch(() => setStatus("error"));
  };

  return (
    <section
      className={`${menu} top-0 left-0 right-0 bottom-0 bg-[#0000002c] z-[999999]`}
    >
      <div className="bg-white overflow-y-auto absolute top-0 left-0 md:left-[50%] right-0 bottom-0 px-6 2xl:px-[8rem] py-12">
        {status === "pending" ? (
          <div className="absolute top-0 left-0 right-0 w-full h-1">
            <div className="w-20 rounded h-1 bg-blue-800 transload"></div>
          </div>
        ) : (
          ""
        )}
        <div
          onClick={() => {
            setOption({ type: "description", value: "" });
            setMenu("hidden");
          }}
          className="absolute top-6 right-[2rem] bg-white p-2 rounded-lg shadow-md border-[1px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        {option.type === "description" ? (
          <div>
            <div className="mb-[2rem]">
              <h3 className="text-[2rem] font-[700] mb-[0.5rem]">
                {!job.title ? "" : job.title}
              </h3>

              <div className="mb-[0.5rem]">
                <span className="font-[700]">Location: </span>
                <span>{!job.location ? "" : job.location}</span>
              </div>
              <div className="mb-[0.5rem] text-gray-600">
                <span className="font-[700] text-black">Posted: </span>
                {!job.createdAt ? "" : DaysAgo(job.createdAt)}
              </div>

              <div className="mb-[0.5rem] text-gray-600">
                <span className="font-[700] text-black">Start Date: </span>
                {!job.startdate ? "" : job.startdate}
              </div>


              <h3 className="font-[700] text-[1.2rem] mb-4">Description</h3>
              {!job.description ? (
                ""
              ) : (
                <div className="markdown-container">
                  <ReactMarkdown>{job.description}</ReactMarkdown>
                </div>
              )}
            </div>

            <div className="flex">
              <button
                onClick={() => setOption({ type: "application", value: "" })}
                className="text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] py-4 px-8 z-[1551]"
              >
                Apply
              </button>
            </div>
          </div>
        ) : option.type === "application" ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await onSubmit(values);
              resetForm();
            }}
          >
            <Form className="pt-[4rem]">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="mb-0 md:mb-4 col-span-2">
                  <label className="text-[1rem] text-[#B53D1B] font-[700]">
                    First Name <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  ></Field>
                  <ErrorMessage name="firstname" render={renderError} />
                </div>
                <div className="mb-0 md:mb-4 col-span-2">
                  <label className="text-[1rem] text-[#B53D1B] font-[700]">
                    Last Name <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  ></Field>
                  <ErrorMessage name="lastname" render={renderError} />
                </div>
                <div className="col-span-2">
                  <label className="text-[1rem] text-[#B53D1B] font-[700]">
                    Email <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black outline-[#9e3818] w-full md:mr-4 px-[1rem] text-[1rem]"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  ></Field>
                  <ErrorMessage name="email" render={renderError} />
                </div>

                <div className="col-span-2">
                  <label className="text-[1rem] text-[#B53D1B] font-[700]">
                    Location <sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black outline-[#9e3818] w-full md:mr-4 px-[1rem] text-[1rem]"
                    type="location"
                    name="location"
                    placeholder="Location"
                  ></Field>
                  <ErrorMessage name="location" render={renderError} />
                </div>
              </div>

              <div className="col-span-2">
                <label className="flex items-center py-[1.2rem] mt-4 px-[1.2rem] mb-6 md:mb-0 mr-0 md:mr-6 text-black text-[1.1rem] md:text-[0.8rem] border-[1px] border-[#424040] bg-[#f5f1f0] hover:bg-[#eeeae9] active:bg-[#f5f1f0] rounded-[4px] w-full md:w-fit md:mt-6">
                  <span className="mr-2 text-xs normal-case">
                    Upload resume
                  </span>
                  <Field
                    type="file"
                    name="attachment"
                    onChange={fileUpload}
                    className="hidden"
                  />
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                </label>

                {attachment.attachmentError != "" ? (
                  <small className="text-[#9e3818] text-[0.9rem] mt-1">
                    {attachment.attachmentError}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col md:flex-row">
                <button
                  onClick={() => setOption({ type: "description", value: "" })}
                  type="button"
                  className="py-[1.2rem] mt-4 px-[4rem] mb-6 md:mb-0 mr-0 md:mr-4 text-black border-[1px] border-[#424040] bg-[#f5f1f0] hover:bg-[#eeeae9] active:bg-[#f5f1f0] rounded-[4px] w-full md:w-fit md:mt-6"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="py-[1.2rem] mt-4 px-[4rem] text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-full md:w-fit md:mt-6"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        ) : (
          ""
        )}

        {status === "success" ? (
          <div className="fixed top-0 left-0 right-0 text-center text-white bg-green-700 py-4 text-[1.2rem] z-[9999999]">
            {" "}
            Success{" "}
            <span
              onClick={() => setStatus("none")}
              className="absolute right-8 cursor-pointer"
            >
              x
            </span>
          </div>
        ) : status === "error" ? (
          <div className="fixed top-0 left-0 right-0 text-center text-white bg-red-700 py-4 text-[1.2rem] z-[9999999]">
            {" "}
            Error. Try again{" "}
            <span
              onClick={() => setStatus("none")}
              className="absolute right-8 cursor-pointer"
            >
              x
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
