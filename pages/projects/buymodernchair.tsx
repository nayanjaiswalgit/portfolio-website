import React, { useState } from "react";
import Image from "next/image";
import{ MdOutlineShoppingCart} from 'react-icons/md' ;
import chair1 from "../../public/buymodernchair/chair1.png";
import chair2 from "../../public/buymodernchair/chair2.png";
import chair3 from "../../public/buymodernchair/chair3.png";
import chair4 from "../../public/buymodernchair/chair4.png";
import chair5 from "../../public/buymodernchair/chair5.png";
import chair6 from "../../public/buymodernchair/chair6.png";

import color1 from "../../public/buymodernchair/color1.jpg";
import color2 from "../../public/buymodernchair/color2.jpg";
import color3 from "../../public/buymodernchair/color3.jpg";
import color4 from "../../public/buymodernchair/color4.jpg";
import color5 from "../../public/buymodernchair/color5.jpg";
import color6 from "../../public/buymodernchair/color6.jpg";
import icon from "../../public/buymodernchair/favicon.ico";

const layouts = [
  { chaircolor: chair1, bgcolour: "linear-gradient(196deg, #f1a9a9, #e66767)" , color : color1, btncolor:'bg-[#944852]'},
  { chaircolor: chair2, bgcolour: "linear-gradient(196deg, #4c4c4c, #262626)", color : color2, btncolor:'bg-[#1a1a1a]'},
  { chaircolor: chair3, bgcolour: "linear-gradient(196deg, #8a9fb2, #5f7991)", color : color3, btncolor: 'bg-[#40566e]' },
  { chaircolor: chair4, bgcolour: "linear-gradient(196deg, #97afc3, #6789a7)", color : color4, btncolor : 'bg-[#5e89b2]' },
  { chaircolor: chair5, bgcolour: "linear-gradient(196deg, #afa6a0, #8c7f76)", color : color5, btncolor: 'bg-[#8c7f76]' },
  { chaircolor: chair6, bgcolour: "linear-gradient(196deg, #aaadac, #838786)", color : color6 , btncolor : 'bg-[#5d6160]'},
];

const Buymodernchair = () => {
  const [layout, setlayout] = useState(layouts[0]);
  const [toggle, settoggle] = useState(true);

  const onChangeHandler = (value: number) => {
    setlayout(layouts[value]);
  };
  return (
    <div
      className=" h-screen w-screen  flex font-['poppins'] leading-7 "
      style={{ backgroundImage: layout.bgcolour }}
    >
      <div className="flex justify-center items-center max-w-[calc(100%-40px)] w-[860px] 
      ">
        <div className="w-[500px] h-[410px]">
          <Image src={layout.chaircolor} alt="chair" ></Image>
        </div>
        <div className="text-white flex flex-col gap-6 w-[370px]">
            <div >
<p className="font-bold tracking-wider	">MODEREN KURSI</p>
<p className="text-3xl font-bold mb-4">TELFORD KURSI</p>
<span className="text-[26px] font-semibold">₹ 5000</span>
<span className="line-through opacity-50 text-xl ml-5">₹ 8000</span>
            </div>
            <div className="">
              <div className="flex gap-4  text-lg mb-5">
                <p className={`${toggle && 'opacity-50'}`} onClick={()=>settoggle(false)}>Description</p>
                <p className={`${!toggle && 'opacity-50'}`} onClick={()=>settoggle(true)}>Details</p>
              </div>
             { toggle ? <div > <p>Introducing the World’s first & only Orthopedic SmartGRID Office Chair  – Onyx.  </p> </div> :
              <div className="flex gap-7 ">
                <div><span className="text-3xl">80</span><span>cm</span>
                <div>Length</div></div>
                <div><span className="text-3xl">65</span><span>cm</span><div>Width</div></div>
                <div><span className="text-3xl">90</span><span>cm</span><div>Height</div></div>
                <div><span className="text-3xl">17.6</span><span>lbs</span><div>Weight</div></div>
              
              </div>}
            </div>
            <div className="font-bold text-xl">Choose Color: </div>
        <div className="flex items-center justify-start gap-3 ">
          
          {layouts.map((item, value) => (
            <div className={`  w-[40px] h-[40px] ${item.color == layout.color ? '  border-gray-700 rounded-lg scale-110 duration-300 border-2' : ''} `} key={value} onClick={() => onChangeHandler(value)}>
              <Image className=" rounded-md " src={item.color} alt="chaircolor"></Image>
            </div>
          ))}
        </div>
        <div>
            <button className={`flex items-center justify-center w-52  gap-3  hover:bg-[#333] rounded-md h-12 ${layout.btncolor} shadow-[0_6px_15px_0_rgba(16,39,112,0.15)]`}>
            <MdOutlineShoppingCart className="text-xl"/>
                <span className="  font-poppins">Add To Cart</span>
               
            </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Buymodernchair;
