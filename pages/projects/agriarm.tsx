import React, { useEffect , useState } from 'react'
import axios from 'axios';
import Image from 'next/image';




import plant from '@/public/plant.jpg'
import Statusbar from '../../components/projects/agriarm/Statusbar';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IoWaterSharp } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdControlCamera } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';



const Agriarm = () => {
  const [sData,setsData] = useState<any>([])
  useEffect(() => {
    
    const fetchallsdata = async () =>{
      try {
        
        const res =  await axios.get("http://localhost:8800/data")
    
       setsData(res.data);
 

      }
      catch(err){
        console.log(err)
      }
    }
  
    fetchallsdata()
  }, [])
  

  return (
    <div className=' bg-green-100 h-screen w-screen'>
      <div className=' bg-green-300 w-screen   '>

      
      <div className=' h-16 w-[94%] mx-auto flex items-center justify-between '>
      
      <div className='text-2xl gap-3 flex items-center justify-center font-semibold'><AiOutlineDashboard className='mt-1 text-3xl'/> Dashboard</div>
       
       
      <div className='md:flex hidden justify-center items-center gap-2  rounded bg-emerald-200 p-4 '>
      
      <RiPlantFill className='text-2xl text-green-900 '/>
      <span className=' text-lg font-semibold '>Agriarm</span>
      </div>

       <div className='flex justify-evenly items-center gap-10'>

      
        
 
       
        
      
        <div className='md:flex hidden bg-white items-center h-9 overflow-hidden rounded-2xl justify-between drop-shadow-lg'> 
      <label htmlFor="fname">
        <button><IoSearch className='ml-4 mt-1'/></button>
        </label> 
        <input  type="text" id="fname" name="fname" className='outline-none m-2 w-16 md:w-36  text-xs font-semibold' placeholder='Search'></input> </div>
      
       <div className='   text-white  p-1.5 mt-1 font-medium bg-green-500  rounded-2xl flex justify-center items-center'>
      <button > <MdControlCamera className='text-2xl'/></button>
    
      
      </div>

      

      </div>

      </div>
      
      </div>
      <div className='p-3  text-3xl font-semibold text-center'>Overview</div>
    <div className='flex flex-wrap'>
{
  sData.map((data: any)=>(
   <div key={data.id} className=' max-w-xs  rounded-lg overflow-hidden m-2 bg-slate-300 p-2 '>
 

   <div className='relative group'> 
   <Image src={plant} width={320} height={320} alt="  Picture of the plant" className='  rounded-2xl '></Image>
   <p className='absolute top-2 left-3 font-bold text-gray-500 group-hover:visible invisible'>{data.id}</p>
   <p className='absolute top-2 right-3 font-bold text-gray-500 group-hover:visible invisible'>{data. reading_time}</p>
-
   </div>
   <div className='flex justify-evenly items-center gap-2 w-full 2  mt-3'> <BsFillSuitHeartFill className='text-2xl text-[#ff0048] m-1'/> <Statusbar level='w-20'  text={  'Health - ' + data.value1}
   currentColor={" linear-gradient(10deg, rgba(32,255,6,1) 0%, rgba(40,121,9,1) 0%, rgba(1,255,0,1) 0%, rgba(255,255,255,1) 0%, rgba(57,255,0,1) 0%, rgba(101,255,59,1) 48%, rgba(1,255,0,1) 100%)"}/>  </div>

   <div className=' flex   items-center justify-center gap-2'> <IoWaterSharp className='text-3xl text-[#0015ff] m-1' /><Statusbar level= { `${ data.value2 > 100 ? "w-[10px]" : 'w-[250px]'} `} text={'Water - ' + data.value2} currentColor={"linear-gradient(0deg, rgba(0,255,248,1) 0%, rgba(73,247,247,1) 53%, rgba(0,255,243,1) 97%)"}/>  
   
   </div>
   <div className='flex   items-center justify-center'>
   <button className=' text-center p-1 rounded-full m-2  px-3 bg-green-200 drop-shadow-lg hover:bg-green-300 font-semibold '>View More Details</button>
   </div>
   </div>
  ))
}


    </div>
  </div>
  )
}

export default Agriarm