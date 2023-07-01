import { useState } from "react";
import { useFormik } from "formik";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Jobs from "@/components/jobs";
import Image from "next/image";
import axios from "axios";

export default function JobSearch({ jobs }: any) {
  const [title, setTitle] = useState<any>("");
  const [location, setLocation] = useState<any>("");
  const formik = useFormik({
    initialValues: {
      title: "",
      location: "",
    },
    onSubmit: async (values: any) => {
      setTitle(values.title);
      setLocation(values.location);
    },
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    const fieldName = e.currentTarget.name;
    const previousValue = formik.values[fieldName];
    const currentValue = e.currentTarget.value;
    if (currentValue.length < previousValue.length) {
      if (fieldName === "title" && formik.values[fieldName].length === 1) {
        setTitle("");
      }
      if (fieldName === "location" && formik.values[fieldName].length === 1)
        setLocation("");
    }

    formik.handleChange(e);
  };

  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative bg-[#22181C] text-white flex items-center justify-center py-[3.688rem] overflow-hidden">
        <div className="w-[90%] 2xl:w-[70%] z-[1155]">
          <h2 className="text-[2rem] sm:text-[3rem] md:text-[3vw] lg:text-[3.5vw] xl:text-[3rem] font-[700]">
            Job Search
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

      {/*Job Search*/}
      <section className="bg-[#f8f5f5] flex items-center justify-center py-[3.688rem] md:py-[6.688rem]">
        <div className="w-[93%] 2xl:w-[70%]">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white px-[2.125rem] mb-10"
          >
            <div className="pt-[3rem] grid md:grid-cols-2">
              <div className="w-full px-2 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-[0.8rem] md:text-[1rem] font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Job
                </label>
                <input
                  className="py-[1.2rem] border-[1px] border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full my-4 md:mr-4 px-[1rem] text-[1rem]"
                  type="text"
                  name="title"
                  onChange={handleFieldChange}
                  value={formik.values.title}
                  placeholder="Job Title"
                />
              </div>

              <div className="w-full px-2 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-[0.8rem] md:text-[1rem] font-bold mb-2"
                  htmlFor="grid-state"
                >
                  location
                </label>
                <input
                  className="py-[1.2rem] border-[1px] border-[rgba(1, 1, 1, 0.5)] bg-[#f8f5f5] text-black w-full my-4 md:mr-4 px-[1rem] text-[1rem]"
                  type="text"
                  name="location"
                  onChange={handleFieldChange}
                  value={formik.values.location}
                  placeholder="Location"
                />
              </div>
            </div>
            <div className="py-[3rem] pl-2 flex flex-col md:flex-row items-center">
              <button className="py-[1.2rem] text-white px-[4rem] bg-[#B53D1B] hover:bg-[#ac391a] w-full md:w-fit active:bg-[#9e3818]">
                Search
              </button>
            </div>
          </form>

          <div className="border-t-[1px] border-[rgba(1, 1, 1, 0.5)] pt-6">
            <Jobs jobs={jobs} title={title} location={location} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  const response = axios.get(
    `${process.env.NEXT_PUBLIC_MAIN_URL}/api/public/career`
  );
  const jobs = (await response).data;

  return {
    props: {
      jobs: jobs,
    },
  };
}
