import React, { useEffect , useState } from 'react' ;

import Statusbar from '../agriarm/List';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IoWaterSharp } from 'react-icons/io5';
import Image from 'next/image';

import plant from '@/public/plant.jpg'

const List = () => {

    const [sData,setsData] = useState<any>({})
    const [forwarddata,setforwarddata] = useState<any>({})
  

    const viweDetailHandler = (data:any) => {
      setforwarddata(data) ; 
    }

useEffect(() => {
    
    const fetchallsdata = async () =>{
      try {
        
        const response =  await fetch("https://crop-monitoringsystem-default-rtdb.firebaseio.com/test.json")
    

        if(!response.ok){
          throw new Error("Something wrong ");
        }

        const responseData = await response.json();

        setsData(responseData);
        console.log(responseData);
       
 

      }
      catch(err){
       
      }
    }
    console.log(
      "hello"
    )
    fetchallsdata()
   
  }, [])

  return(
    <div className='flex flex-wrap justify-between align-middle'>
  {
    
    Object.keys(sData).map((data: any)=>(
     <div key={data.id} className=' max-w-xs  rounded-lg overflow-hidden m-2 bg-slate-300 p-2 '>
   
  
     <div className='relative group'> 
     <image src={data.image} width={320} alt="  Picture of the plant" className='  rounded-2xl '></image>
     <p className='absolute top-2 left-3 font-bold text-gray-500 group-hover:visible invisible'>{data.id}</p>
     <p className='absolute top-2 right-3 font-bold text-gray-500 group-hover:visible invisible'>{data. reading_time}</p>
  -
     
     </div>
     <div className='flex   items-center justify-center'>
     <button className=' text-center p-1 rounded-full m-2  px-3 bg-green-200 drop-shadow-lg hover:bg-green-300 font-semibold ' >View More Details</button>
     </div>
     </div>
    ))
  }

  </div>
  )
}
export default List 