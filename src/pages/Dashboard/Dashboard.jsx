import React from "react";
import { Button } from "@material-tailwind/react";
import Sidebar from "../../components/Left-Menu";
import Navigation from "../../components/Navigation";
import { BellIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const CustomButton = ({text, time}) => {
  return (
    <Button className="bg-white hover:bg-white w-64 flex justify-between items-center shadow-none hover:shadow-none">
      <a className="p-2 bg-[#f9e4d1] flex rounded-lg">
        <PencilSquareIcon className="h-5 w-5 fill-[#FF993A]" />
      </a>
      <div className="text flex flex-col">
        <span className="text-[13px] font-medium text-left text-black first-letter:uppercase lowercase">{text}</span>
        <span className="text-[10px] font-light text-[#979CA5] mt-1">{time}</span>
      </div>
      <span className="text-lg text-[#979CA5] rotate-90">. . .</span>
    </Button>
  );
};

const Dashboard = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="Menu bottom-3 flex right-5 rounded-md md:rounded-3xl relative md:static md:right-[30rem] bg-white mt-8 shadow-xl p-9 md:h-[calc(96vh-2rem)] w-full md:w-[300rem] animate__animated animate__fadeInUp">
        <Sidebar />
        <div className="right-menu hidden md:block bottom-[2.25rem] relative left-[6.3rem] animate__animated animate__fadeInRight">
          <div className="h-[calc(96vh-2rem)] w-80 bg-[#F6F2DD] rounded-r-3xl pt-16 px-5">
            <div className="flex flex-col justify-center items-center text-center border-b-[1px] border-black pb-10">
              <img src="../../public/assets/Avatar.png" alt="" />
              <span className="text-3xl mb-3">Eve Holt</span>
              <span className="text-xl text-[#979CA5]">Admin</span>
            </div>

            <div className="flex justify-between mt-5 px-2">
              <span className="text-xl">Reminder</span>
              <button className="rounded-full bg-white p-1">
                <BellIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="list-menu justify-center flex mt-5">
              <div className="flex flex-col gap-9">
                <CustomButton text={"meeting"} time={"08.00AM - 12.00PM"}/>
                <CustomButton text={"homework"} time={"10.00AM - 12.00PM"}/>
                <CustomButton text={"study"} time={"12.00AM - 15.00PM"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
