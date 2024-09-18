import React, { useState , useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import jahanNama from '../src/city-image/d957827f2eea8b2211ee495e.jpg';
import kordkuy from '../src/city-image/1.jpg' ;
import forest from '../src/city-image/83ed0ad1-0446-4072-8693-f71b6827c939_mihmansho.jpg' ;

function Slider({scrollY}) {
  const slides = [
    {
      url: jahanNama ,
    },
    {
        url: kordkuy  ,
    },
    {
        url: forest,
    },
    {
      url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/66/77/7b/if-you-love-mountain.jpg?w=1100&h=400&s=1',
    },
    {
      url: 'https://theotheriran.com/wp-content/uploads/2015/04/golestan-province-iran-kordkuy-qabus-tower-khalid-nabi-cemetery-07.jpg?w=960',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const defaultClassSlider  = 'max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group';


  return (
    <div  className={`${defaultClassSlider} ${scrollY > 590 ? 'tilt-in-left-1' : '' }`} >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;