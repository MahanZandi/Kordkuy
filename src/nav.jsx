import React, { useState, useEffect } from 'react';
import TextHome from './texthome.jsx';



function Nav({scrollY}) {
    const [defaultClass, setDefaultClass] = useState('fixed w-full top-0 z-50 textNavFirstColor')
    const [navbar, setNavbar] = useState(false);
    
    const scrollYColor = () => {
        if(window.scrollY > 140) setDefaultClass(`${defaultClass}  textNavSecendColor shadow-md`)
        else setDefaultClass('fixed w-full top-0 z-50 textNavFirstColor')    
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollYColor)
    }, [])

    function scrollToIntroduction (){
        window.scrollTo({
          top: 700,
          behavior: 'smooth',
        });
      };


    function scrollToSlider (){
        window.scrollTo({
          top: 1330,
          behavior: 'smooth',
        });
      };

      function scrollToFooter (){
        window.scrollTo({
          top: 2287,
          behavior: 'smooth',
        });
      };

        
    return ( 
        
      <div id='bg-home'> 
            <nav className={`${defaultClass} `} >
                <div  className="container flex pb-5 pt-5 ">
                    <h1 className='text-2xl flex-1 transition-colors  duration-150 hover:text-sky-500 focus-in-expand-fwd  font-sans font-bold'>The Kordkuy</h1>
                    <ul className='hidden md:flex  items-center gap-14 focus-in-expand-fwd  text-2xl font-sans' >

                        <li 
                            className='transition-colors duration-150 hover:text-sky-500'
                            onClick={scrollToIntroduction}
                            >Introduction</li> {/* مقدمه */}

                        <li 
                            className='transition-colors duration-150 hover:text-sky-500'
                            onClick={scrollToSlider}
                            >Tourist attractions</li> {/* جاذبه های گردشگری */}
                            
                        <li className='transition-colors duration-150 hover:text-sky-500'
                            onClick={scrollToFooter}
                        >Contact Us</li>
                    </ul>
                    
                    <div className="md:hidden tilt-in-left-1">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-6 h-6 ${scrollY > 140 ? 'text-gray-800' : 'text-white' }`} //2
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-6 h-6 ${scrollY > 140 ? 'text-gray-800' : 'text-white' }`} // 1
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div>
                    <div
                        className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block " : "hidden"
                        }`}
                    >
                        <ul className="  items-center justify-center space-y-8 md:hidden md:space-x-6 md:space-y-0">
                            <li onClick={scrollToIntroduction} className=" hover:text-sky-500">
                                Introduction
                            </li>
                            <li onClick={scrollToSlider} className=" hover:text-sky-500">
                                Tourist attractions
                            </li>
                            <li onClick={scrollToFooter} className=" hover:text-sky-500">
                                Contact US
                            </li>
                        </ul>

               
                    </div>
                </div>


              </div>
          </nav>
            
            <TextHome/>
      </div>
        
     );
}

export default Nav;