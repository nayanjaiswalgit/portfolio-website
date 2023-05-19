import Roundy from "roundy";
import { BsCameraFill } from "react-icons/bs";
import { MdFlashlightOn } from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { AiOutlinePause } from "react-icons/ai";
import { MdSensors } from "react-icons/md";
import { useEffect, useState } from "react";

const Control = () => {
  const [speed, setspeed] = useState([50, 50]);
  const [Camera, setCamera] = useState({ fetch: 0, led:0 });
  const [status, setSetStatus] = useState("Connecting . . . ");

  const CameraControl = async (forwarddata: any) => {
    try {
      const apiKey = "AIzaSyA0-f8b7ZbxGUHabgkvvXvtiIvV3itd5R8"; // Replace with your Firebase API Key
      const url = `https://crop-monitoringsystem-default-rtdb.firebaseio.com/test/control.json?auth=${apiKey}`; // Replace with your Firebase project ID and endpoint

      const data = forwarddata;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to Firebase.");
      }

      console.log("Data sent successfully.");
    } catch (error) {
      console.error("Error sending data to Firebase:");
    }
  };

  const sendDataToFirebase = async (speed: any) => {
    try {
      const apiKey = "AIzaSyA0-f8b7ZbxGUHabgkvvXvtiIvV3itd5R8"; // Replace with your Firebase API Key
      const url = `https://crop-monitoringsystem-default-rtdb.firebaseio.com/test/array.json?auth=${apiKey}`; // Replace with your Firebase project ID and endpoint

      const data = speed;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send data to Firebase.");
      }

      console.log("Data sent successfully.");
    } catch (error) {
      console.error("Error sending data to Firebase:");
    }
  };

  
  const fetchallsdata = async () =>{
    try {
      
      const response =  await fetch("https://crop-monitoringsystem-default-rtdb.firebaseio.com/test/status.json")
  

      if(!response.ok){
        throw new Error("Something wrong ");
      }

      const responseData = await response.json();

     
      setSetStatus(responseData);

     
     


    }
    catch(err){
     
    }
  }
 
  

  useEffect(() => {

    fetchallsdata();
    
  }, []);

  const speedcontrolHandler = (e: any) => {
    setspeed([e.target.value, e.target.value]);
    sendDataToFirebase(["S", ...speed]);
  };

  const speedchangeHandler = (direction: any) => sendDataToFirebase(direction);
  const invert = (logic: any) => {
    if (logic == 1) {
      return 0;
    }
    return 1;
  };

  const setCameraHandler = (type: any) => {
    if (type == "led") {
      setCamera({ fetch: 0  , led: invert(Camera.led) });
      CameraControl({ fetch: 0  , led: invert(Camera.led) });
     }
    if (type == "cam") {
      setCamera({ ...Camera, fetch: 1 });
      CameraControl({ ...Camera, fetch: 1 });
      
      
       
      setTimeout(() => {
        setCamera({ ...Camera ,  fetch:0 })
        fetchallsdata()
      }, 3000);
    }

  
  };

  return (
    <div className="w-72 bg-white h-4/5 top-20 fixed right-6 rounded-xl p-8 border-2 z-40 ">
      <div className="flex gap-2  py-2 text-slate-500 justify-between items-center">
        <button
          className="text-xs text-center"
          onClick={() => setCameraHandler("cam")}
        >
          <div
            className={`w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100 ${
              Camera.fetch == 1 ? "bg-green-300" : ""
            }`}
          >
            <BsCameraFill className="text-xl" />{" "}
          </div>
          Camera
        </button>
        <button className="text-xs text-center">
          <div className="w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100">
            <MdSensors className="text-xl" />
          </div>
          Sensor
        </button>
        <button
          className="text-xs text-center"
          onClick={() => setCameraHandler("led")}
        >
          <div
            className={`w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100 ${
              Camera.led == 1 ?  "bg-green-300"   : ""
            }`}
          >
            <MdFlashlightOn className="text-xl" />
          </div>
          Tourch
        </button>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="w-48 h-48 bg-green-200 rounded-full flex justify-center items-center drop-shadow-lg">
          <div className="w-44 h-44 bg-slate-200 rounded-full flex justify-between items-center flex-col text-2xl p-2 ">
            <button onClick={() => speedchangeHandler(["F", ...speed])}>
              <FiArrowUp />
            </button>
            <div className="flex w-full justify-between ">
              <button onClick={() => speedchangeHandler(["L", ...speed])}>
                <FiArrowLeft />
              </button>
              <button
                className="w-20 h-20   flex justify-center items-center bg-green-100 rounded-full"
                onClick={() => speedchangeHandler(["S", ...speed])}
              >
                <AiOutlinePause />
              </button>
              <button onClick={() => speedchangeHandler(["R", ...speed])}>
                <FiArrowRight />
              </button>
            </div>
            <button onClick={() => speedchangeHandler(["B", ...speed])}>
              <FiArrowDown />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-6 rounded-lg mt-6">
        <div className="flex justify-center items-center font-semibold text-green-500">
          {status}
        </div>
      </div>
      <div className="w-full  text-center font-semibold text-slate-600 ">
        Servo
        <input
          type="range"
          min="20"
          max="1000"
          value={speed[1]}
          id="myRange"
          className="w-full m-1"
          onChange={speedcontrolHandler}
        />
      </div>
    </div>
  );
};
export default Control;
