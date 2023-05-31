import React, { useEffect , useState } from 'react' ;

import {  ref, child, get, set ,  onValue} from "firebase/database";
import {database} from '../../../firebase'

import Statusbar from '../agriarm/List';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { IoWaterSharp } from 'react-icons/io5';
import Image from 'next/image';
import plant from '../../../public/plant.jpg'


interface ListProps {
  setViweDetail : any
}


const List:React.FC<ListProps> = ({setViweDetail}) => {

    const [sData,setsData] = useState<any>({})

   const ButtonClick = (data:any) =>{setViweDetail(data) ; 
    
}


  

useEffect(() => {
  const db = database;
  const starCountRef = ref(db, 'test/push/' );
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    setsData(data);
  });
  


}, [])


  

  return(
    <div className='flex flex-wrap justify-evenly align-start   '>
  {
    
    Object.keys(sData).map((data: any , index :number)=>(
     <div key={index} className=' max-w-md  rounded-lg overflow-hidden m-2 bg-slate-300 p-2 '>
   
 
     <div className='relative group'> 
     <img src={sData[data].image}  alt="  Picture of the plant"  className='  rounded-2xl  h-80 w-auto fit' loading='lazy'></img>
     <p className='absolute top-2 left-3 font-bold group-hover:visible  invisible'>{index}</p>
     <p className='absolute top-2 right-3 font-bold  group-hover:visible  invisible'>{sData[data].time}</p>
  -
     
     </div>
     <div className='flex   items-center justify-center'>
     <button className=' text-center p-1 rounded-full m-2  px-3 bg-green-200 drop-shadow-lg hover:bg-green-300 font-semibold ' onClick={()=>ButtonClick([sData[data],data])    }>View Details</button>
     </div>
     </div>
    ))
  }

  </div>
  )
}
export default List 