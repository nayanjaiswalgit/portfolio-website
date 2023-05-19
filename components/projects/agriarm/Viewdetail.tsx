import Image from "next/image";
import plant from "../../../public/image12.jpg"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect   } from "react";
import base64 from "../agriarm/base64"
interface ViewdetailProps {
    viweDetailHandler : any
    forwarddata : any
  }
  
const Viewdetail:React.FC<ViewdetailProps> = ({viweDetailHandler , forwarddata}) => {

 
    

    useEffect(() => {

        console.log(base64())
      }, []);
    

return(
    
    <div className="md:w-[30%] w-[50%] h-[90%] bg-white   top-16 fixed right-2 rounded-lg 
    flex justify-center items-center   p-4  flex-col gap-4 overflow-scroll ">
        <button className="z-40 fixed top-20 right-10"  onClick={()=>viweDetailHandler({})}><AiOutlineCloseCircle className="text-3xl"/></button>
       
       <div className="mt-32"><img src={forwarddata.image} width = {300} alt="plant" className="rounded-xl"></img>
       </div> 
       <div className="md:w-[86%]  h-20 bg-orange-400-100 rounded-lg flex justify-center items-center gap-2 md:gap-5 p-2"> 
   
       <div> <div className="w-12 h-12 bg-orange-200 rounded-lg p-1">

       <div className="text-[8px] font-bold opacity-50">Humidity</div>
       <div className="ml-1 text-xl font-bold">{forwarddata.humi}
       <span className="text-xs ml-1 text-slate-500">%</span>
       </div>
       

       </div>
      
       </div>
           <div> <div className="w-12 h-12 bg-blue-300 rounded-lg p-1">
            
           <div className="text-[8px] font-bold opacity-50">Water</div>
       <div className="ml-1 text-xl font-bold">{forwarddata.soil}
       <span className="text-xs ml-1 text-slate-500">%</span>
       </div>
       

            </div> </div>
           <div><div className="w-12 h-12 bg-yellow-200 rounded-lg p-1">
            
           <div className="text-[8px] font-bold opacity-50">Light</div>
       <div className="ml-1 text-xl font-bold">76
       <span className="text-xs ml-1 text-slate-500">%</span>
       </div>
       
            
            </div> </div>
            
           <div><div className="w-12 h-12 bg-red-200 rounded-lg p-1">
            
           <div className="text-[8px] font-bold opacity-50 ">Temp</div>
       <div className="ml-1 text-xl font-bold relative">{forwarddata.temp}
       <span className="text-sm  absolute top-0">°C</span>
       </div>
       
            
            </div> 
           
           </div>
            
    
       </div>
       <div className="font-bold text-2xl">Hello</div>
       <div>Details...</div>
       <div>Details...</div>
      
    </div>
)

}
export default Viewdetail ;