import React from 'react';
import IMG from "./city-image/milradkan.jpg"



function Main({scrollY }) {

    function scrollToSlider (){
        window.scrollTo({
          top: 1330,
          left: 0,
          behavior: 'smooth',
        });
      };
      
    const styles = {
        defaultClassImg  : 'rounded-3xl shadow-2xl w-full',
        defaultClassText :'font-sans text-justify  text-gray-800 font-normal text-md xl:text-xl',
        defaultClassBtn : 'bg-blue-500  hover:bg-blue-700 text-white sm:mt-10 font-bold py-2 w-32 sm:w-72  px-4 rounded-full' ,
    };
    

    return ( 
        <div className={`container grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10 py-10 xl:py-20 ${scrollY > 110 ? 'tilt-in-left-1' : '' }`}>
            {/* <div id='main-img' className={styles.defaultClassImg}></div> */}
            <img
                src={IMG}
                alt='kordkoy'
                className={styles.defaultClassImg}
            />
            <div className='flex flex-col items-center  gap-6'>
                <p className={styles.defaultClassText} >
                    This tower is located near the Radkan village, 24 km. itto.org south of Kord Kooy and 54 km. to the southwest of Gorgan. The same is situated on a strategic hillock. undefined Constructed on simple lines, this brick structure rises to a height of 35m. It does display artistic affects and with two Kufic inscriptions on which the name of the founder and date of construction (407-411 AH. ) can be noted. The dome is bi-coated and conical in shape. The internal design of Radkan tower is cicular with simple design. 
                </p>
                <button onClick={scrollToSlider} className={styles.defaultClassBtn}>
                    Read More
                </button>
            </div>
        </div>
     );
}

export default Main;