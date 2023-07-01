import { useState } from "react"
import axios from "axios";
import Cookies from "universal-cookie";

let cookies = new Cookies();
let user = cookies.get("usertkn");



export default function Delete ({ delDisplay, setDelDisplay , deleteMod, setDeleteMod, Title }: any){
const [status, setStatus] = useState<string>("ready");
const [loading, setLoading] =  useState<boolean>(false);

return ( 
    <>
    {status === "ready" ? (
        <div className={`${delDisplay} z-10 inset-0`}>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="z-20 border-0 rounded-lg shadow-lg relative flex flex-col justify-center items-center px-5 pb-8 overflow-hidden w-full bg-white outline-none focus:outline-none">
                {loading ? (
                  <div className="w-full h-1">
                    <div className="w-20 rounded h-1 bg-blue-800 transload"></div>
                  </div>
                ) : (
                  ""
                )}
                <span
                  className="text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none self-end cursor-pointer absolute top-0 right-0"
                  onClick={() => {
                    setDelDisplay("hidden")
                    setDeleteMod({})
                  }}
                >
                  ×
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 mb-4 mt-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>

                <p>Are you sure you want to delete</p>
                <p>
                  <span className="test-xs font-medium">
                    {deleteMod.title}
                  </span>
                  ?
                </p>

                <div className="flex items-center pt-6 space-x-2 rounded-b border-t border-gray-200">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded text-xs px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                        setLoading(true)

                        axios
                        .post(
                          `${process.env.NEXT_PUBLIC_MAIN_URL}/api/${Title.toLowerCase()}s/${deleteMod.id}`,
                          { cvId: Title === "Application"? deleteMod.cvId: "" },
                          {
                            headers: {
                              Authorization: `Bearer ${user}`,
                            },
                          })
                        .then(() => {
                            setLoading(false)
                            setStatus("success")
                          setTimeout(
                            () => window.location.reload(),
                            2000
                          );
                        })
                        .catch(() => {
                            setLoading(false)
                            setStatus("error")}
                            );
                  }
                  }
                  >
                    I accept
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-blue-300 rounded border border-gray-200 text-xs px-5 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
                    onClick={() => {
                        setDelDisplay("hidden")
                        setDeleteMod({})
                    }}
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 opacity-75 z-[999999999] ">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="z-20 border-0 rounded-lg shadow-lg relative flex flex-col justify-center items-center px-5 py-8 w-full bg-white outline-none focus:outline-none">
                <span
                  className="text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none self-end cursor-pointer absolute top-0 right-0"
                  onClick={() =>{
                    setDelDisplay("hidden")
                    setDeleteMod({})
                  }}
                >
                  ×
                </span>

                {status === "success" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                ) : status === "error" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                ) : (
                  ""
                )}
                <p>{status === "success"? "Data deleted":status === "error"? "Something went wrong":""}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
);
}