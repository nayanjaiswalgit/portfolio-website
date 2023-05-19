import { useState } from "react";

 function Addnewdata() {
    const [data, setdata] = useState({})

    const setdataHandler = (data:any) => {
        setdata(data)
    }

    return (
      <div className="grid h-screen place-items-center">
        <div>
          <h1 className="text-center text-black text-3xl lg:text-5xl font-bolder ">
            Welcome to Agriarm
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 font-semibold">
          <h4 className="mt-4">Temperature °C</h4>
          <input
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
            type="text"
            placeholder="Enter temperature"
          />
          <h4 className="mt-4">Humidity</h4>
          <input
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
            type="text"
            placeholder="Enter moisture"
            
          />
           <h4 className="mt-4">Water level</h4>
          <input
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
            type="text"
            placeholder="Enter moisture"
            
          />
          
          
          <h4 className="mt-4">Upload image</h4>
          <input
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-1"
            type="file"
            placeholder="enter image"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded content-center">
            <a href="">Submit</a>
          </button>
        </div>
      </div>
    );
  }

  export default Addnewdata ;
  