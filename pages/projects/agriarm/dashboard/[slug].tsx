import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ref, child, get, set } from "firebase/database";
import { IoSearch } from "react-icons/io5";
import { AiOutlineDashboard } from "react-icons/ai";
import { database } from "../../../../firebase";
import { MdControlCamera } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import { RiPlantFill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import Control from "@/components/projects/agriarm/Control";
import processingimg from "../../../../public/processing.gif";

import axios from "axios";

const Plant = () => {
  const [control, showControl] = useState<boolean>(false);
  const [data, setdata] = useState<any>({});
  const [moredetail, setmoredetail] = useState<any>({});
  const [showHeath, setshowHeath] = useState<boolean>(false);
  const router = useRouter();
  const db = database;
  const Identification = data.api2Data?.suggestions;
  const health_assessment = data.api1Data?.health_assessment;
  useEffect(() => {
    const dbRef = ref(database);

    get(child(dbRef, `test/push/${router.query.slug}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snapshotdata = snapshot.val();
          get(child(dbRef, `plantdata/${router.query.slug}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                setdata(snapshot.val().response);
              } else {
                axios
                  .post("http://localhost:8800/", {
                    firestoreLink: snapshotdata.image,
                  })
                  .then((response) => {
                    set(ref(db, "plantdata/" + router.query.slug), {
                      response: response.data,
                    });

                    setdata(response.data);
                  })
                  .catch((error) => {
                    console.log("hello");
                  });
              }
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
        }
      })
      .catch((error) => {
        console.error("Invalid url", error);
      });
  }, []);

  return (
    <div className=" bg-green-100 h-screen w-screen relative">
      {!data.api1Data && (
        <div className="w-full h-full bg-green-100 absolute  top-16 left-0 bottom-0 right-0 z-10 flex justify-center items-center">
          <Image src={processingimg} alt="Landscape picture" width={800} />
        </div>
      )}
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
              ></input>
            </div>

            <div className="   text-white  p-1.5 mt-1 font-medium bg-green-500  rounded-2xl flex justify-center items-center">
              <button
                onClick={() => showControl((prevcontrol) => !prevcontrol)}
              >
                <MdControlCamera className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen relative bg-green-100 capitalize">
        <div className="p-3   ml-4 flex justify-evenly flex-wrap">
          { (!moredetail.plant_name && !showHeath )&& <div className="w-full items-center justify-center flex flex-wrap gap-5">
            <div className="min-w-[200px]">
              <img
                src={data.api2Data?.images[0].url}
                width={300}
                className="rounded-xl overflow-hidden  m-2 border-2 p-1 border-green-800"
              />
            </div>

            <div className=" p-3 rounded-xl text-base font-semibold ">
              <p className=" text-xl font-semibold"  >Plant Identification</p>
              <p>
                Plant - {(data.api2Data?.is_plant_probability * 100).toFixed(0)}
                %
              </p>
              <div className="h-1 w-full my-4 rounded-xl bg-green-800"></div>
              <div>
                {Identification?.map((data: any) => (
                  <div key={data.id} className="flex m-2 gap-4">
                    <div>
                      <img
                        className="rounded-md"
                        src={data.similar_images[0].url_small}
                      ></img>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                      <div>{data.plant_name}</div>
                      <div className="font-normal">
                        similarity - {(data.probability * 100).toFixed(0)}%
                      </div>
                      <div
                        className="font-normal flex justify-center items-center gap-2  underline underline-offset-4 hover:cursor-pointer"
                        onClick={() => setmoredetail(data)}
                      >
                    
                        Detail <AiOutlineSearch />
                      </div>
                      <div  className="font-normal flex justify-center items-center gap-2  underline underline-offset-4 hover:cursor-pointer" onClick={()=>setshowHeath(true)} > Heath Assesment</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>}
          <div className="" >
            <div className="text-4xl font-normal text-center relative ">
           
       
           {   moredetail.plant_name &&   <div className="absolute top-2 right-20 " onClick={()=>setmoredetail({})}><IoCloseCircleOutline className="font-normal text-3xl"/></div>
          }  </div>
         
            {moredetail.plant_name && (
              <div className=" mx-auto w-[90%] relative flex justify-center gap-10 flex-wrap mt-10">
                <div className="w-[40%] min-w-[450px]">
                  <img
                    src={moredetail?.similar_images[0]?.url}
                    width="450px"
                    className="max-w-1/2 rounded-lg"
                  ></img>
                </div>

                <div className="w-1/2  min-w-[450px]">
                  <p className="font-semibold text-lg  ">
                    Common Names :
                    {moredetail?.plant_details?.common_names?.map(
                      (data: any, index: number) => (
                        <div
                          className="inline mx-1 text-lg font-normal"
                          key={index}
                        >
                          {data},
                        </div>
                      )
                    )}
                  </p>

                  <p className="font-semibold text-lg mt-1 ">
                    Edible parts :
                    {moredetail?.plant_details?.edible_parts?.map(
                      (data: any, index: number) => (
                        <p className="inline mx-1 font-normal" key={index}>
                          {data},
                        </p>
                      )
                    )}
                  </p>

                  <div className="font-bold  mt-1">
                    Genus:
                    <p className="font-normal inline ml-1">
                      {moredetail?.plant_details?.structured_name?.genus}
                    </p>
                  </div>

                  <div className="font-bold  mt-1">
                    {" "}
                    Species :
                    <p className="font-normal inline ml-1">
                      {moredetail?.plant_details?.structured_name?.species}
                    </p>
                  </div>
                  <div className="font-semibold text-xl  mt-3">
                    wikipedia description :
                  </div>
                  <p>{moredetail?.plant_details?.wiki_description?.value}</p>
                </div>
              </div>
            )}
          </div>
          <div className={` w-[75%] mx-auto  ${!showHeath && "hidden"}`}>
            <div className=" text-3xl font-bold text-center relative">
              Heath Assesment
              <div className="absolute top-2 right-10 cursor-pointer" onClick={()=>setshowHeath(false)}><IoCloseCircleOutline/></div>
            </div>

            {health_assessment?.diseases.map((diseaes: any, value: number) => (
              <div key={value} className="my-10 flex flex-col gap-3 text-lg">
                <p>#{value + 1}</p>
                {diseaes.disease_details?.common_names && (
                  <div>
                    <p className=" font-semibold inline">disease Name : </p>
                    {diseaes.disease_details?.common_names}
                  </div>
                )}
                {diseaes.disease_details?.classification && (
                  <div>
                    {" "}
                    <p className=" font-semibold inline">classification : </p>
                    {diseaes.disease_details?.classification}
                  </div>
                )}
                {
                  <div>
                    {" "}
                    <p className=" font-semibold inline">description : </p>
                    {diseaes.disease_details?.description}
                  </div>
                }
                {diseaes.disease_details?.treatment && (
                  <div className=" font-semibold inline underline my-1 mx-2">
                    Treatment
                  </div>
                )}
                {diseaes.disease_details?.treatment?.prevention && (
                  <div>
                    <p className=" font-semibold inline">prevention : </p>
                    {diseaes.disease_details?.treatment?.prevention}
                  </div>
                )}
                {diseaes.disease_details?.treatment?.chemical && (
                  <div>
                    <p className=" font-semibold inline">chemical : </p>
                    {diseaes.disease_details?.treatment?.chemical}
                  </div>
                )}
                {diseaes.disease_details?.treatment?.prevention && (
                  <div>
                    <p className=" font-semibold inline">prevention : </p>
                    {diseaes.disease_details?.treatment?.prevention}
                  </div>
                )}
                {diseaes.disease_details?.treatment?.biological && (
                  <div>
                    <p className=" font-semibold inline">biological : </p>
                    {diseaes.disease_details?.treatment?.biological}
                  </div>
                )}
                {diseaes?.probability && (
                  <div>
                    <p className=" font-semibold inline">probability :</p>{" "}
                    {(diseaes?.probability * 90).toFixed(0)} %
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {control && (
          <div className="">
            <Control />
          </div>
        )}
      </div>
    </div>
  );
};
export default Plant;
