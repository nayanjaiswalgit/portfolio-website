
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
import Link from 'next/link';

interface ViewdetailProps {
  viweDetailHandler: any;
  forwarddata: any;
}

const Viewdetail: React.FC<ViewdetailProps> = ({
  viweDetailHandler,
  forwarddata,
}) => {
  useEffect(() => {}, []);
  const plantid = forwarddata[1] ;
  forwarddata = forwarddata[0] ;
 
  return (
    <div
      className="md:w-[30%] w-[50%] h-[90%] bg-white   top-16 fixed right-2 rounded-lg 
    flex justify-top items-center    flex-col gap-4 overflow-scroll "
    >
      <button
        className="z-40 fixed top-20 right-10"
        onClick={() => viweDetailHandler({})}
      >
        <AiOutlineCloseCircle className="text-3xl" />
      </button>

      <div className="mt-10 w-xl">
        <img

          src={forwarddata.image}

          width = "250px"
          alt="plant"
          className="rounded-xl"
        ></img>
      </div>
      <div className="md:w-[86%]  h-20 bg-orange-400-100 rounded-lg flex justify-center items-center gap-2 md:gap-5 p-2">
        <div>
   
          <div className="w-12 h-12 bg-orange-200 rounded-lg p-1">
            <div className="text-[8px] font-bold opacity-50">Humidity</div>
            <div className="ml-1 text-xl font-bold">
              {forwarddata.humi}
              <span className="text-xs ml-1 text-slate-500">%</span>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-12 h-12 bg-blue-300 rounded-lg p-1">
            <div className="text-[8px] font-bold opacity-50">Water</div>
            <div className="ml-1 text-xl font-bold">
              {forwarddata.soil}
              <span className="text-xs ml-1 text-slate-500">%</span>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="w-12 h-12 bg-yellow-200 rounded-lg p-1">
            <div className="text-[8px] font-bold opacity-50">Light</div>
            <div className="ml-1 text-xl font-bold">
              76
              <span className="text-xs ml-1 text-slate-500">%</span>
            </div>
          </div>{" "}
        </div>

        <div>
          <div className="w-12 h-12 bg-red-200 rounded-lg p-1">
            <div className="text-[8px] font-bold opacity-50 ">Temp</div>
            <div className="ml-1 text-xl font-bold relative">
              {forwarddata.temp}
              <span className="text-sm  absolute top-0">°C</span>
            </div>
          </div>
        </div>
      </div>
      <Link href={`dashboard/${plantid}`}className=' text-center p-1 rounded-full m-2  px-3 bg-green-200 drop-shadow-lg hover:bg-green-300 font-semibold ' >View  More Details</Link>
      
    </div>
  );
};
export default Viewdetail;
