import Image from 'next/image';
import logo from '@/public/logo.png'
export default function Home() {
  return (
    <div className=" h-[100vh] w-full flex  flex-col justify-center items-center gap-4 bg-gradient-to-t from-slate-200 to-white ">
      
        <div className="  text-center font-semibold opacity-95 ">
           <Image src={logo} width={200}  alt='logo ' className=' rounded-2xl border-2'></Image> </div>
        <div className='text-center' ><h1 className="font-bold text-3xl ">Welcome To My Website</h1>
        <button className='py-3 px-14 rounded-lg  bg-green-600 text-white m-5'>See My Projects</button>
        </div>
        <div>


        
        </div>
    </div>
  )
}
