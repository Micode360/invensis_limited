import { useEffect, useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from 'next/router';

let cookies = new Cookies();
let user = cookies.get('usertkn');


export default function Login () {
  const router = useRouter();
  const [loading, setLoading] =  useState<boolean>(false);
  const [status, setStatus] =  useState<string>("");

  useEffect(()=>{
        if(user) {
          router.push('/admin');
        }
    },[router])

    const initialValues = {
      username: "",
      password: ""

    };
  
    const validationSchema = Yup.object().shape({
      username: Yup.string().required(),
      password: Yup.string().required(),
    });
  

  
    const renderError = (errMessage: any) => (
      <p className="text-[#9e3818]">{errMessage}</p>
    );
  
  
    const onSubmit = (values: any) => {
      setLoading(true)
      axios
        .post(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/login`, values)
        .then((response) => {
          setLoading(false)
          setStatus("")
          cookies.set("usertkn", response.data.token)
          window.location.href = '/admin';
        })
        .catch(() => {
          setLoading(false)
          setStatus("error")
          return {message: 'error'}
        });
    };
  
  
  return (
    <main className="bg-[#f5f3f3] fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form className="mx-6 md:w-[40%] bg-white p-[2rem] pt-0 rounded-md border-[1px] border-[#eee] overflow-hidden">
        <div></div>
        {loading ? (
                  <div className="w-full h-1 ">
                    <div className="w-20 rounded h-1 bg-blue-800 transload"></div>
                  </div>
                ) : (
                  ""
                )}
        <div className="flex flex-col items-center pt-[2rem]">
                <Image
                className="min-w-[8.438rem] mb-4"
                src="/black_logo.svg"
                width={135}
                height={32}
                alt="invensis_logo"
            />
        <h2 className="text-[0.9rem] sm:text-[1rem] mb-[0.5rem] font-[700] text-center">Welcome to Invensis Admin</h2>
        <p className="text-[0.8rem] md:text-[1rem] leading-8 text-[#555454] text-center">Log into your account</p>
        </div>
          <div className="grid md:grid-row-2 gap-4">
            <div className="mb-0 md:mb-4 col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                UserName <sup className="text-red-500">*</sup>
              </label>
              <Field
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                type="text"
                name="username"
                placeholder="User Name"
              ></Field>
              <ErrorMessage name="username" render={renderError} />
            </div>
            <div className="mb-0 md:mb-4 col-span-2">
              <label className="text-[1rem] text-[#B53D1B] font-[700]">
                Password<sup className="text-red-500">*</sup>
              </label>
              <Field
                className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full outline-[#9e3818] md:mr-4 px-[1rem] text-[1rem]"
                type="password"
                name="password"
                placeholder="Password"
              ></Field>
              <ErrorMessage name="password" render={renderError} />
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
        </Form>
      </Formik>

      {status === "error" ? (
          <div className="fixed top-0 left-0 right-0 text-center text-white bg-red-700 py-4 text-[1.2rem] z-[9999999]">
            Error. Try again
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
    </main>
);


}