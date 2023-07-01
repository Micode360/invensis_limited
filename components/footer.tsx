import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#010101] text-white md:pt-[3.625rem] pt-[2.625rem] px-6">
      <div className="flex flex-col md:grid md:grid-cols-4 pb-4 md:px-10 2xl:px-[6rem]">
        <nav className="md:col-span-2 mr-[4rem] ">
          <Link href="/">
            <Image
              className="min-w-[8.438rem] mb-[2.729rem]"
              src="/white_logo.svg"
              width={135}
              height={32}
              alt="invensis_logo"
            />
          </Link>
          <p className="mb-6 w-[80%]">
            3rd Floor Pneuma Place, Woji-Akpajo New Link Road, Woji, Port
            Harcourt, Rivers State, Nigeria.
          </p>
          <p className="mb-6">0803 314 9934, 0803 516 3730</p>
          <p className="mb-10">invensis.techsyn@gmail.com</p>

          <div className="flex items-center mr-[1.375rem]">
            <a className="mr-8" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 15.0838C0 22.5413 5.41625 28.7425 12.5 30V19.1663H8.75V15H12.5V11.6663C12.5 7.91625 14.9163 5.83375 18.3337 5.83375C19.4163 5.83375 20.5837 6 21.6663 6.16625V10H19.75C17.9163 10 17.5 10.9163 17.5 12.0837V15H21.5L20.8337 19.1663H17.5V30C24.5837 28.7425 30 22.5425 30 15.0838C30 6.7875 23.25 0 15 0C6.75 0 0 6.7875 0 15.0838Z"
                  fill="#F9F9F9"
                />
              </svg>
            </a>

            <a className="mr-8" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.5538 6.17147C28.51 6.63397 27.3888 6.94647 26.21 7.08772C27.4263 6.35996 28.3362 5.21455 28.77 3.86522C27.6273 4.54396 26.3767 5.02171 25.0725 5.27772C24.1955 4.3413 23.0338 3.72063 21.7679 3.51206C20.502 3.3035 19.2026 3.51871 18.0716 4.12428C16.9405 4.72986 16.041 5.69192 15.5127 6.8611C14.9844 8.03028 14.8569 9.34116 15.15 10.5902C12.8346 10.474 10.5695 9.87215 8.50179 8.82385C6.43404 7.77554 4.60982 6.30417 3.14751 4.50522C2.64751 5.36772 2.36001 6.36772 2.36001 7.43272C2.35946 8.39146 2.59556 9.33552 3.04736 10.1811C3.49917 11.0267 4.15272 11.7478 4.95001 12.2802C4.02536 12.2508 3.12111 12.0009 2.31251 11.5515V11.6265C2.31242 12.9711 2.77756 14.2744 3.62899 15.3152C4.48043 16.356 5.66573 17.0701 6.98376 17.3365C6.12599 17.5686 5.22669 17.6028 4.35376 17.4365C4.72564 18.5935 5.45001 19.6053 6.42547 20.3301C7.40094 21.055 8.57866 21.4567 9.79376 21.479C7.73106 23.0982 5.18362 23.9766 2.56126 23.9727C2.09674 23.9728 1.63261 23.9457 1.17126 23.8915C3.83311 25.6029 6.93169 26.5112 10.0963 26.5077C20.8088 26.5077 26.665 17.6352 26.665 9.94022C26.665 9.69022 26.6588 9.43772 26.6475 9.18772C27.7866 8.36394 28.7699 7.34384 29.5513 6.17522L29.5538 6.17147Z"
                  fill="#F9F9F9"
                />
              </svg>
            </a>

            <a className="mr-8" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 8.09462C9.84963 8.09462 8.09474 9.8495 8.09474 11.9999C8.09474 14.1503 9.84963 15.9052 12 15.9052C14.1504 15.9052 15.9053 14.1503 15.9053 11.9999C15.9053 9.8495 14.1504 8.09462 12 8.09462ZM23.7129 11.9999C23.7129 10.3827 23.7276 8.78017 23.6367 7.16591C23.5459 5.29091 23.1182 3.62685 21.7471 2.25575C20.3731 0.881731 18.7119 0.456926 16.8369 0.366106C15.2197 0.275285 13.6172 0.289934 12.0029 0.289934C10.3858 0.289934 8.78322 0.275285 7.16896 0.366106C5.29396 0.456926 3.6299 0.88466 2.25881 2.25575C0.884783 3.62978 0.459978 5.29091 0.369158 7.16591C0.278337 8.7831 0.292986 10.3856 0.292986 11.9999C0.292986 13.6142 0.278337 15.2196 0.369158 16.8339C0.459978 18.7089 0.887712 20.3729 2.25881 21.744C3.63283 23.1181 5.29396 23.5429 7.16896 23.6337C8.78615 23.7245 10.3887 23.7099 12.0029 23.7099C13.6201 23.7099 15.2227 23.7245 16.8369 23.6337C18.7119 23.5429 20.376 23.1151 21.7471 21.744C23.1211 20.37 23.5459 18.7089 23.6367 16.8339C23.7305 15.2196 23.7129 13.6171 23.7129 11.9999ZM12 18.0087C8.67482 18.0087 5.99123 15.3251 5.99123 11.9999C5.99123 8.6747 8.67482 5.99111 12 5.99111C15.3252 5.99111 18.0088 8.6747 18.0088 11.9999C18.0088 15.3251 15.3252 18.0087 12 18.0087ZM18.2549 7.14833C17.4785 7.14833 16.8516 6.52138 16.8516 5.74501C16.8516 4.96865 17.4785 4.34169 18.2549 4.34169C19.0313 4.34169 19.6582 4.96865 19.6582 5.74501C19.6585 5.92936 19.6223 6.11195 19.5519 6.28231C19.4814 6.45268 19.3781 6.60747 19.2477 6.73783C19.1174 6.86818 18.9626 6.97154 18.7922 7.04198C18.6218 7.11242 18.4393 7.14856 18.2549 7.14833Z"
                  fill="#F9F9F9"
                />
              </svg>
            </a>

            <a className="mr-8" href="#">
              <svg
                width="28"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3748 4.13409C29.2049 3.52813 28.874 2.97952 28.4173 2.54659C27.9477 2.10034 27.372 1.78113 26.7448 1.61909C24.3973 1.00034 14.9923 1.00034 14.9923 1.00034C11.0715 0.95573 7.15158 1.15193 3.2548 1.58784C2.62753 1.76186 2.053 2.0882 1.58229 2.53784C1.11979 2.98284 0.784795 3.53159 0.609795 4.13284C0.189411 6.39752 -0.0148401 8.69702 -0.000205083 11.0003C-0.0152051 13.3016 0.188545 15.6003 0.609795 17.8678C0.781045 18.4666 1.11479 19.0128 1.57854 19.4541C2.04229 19.8953 2.6198 20.2141 3.2548 20.3828C5.63354 21.0003 14.9923 21.0003 14.9923 21.0003C18.9181 21.045 22.843 20.8488 26.7448 20.4128C27.372 20.2508 27.9477 19.9316 28.4173 19.4853C28.8739 19.0525 29.2044 18.5038 29.3735 17.8978C29.8049 15.634 30.0146 13.3336 29.9998 11.0291C30.0322 8.71484 29.8228 6.40354 29.3748 4.13284V4.13409ZM12.0023 15.2803V6.72159L19.8273 11.0016L12.0023 15.2803Z"
                  fill="#F9F9F9"
                />
              </svg>
            </a>
          </div>
        </nav>

        <nav className="flex flex-col mt-6 md:mt-0">
          <h2 className="text-[1.25rem] mb-8">Link</h2>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/">Home</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/about">About Us</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/careers">Careers</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/projects">Projects</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Services</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/contact">Contect us</Link>
          </span>
        </nav>
        <nav className="flex flex-col mt-6 md:mt-0">
          <h2 className="text-[1.25rem] mb-8">What We Do</h2>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Engineering and Construction</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Oil and Gas</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Human Resources</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Marine Services</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Catering Service</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Branding and Design</Link>
          </span>
          <span className="mb-6">
            <Link className="hover:text-[#f75b30]" href="/services">Information Technology</Link>
          </span>
        </nav>
      </div>
      <div className="pt-4 pb-6 border-t-[1px] border-[#B53D1B] text-center">
        Copyright @ Ivensis {`${new Date().getFullYear()}`}{" "}
      </div>
    </section>
  );
}
