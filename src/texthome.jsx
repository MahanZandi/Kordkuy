import React, { Component } from 'react';

function TextHome() {

    function scrollDown (){
        window.scrollTo({
          top: 720,
          left: 0,
          behavior: 'smooth',
        });
      };

    return ( 
        <div  className=' grid place-items-center'>
            <div className=' grid place-items-center w-96 relative top-60 text-white '>
                <h1  className='text-8xl font-sans font-semibold  focus-in-expand-fwd' style={{textShadow:'3px 2px 2px rgb(40, 39, 39)'}}>The City</h1>
                <p className='text-2xl pt-5  focus-in-expand-fwd'>create by Mahan</p>
            </div>
            <div className='relative slide-in-top  rounded-full p-1 hoverBtn' style={{top:'28rem' }}>
                <svg onClick={scrollDown} xmlns="http://www.w3.org/2000/svg" className='size-20 ' viewBox="0 0 320 512"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
            </div>
        </div>
     );
}

export default TextHome;