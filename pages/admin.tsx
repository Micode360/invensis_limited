import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../adminComponents/navbar";
import Header from "../adminComponents/header";
import Table from "../adminComponents/table";
import AdminJobForm from "../adminComponents/forms/careers";
import AdminProjectForm from "../adminComponents/forms/project";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import axios from "axios";

let cookies = new Cookies();
let user = cookies.get("usertkn");

export default function AdminDarshboard() {
  const router = useRouter();
  const [nav, setNav] = useState<any>("careers");
  const [minNav, setMinNav] = useState<any>("hidden");
  const [form, setForm] = useState("none");
  const [jobs, setJobs] = useState<any>([]);
  const [projects, setProjects] = useState<any>([]);
  const [application, setApplication] = useState<any>([]);
  const [edit, setEdit] = useState<any>({ type: "none", content: {} });

  const getRequest = (url: string, setHook: any) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_MAIN_URL}${url}`,
      {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      })
      .then((response: any) => {
        setHook(response.data);
      });
  };

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
    else {
      getRequest("/api/careers/post_get", setJobs);
      getRequest("/api/projects/post_get", setProjects);
      getRequest("/api/applications/get", setApplication);
    }
  }, [router]);




  return (
    <main>
      <Head>
        <title>Admin | Invensis</title>
      </Head>
      <section className="grid md:grid-cols-6">
        <Navbar setNav={setNav} minNav={minNav} setMinNav={setMinNav} />
        <div className="col-span-5">
          <Header nav={nav} setNav={setNav} setMinNav={setMinNav} />
          {nav === "careers" ? (
            <Table
              Title={"Career"}
              headers={[
                "Title",
                "Location",
                "Description",
                "Created",
                "Details",
                "options",
              ]}
              columns={["title", "location", "description"]}
              contents={jobs}
              setNav={setNav}
              setForm={setForm}
              setEdit={setEdit}
              secondaryContents={application}
            />
          ) : nav === "projects" ? (
            <Table
              Title={"Project"}
              headers={[
                "Name",
                "Location",
                "Description",
                "duration",
                "Created",
                "Details",
                "options",
              ]}
              columns={["name", "location", "description", "duration"]}
              contents={projects}
              setForm={setForm}
              setEdit={setEdit}
            />
          ) : nav === "applications" ? (
            <Table
              Title={"Application"}
              headers={[
                "First Name",
                "Last Name",
                "Email",
                "Location",
                "Applied",
                "CV",
                "options",
              ]}
              columns={["firstname", "lastname", "email", "location"]}
              contents={application}
              setForm={false}
              setEdit={false}
              secondaryContents={jobs}
            />
          ) : (
            ""
          )}
        </div>
        {form === "Career" ? (
          <AdminJobForm
            form={form}
            setForm={setForm}
            edit={edit}
            setEdit={setEdit}
          />
        ) : form === "Project" ? (
          <AdminProjectForm
            form={form}
            setForm={setForm}
            edit={edit}
            setEdit={setEdit}
          />
        ) : (
          ""
        )}
      </section>
    </main>
  );
}
