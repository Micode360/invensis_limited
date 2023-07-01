import { useState, useEffect } from "react";
import { FormatDate } from "../components/date_format";
import JobDetails from "./jobDetails";
import Delete from "./delete";
import ProjectDetails from "./projectDetails";

export default function Table({
  Title,
  headers,
  contents,
  setForm,
  setEdit,
  columns,
  onCellClick,
  secondaryContents
}: any) {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [deleteMod, setDeleteMod] = useState<any>({});
  const [delDisplay, setDelDisplay] = useState<string>("hidden");
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    window.onclick = (e: any) => {
      let className = e.target.className;
      if (className.animVal !== "w-6 h-6 cursor-pointer opt") {
        setSelectedOption(null);
      }
    };
  }, []);

  const [details, setDetails] = useState<any>({
    display: "hidden",
    details: {},
  });


  return (
    <section className="pt-[7rem]">
      {/*Headings*/}
      <section className="flex flex-col md:flex-row md:justify-between px-[1.938rem] items-center">
        <div className="flex items-center w-full md:w-[unset]">
          <div className="border-[1px] mb-[1rem] md:mb-0 rounded-md flex items-center py-[0.625rem] px-[0.313rem] w-full md:w-[unset]">
            <svg
              className="w-6 h-6 mr-[0.656rem] z-[-1]"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
                stroke="#667085"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              className="outline-none w-full"
              onChange={(e: any) => setSearchValue(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>

        {
          setForm === false?
          ""
          :
          <div className="flex items-center w-full md:w-[unset]">
          <button
            onClick={() => setForm(Title)}
            className="px-8 py-3 w-full md:w-auto bg-[#9e3818] text-white rounded-md hover:bg-red-500"
          >
            Add {Title}
          </button>
        </div>
        }
      </section>

      {/*Table*/}
      <section className="px-[1.938rem] py-[1.813rem]">
        <div className="mb-6">
          <h2 className="text-[1.125rem] mb-4"> {Title}s </h2>
          <p className="ml-0">
            {contents.length === 1
              ? contents.length + " " + `posted ${Title}`
              : contents.length === 0
              ? `no posted ${Title}`
              : contents.length + " " + `posted ${Title}s`}
          </p>
        </div>
        <div className="overflow-x-scroll w-full h-[20rem] md:h-auto  relative border-[1px] md:border-none border-[#ddd9d9] rounded-md ">
        <div className="absolute md:static left-0 right-0 top-0 bottom-0">
        <table className="w-full text-[#667085]">
          <thead>
            <tr className="text-left py-[0.813rem] px-[1.5rem] border-b-[1px]">
              {headers.map((title: any, index: any) => (
                <th className="px-[1rem] py-[1rem]" key={index}>{title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {contents.length < 1? 
            <tr>
              <td colSpan={6} className="text-center w-full py-12 font-[700] text-[1.5rem]">
                  No { Title } created  
              </td>
            </tr>
            :
            contents
              .filter((data: any) => {
                if(Title === "Application") {
                  if (
                    data.firstname
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    data.lastname
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) return data;
                   
                }else {
                  if (searchValue === "") {
                    return data;
                  } else if (
                    data.title
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    data.location
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  )
                    {
                      return data;
                    }
                }
 
                return false;
              })
              .sort((a: any, b: any) => {
                let dateA: any = new Date(a.createdAt);
                let dateB: any = new Date(b.createdAt);

                return dateB - dateA;
              })
              .map((data: any, index: number) => (
                <tr className="border-b-[1px]" key={index}>
               {columns.map((column:any) => {
                 if (column === 'description') {
                  return (
                    <td className="px-[1rem] truncate" key={column}>
                      {data[column].slice(0, 20)}...
                    </td>
                  ) 
                }

              if (column === 'clickableColumn') {
                return (
                  <td className="px-[1rem]" key={column} onClick={() => onCellClick(data)}>
                    {data[column]}
                  </td>
                );
              } else {
                return <td key={column}>{data[column]}</td>;
              }
            })}
            <td className="py-[1.625rem] px-[1rem]">{FormatDate(data.createdAt)}</td>
             <td className="py-[1.625rem] px-[1rem]">
                    {
                      Title === 'Application'?
                      <a
                      href={data.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-[#9e3818] text-white rounded-md mr-8 hover:bg-red-500"
                    >
                      Open
                    </a>
                      :
                      <button
                      onClick={() =>
                        setDetails({ display: "fixed", details: data })
                       }
                      className="px-6 py-2 bg-[#9e3818] text-white rounded-md mr-8 hover:bg-red-500"
                    >
                      Details
                    </button>
                    }
                  </td>
            
                  <td className="py-[1.625rem] px-[1rem]">
                    <div className="relative flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer opt"
                        onClick={(e) => setSelectedOption(data.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>

                      {selectedOption === data.id ? (
                        <div className="absolute top-8 left-[-4px] text-xs border-[1px] border-slate-200">
                          {
                            setEdit === false?
                            ""
                            :
                            <div
                            className="px-6 py-1 text-center border-b-[1px] bg-white rounded cursor-pointer"
                            onClick={() => {
                              setEdit({ type: "edit", content: data });
                              setForm(Title);
                            }}
                          >
                            Edit
                          </div>
                          }
                          <div
                            className="px-6 py-2  text-center rounded cursor-pointer"
                            onClick={() => {
                              setDelDisplay("fixed");
                              setDeleteMod(data);
                            }}
                          >
                            Delete
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  {Title === "Career" ? (
                    <JobDetails details={details} setDetails={setDetails} applicants={secondaryContents} />
                  ) :Title === "Project" ? (
                    <ProjectDetails details={details} setDetails={setDetails} />
                  ) : (
                    ""
                  )}
                  <Delete
                    delDisplay={delDisplay}
                    setDelDisplay={setDelDisplay}
                    deleteMod={deleteMod}
                    setDeleteMod={setDeleteMod}
                    Title={Title}
                  />
                </tr>
              ))
             }
          </tbody>
        </table>
        </div>
        </div>
        </section>
    </section>
  );
}
