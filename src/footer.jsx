import React from 'react';
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

function Footer({scrollY}) {


    return ( 
        <div className={`mt-20 pt-1 footer   ${scrollY > 1380 ? 'tilt-in-left-1' : '' }`}>
            <div  className='container xl:max-w-[1063px]  mt-20  text-white   '>
                <h1 className='font-sans font-normal text-[2.6rem]'> Contact Us </h1>
                <div className='bg-white  h-[1px] '>
                </div>
                <div className='bg-white max-w-[30%] h-2'></div>
                    <p className=' xl:text-lg pt-14 leading-loose font-sans font-[350] text-md '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis dignissimos aliquid culpa deleniti aut consectetur id architecto repudiandae. Ipsam excepturi commodi pariatur? Quibusdam suscipit at, tempora quas et quaerat molestiae!</p>
                    <div className=' mt-24 '>
                        <div className='grid grid-cols-1 pb-36 md:grid-cols-2 gap-[75px]'>
                            <div className='flex items-center gap-4 text-white hover:text-sky-500 transition-all duration-[200ms]'>
                                <div>
                                    <MdCall size={60}/> 
                                </div>
                                <p className=' text-xl'>09395526996</p>
                            </div>
                            <div className=' flex items-center gap-4 text-white hover:text-sky-500 transition-all duration-[200ms]'>
                                <div>
                                    <FaLocationDot size={60}/>
                                </div>
                                <p className=' text-xl'>Location on Maps</p>
                            </div>
                            <div className=' flex items-center gap-4 text-white hover:text-sky-500 transition-all duration-[200ms]'>
                                <div>
                                    <BiLogoTelegram size={60}/>
                                </div>
                                <p className=' text-xl '>@OSTADHEMOSO</p>
                            </div>
                            <div className=' flex items-center gap-4 text-white hover:text-sky-500 transition-all duration-[200ms]'>
                                <div>
                                    <MdEmail size={60}/>
                                </div>
                                <p className=' text-xl '>zandim221@gmail.com</p>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>


     );
}

export default Footer;