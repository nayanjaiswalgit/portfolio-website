import Image from "next/image";
import plant from "../../../public/image12.jpg"
const Viewdetail = () => {
return(
    <div className="md:w-[30%] w-[50%] h-[90%] bg-white   top-16 fixed right-2 rounded-lg 
    flex justify-center items-center   p-4  flex-col gap-4 overflow-scroll">
       
       <div className="mt-32"><Image src={plant} width = {300} alt="plant" className="rounded-xl"></Image>
       </div> 
       <div className="md:w-[86%]  h-20 bg-orange-400-100 rounded-lg flex justify-center items-center gap-2 md:gap-5 p-2"> 
   
       <div> <div className="w-12 h-12 bg-orange-200 rounded-lg p-1">

       <div className="text-[8px] font-bold opacity-50">Humidity</div>
       <div className="ml-1 text-xl font-bold">76
       <span className="text-xs ml-1 text-slate-500">%</span>
       </div>
       

       </div>
      
       </div>
           <div> <div className="w-12 h-12 bg-blue-300 rounded-lg p-1">
            
           <div className="text-[8px] font-bold opacity-50">Water</div>
       <div className="ml-1 text-xl font-bold">76
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
       <div className="ml-1 text-xl font-bold relative">76
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