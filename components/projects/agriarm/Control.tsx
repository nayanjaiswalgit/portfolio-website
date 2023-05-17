import Roundy from "roundy";
import { BsCameraFill } from 'react-icons/bs';
import { MdFlashlightOn } from 'react-icons/md';
import { FiArrowDown } from 'react-icons/fi';
import { FiArrowUp } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { FiArrowRight } from 'react-icons/fi';
import { AiOutlinePause } from 'react-icons/ai';
import { MdSensors } from 'react-icons/md';

const Control = () => {
  return (
    <div className="w-72 bg-white h-4/5 top-20 fixed right-6 rounded-xl p-8 border-2 ">
        
        <div className="flex gap-2  py-2 text-slate-500 justify-between items-center">
          
           
        <button className="text-xs text-center"><div className="w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100">   <BsCameraFill className="text-xl"/>  </div> Camera
          </button>
          <button className="text-xs text-center"><div className="w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100">   <MdSensors className="text-xl"/>  </div> Sensor
          </button>
          <button className="text-xs text-center"><div className="w-12 h-12 border-2  rounded-full flex justify-center items-center m-1 hover:bg-green-100">   <MdFlashlightOn className="text-xl"/>  </div> Tourch
          </button>
         

        </div>
    <div className= "flex justify-center items-center mt-4">
      <div className="w-48 h-48 bg-green-200 rounded-full flex justify-center items-center drop-shadow-lg">
        <div className="w-44 h-44 bg-slate-200 rounded-full flex justify-between items-center flex-col text-2xl p-2 ">
            <button><FiArrowUp /></button>
            <div className="flex w-full justify-between ">
            <button> <FiArrowLeft/></button>
            <button className="w-20 h-20   flex justify-center items-center bg-green-100 rounded-full"><AiOutlinePause/></button>
            <button><FiArrowRight/></button>

                       </div>
            <button><FiArrowDown/></button>
       
        </div>

      </div>
      
    </div>
    <div className="w-full h-6 rounded-lg mt-6">
    <div className="flex justify-center items-center font-semibold text-green-500">Status....</div>
    </div>
    <div className="w-full  text-center font-semibold text-slate-600 ">
      Servo
  <input type="range" min="1" max="100" value="50" id="myRange" className="w-full m-1"/>
  </div>
    </div>
  );
};
export default Control;
