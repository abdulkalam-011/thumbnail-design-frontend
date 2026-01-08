import { FaSquarePhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="grid lg:grid-cols-2 h-fit lg:gap-5 gap-2 text-white  lg:grid-rows-1 relative overflow-hidden">
      <div className=" md:h-full flex justify-center items-center h-fit ">
        <div className="w-full h-full py-5 lg:py-0 lg:pt-5  font-montserrat flex flex-col gap-2 md:gap-4 ">
          <div>
            {" "}
            <h2 className="text-yellow-400 md:text-3xl text-2xl leading-6 font-bold font-montserrat text">
              Let's Connect!
            </h2>
            <p className="font-bodoni text-[12px] md:text-[24px] leading-4 md:leading-8">
              I prefer to connect on{" "}
            </p>
          </div>

          <div className="flex flex-col gap-y-4 mt-5 w-full  h-fit justify-center items-center">
            <a
              href="https://www.instagram.com/abdulkalam_011?igsh=MWZ0cWRleG05OWZ2Zg%3D%3D"
              target="_blank"
              className="flex md:px-8 md:py-4  items-center justify-between px-4 py-2 bg-red-500 w-fit rounded-full sm:border md:bg-transparent md:hover:bg-red-500  md:border-red-500"
            >
              <AiFillInstagram size={30} color="white" />
              <span className="ml-2 text-white font-medium">Instagram</span>
            </a>
            <a
              href="phone:+918303778433"
              target="blank"
              className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4  bg-green-500 w-fit rounded-full sm:border md:bg-transparent md:hover:bg-green-500  md:border-green-500"
            >
              <FaSquarePhone size={30} color="white" />
              <span className="ml-2 text-white font-medium">Phone</span>
            </a>
            <a
              href="mailto:abdulkalam.buss@gmail.com"
              target="blank"
              className="flex items-center justify-between px-4 py-2 md:px-8 md:py-4  bg-cyan-500 w-fit rounded-full sm:border md:bg-transparent md:hover:bg-cyan-500  md:border-cyan-500"
            >
              <MdEmail size={30} color="white" />
              <span className="ml-2 text-white font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className=" h-full flex justify-center items-center ">
        <div className="w-full h-full py-5 lg:py-0 lg:pt-5  font-montserrat flex flex-col gap-2 md:gap-4 ">
          <div>
            {" "}
            <h2 className="text-yellow-400 md:text-3xl text-2xl leading-6 font-bold font-montserrat text">
              Just Fill The Form
            </h2>
            <p className="font-bodoni text-[12px] md:text-[24px] leading-4 md:leading-8">
              to get your first thumbnail for{" "}
              <span className="text-green-500 font-bold">free</span>{" "}
            </p>
          </div>
          <ContactForm />{" "}
        </div>
      </div>
    </div>
  );
};

export default Contact;
