import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";

let cookies = new Cookies();
let user = cookies.get("usertkn");

export default function AdminProjectForm({ setForm, edit, setEdit }: any) {
  const [status, setStatus] = useState<string>("");

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    duration: Yup.string().required(),
    description: Yup.string().required(),
  });

  const onSubmit = (values: any) => {
    setStatus("pending");
    if (edit.type === "edit") {
      console.log(values, "values");
      axios
        .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/projects/projectupdate`, {
          id: edit.content.id,
          name: values.name,
          location: values.location,
          description: values.description,
          duration: values.duration
        },
        {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        })
        .then(() => {
          setStatus("success");
          window.location.reload();
        }).catch(()=>setStatus("error"))
      return;
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/projects/post_get`, values,
      {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then(() => {
        setStatus("success");
        window.location.reload();
      }).catch(()=>setStatus("error"))
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      description: "",
      duration: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      await onSubmit(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (edit.type === "edit") {
      formik.setValues({
        name: edit.content.name,
        location: edit.content.location,
        description: edit.content.description,
        duration: edit.content.duration,
      });
    } else {
      {
        formik.setValues({
          name: "",
          location: "",
          description: "",
          duration: ""
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [edit]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 bottom-0 bg-[#0000002c] z-[999999]`}
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
            setEdit({ type: "none", content: {} });
            setForm("none");
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

        <form onSubmit={formik.handleSubmit} className="pt-[4rem]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="mb-0 md:mb-4 col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                Name <sup className="text-red-500">*</sup>
              </label>
              <input
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                type="text"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder="name"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-[#9e3818]">
                  {formik.errors.name.replace(/^\w/, (c) => c.toUpperCase())}
                </div>
              )}
            </div>
            <div className="mb-0 md:mb-4 col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                Location <sup className="text-red-500">*</sup>
              </label>
              <input
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                type="text"
                name="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
                placeholder="location"
              />
              {formik.touched.location && formik.errors.location && (
                <div className="text-[#9e3818]">
                  {formik.errors.location.replace(/^\w/, (c) =>
                    c.toUpperCase()
                  )}
                </div>
              )}
            </div>
            <div className="mb-0 md:mb-4 col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                Duration <sup className="text-red-500">*</sup>
              </label>
              <input
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                type="text"
                name="duration"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.duration}
                placeholder="location"
              />
              {formik.touched.duration && formik.errors.duration && (
                <div className="text-[#9e3818]">
                  {formik.errors.duration.replace(/^\w/, (c) =>
                    c.toUpperCase()
                  )}
                </div>
              )}
            </div>
            <div className="col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                Description <sup className="text-red-500">*</sup>
              </label>
              <textarea
                rows={4}
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black outline-[#9e3818] w-full md:mr-4 px-[1rem] text-[1rem]"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
                placeholder="description"
              ></textarea>
              {formik.touched.description && formik.errors.description && (
                <div className="text-[#9e3818]">
                  {formik.errors.description.replace(/^\w/, (c) =>
                    c.toUpperCase()
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <button
              type="submit"
              className="py-[1.2rem] mt-4 px-[4rem] text-white bg-[#B53D1B] hover:bg-[#ac391a] active:bg-[#9e3818] rounded-[4px] w-full md:w-fit md:mt-6"
            >
              Submit
            </button>
          </div>
        </form>
      

              {status === "success" ? (
                    <div className="fixed top-0 left-0 right-0 text-center text-white bg-green-700 py-4 text-[1.2rem] z-[9999999]"> Success </div>
                  ) : status === "error" ? (
                    <div className="fixed top-0 left-0 right-0 text-center text-white bg-red-700 py-4 text-[1.2rem] z-[9999999]"> Error. Try again  <span onClick={()=>setStatus("none")} className="absolute right-8 cursor-pointer">x</span></div>                 
                    ) : (
                    ""
                  )}
      </div>
    </section>
  );
}
