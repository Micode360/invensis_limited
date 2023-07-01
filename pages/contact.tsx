import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Contact() {
  const [messageDisplay, setMessageDisplay] = useState<any>("hidden");
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    message: Yup.string().required()
  });

  const renderError = (errMessage:any) => (
    <p className="text-[#ebd088]">{errMessage}</p>
  );

  const onSubmit = (values:any) => {
      axios.post(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/contact`,values)
      .then((res:any)=>{
        setMessageDisplay("fixed");
      })
      return;
    }

  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700]">
            Contacts
          </h2>
        </div>
        <Image
          className="absolute top-[-2rem] left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="invensis_logo"
        />
      </section>

      {/* contact information */}
      <section className="flex items-center justify-center py-[3.688rem] md:py-[6.688rem]">
        <div className="w-[93%] 2xl:w-[70%]">
          <div className="md:w-[50%] mb-[3rem]">
            <h2 className="text-[6.8vw] sm:text-[3.8vw] xl:text-[3rem] mb-6 font-[700] border-l-[8px] border-[#B53D1B] pl-4">
              Get in touch
            </h2>
            <p className="text-[0.8rem] md:text-[1rem] leading-8">
              We&apos;d love to hear from you! Reach out to us and let&apos;s
              start a conversation. Our team at Invensis Technologies Synergy
              Limited is ready to assist you with your inquiries, collaborate on
              projects, and provide the solutions you need. Contact us today and
              discover how we can contribute to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 py-[3rem]">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-[5rem] h-[5rem] bg-[blue] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <h3 className="py-4 font-[600] text-[1.125rem]">Address</h3>

              <p className="py-4 text-center">
                3rd Floor Pneuma Place, Woji-Akpajo New Link Road, Woji, Port
                Harcourt, Rivers State, Nigeria.
              </p>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-[5rem] h-[5rem] bg-[blue] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="py-4 font-[600] text-[1.125rem] ">Call Us</h3>

              <p className="pt-4 ">0803 314 9934</p>
              <p className="py-4 ">0803 516 3730</p>
            </div>

            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-[5rem] h-[5rem] bg-[blue] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="py-4 font-[600] text-[1.125rem] ">Email</h3>

              <p className="py-4 ">invensis.techsyn@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form*/}
      <section className="relative flex justify-center items-center text-white bg-[#f0572d] py-[6.688rem] 2xl:py-[8.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1550]">
          <div>
            <h2 className="text-[2rem] sm:text-[3rem] mb-[2rem]">
              Let&apos;s Connect
            </h2>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              await onSubmit(values);
              resetForm();
            }}
          >
            <Form>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="mb-0 md:mb-6">
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full md:mr-4 px-[1rem] text-[1rem]"
                    type="text"
                    name="name"
                    placeholder="Name"
                  ></Field>
                   <ErrorMessage name="name" render={renderError} />
                </div>
                <div>
                  <Field
                    className="py-[1.2rem] border-[1px] mb-1 border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full md:mr-4 px-[1rem] text-[1rem]"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  ></Field>
                   <ErrorMessage name="email" render={renderError} />
                </div>
              </div>

              <div>
                <Field
                  as="textarea"
                  className="py-[1.2rem] border-[1px] border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full my-4 md:mr-4 px-[1rem] mb-0 text-[1rem]"
                  rows={4}
                  name="message"
                  placeholder="Message"
                ></Field>
                 <ErrorMessage name="message" render={renderError} />
              </div>
              <button type="submit" className="py-[1.2rem] mt-4 px-[4rem] text-black border-[1px] border-[#424040] bg-[#f5f1f0] hover:bg-[#eeeae9] active:bg-[#f5f1f0] w-full md:w-fit md:mt-6">
                Send Message
              </button>
            </Form>
            </Formik>
          </div>
        </div>
        <Image
          className="absolute bottom-0 left-0 min-w-[30rem]"
          src="/img/polygon_group.svg"
          width={135}
          height={32}
          alt="polygon"
        />
        <Image
          className="absolute top-0 right-[-2rem] min-w-[30rem]"
          src="/img/polygon_full.svg"
          width={135}
          height={32}
          alt="polygon"
        />
      </section>
      <section>
        <iframe
          className="w-full"
          width={520}
          height={400}
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&height=400&hl=en&q=3rd%20Floor%20Pneuma%20Place,%20Woji-Akpajo%20New%20Link%20Road,%20Woji,%20Port%20Harcourt,%20Rivers%20State,%20Nigeria.%20Port%20Harcourt+()&t=&z=12&ie=UTF8&iwloc=B&output=embed"
        />
      </section>
      <div className={`text-center ${messageDisplay} top-0 left-0 right-0 bg-white py-6 text-[1rem] shadow-md `}> {'Message Sent'} <span onClick={()=>setMessageDisplay("hidden")} className="absolute right-4 cursor-pointer">x</span> </div>
      <Footer />
    </main>
  );
}
