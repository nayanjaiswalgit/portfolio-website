import React, { useEffect, useState } from "react";
import Adddata from "@/components/projects/agriarm/Adddata";

import { IoSearch } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";

import { MdControlCamera } from "react-icons/md";
import { RiPlantFill } from "react-icons/ri";
import Control from "@/components/projects/agriarm/Control";
import Viewdetail from "@/components/projects/agriarm/Viewdetail";
import List from "@/components/projects/agriarm/List";

const Agriarm = () => {
  const [control, showControl] = useState<boolean>(false);
  const [adddata, showadddata] = useState<boolean>(false);

  const [forwarddata, setforwarddata] = useState<any>({});

  const viweDetailHandler = (data: any) => {
    setforwarddata(data);
  };


  return (
    <div className=" bg-green-100 h-screen w-screen">
      <div className=" bg-green-300 w-screen   ">
        <div className=" h-16 w-[94%] mx-auto flex items-center justify-between ">
          <div className="text-2xl gap-3 flex items-center justify-center font-semibold">
            <AiOutlineDashboard className="mt-1 text-3xl" /> Dashboard
          </div>

          <div className="md:flex hidden justify-center items-center gap-2  rounded bg-emerald-200 p-4 ">
            <RiPlantFill className="text-2xl text-green-900 " />
            <span className=" text-lg font-semibold ">Agriarm</span>
          </div>

          <div className="flex justify-evenly items-center gap-10">
            <div className="md:flex hidden bg-white items-center h-9 overflow-hidden rounded-2xl justify-between drop-shadow-lg">
              <label htmlFor="fname">
                <button>
                  <IoSearch className="ml-4 mt-1" />
                </button>
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="outline-none m-2 w-16 md:w-36  text-xs font-semibold"
                placeholder="Search"
              ></input>{" "}
            </div>

            <div className="   text-white  p-1.5 mt-1 font-medium bg-green-500  rounded-2xl flex justify-center items-center">
              <button
                onClick={() => showControl((prevcontrol) => !prevcontrol)}
              >
                {" "}
                <MdControlCamera className="text-2xl" />
              </button>
            </div>

            <div className="   text-white  p-1.5 mt-1 font-medium bg-green-500  rounded-2xl flex justify-center items-center">
              <button
                onClick={() => showadddata((prevcontrol) => !prevcontrol)} className="font-bold text-s p-1"
              >
                Add Data
               
              </button>
            </div>

          </div>
        </div>
      </div>
     { !adddata && <div className=" w-screen relative bg-green-100">
        <div className="p-3  text-3xl font-semibold text-center ml-4">
          Overview
        </div>

        {control && (
          <div className="">
            <Control />
          </div>
        )}

        <div className="flex bg-green-100">
          <div className=" flex flex-wrap w-full g-green-100">
            <List setViweDetail={viweDetailHandler} />{" "}
          </div>

          {forwarddata[0]?.humi && (
            <div className=" w-1/2 ">
              <Viewdetail
                viweDetailHandler={viweDetailHandler}
                forwarddata={forwarddata}
              />
            </div>
          )}
        </div>
      </div>}
      {adddata && <Adddata/>}
    </div>
  );
};

export default Agriarm;
