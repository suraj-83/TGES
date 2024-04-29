import React, { useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const cardRefs = useRef([]);

  // Function to animate on hover
  const handleHover = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.1,
      duration: 0.5,
    });
  };

  // Function to reset animation on mouse leave
  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      duration: 0.5,
    });
  };

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <div className="flex-grow relative">
        <img src="https://wallpaperaccess.com/full/4823404.jpg" alt="" className='bgimg object-fill w-full h-full' />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-8">
              Explore the World
            </h1>
            <p className="text-lg md:text-xl text-gray-800 text-center mb-12">
              Find your next adventure with us!
            </p>
          </div>
        </div>
      </div>
      <div className="cards mt-5 gap-8 h-full w-full flex flex-wrap justify-center">
        <div
          className="w-full md:w-[40%] lg:w-[30%] h-[40%] card"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <img
            ref={(el) => (cardRefs.current[0] = el)}
            src="https://media.istockphoto.com/id/176981210/photo/zen-garden-stepping-stones-in-kyoto-japan.jpg?s=612x612&w=0&k=20&c=LW80F7_tHvkUNIIqnvsCy8LCuCp5CKIuADZ7wNc1EQI="
            alt=""
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className="w-full md:w-[40%] lg:w-[30%] h-[40%] card"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <img
            ref={(el) => (cardRefs.current[1] = el)}
            src="https://media.istockphoto.com/id/1342457449/photo/pamplona-navarra-spain-plaza-del-castillo-square-camino-de-santiago.jpg?s=612x612&w=0&k=20&c=pRQObkjWDMg1WKZItv95EoCTDVN5oD7s1X--rrIL9tM="
            alt=""
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className="w-full md:w-[40%] lg:w-[30%] h-[40%] card"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <img
            ref={(el) => (cardRefs.current[2] = el)}
            src="https://media.istockphoto.com/id/1460815824/photo/blue-hour-street.jpg?s=612x612&w=0&k=20&c=47DeK39Ba1RSS6XKUDY3WbWpgpQCvHfDPLlaGCtKXc4="
            alt=""
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className="w-full md:w-[40%] lg:w-[30%] h-[40%] card"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <img
            ref={(el) => (cardRefs.current[3] = el)}
            src="https://media.istockphoto.com/id/1546116710/photo/scenic-view-of-palma-de-mallorca-old-town-spain.jpg?s=612x612&w=0&k=20&c=zBKbSOMn4VZeL_QKZtzK7EpzeVwWgMZBUZbd0eIOw6U="
            alt=""
            className='object-cover w-full h-full'
          />
        </div>
        <div
          className="w-full md:w-[40%] lg:w-[30%] h-[40%] card"
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          <img
            ref={(el) => (cardRefs.current[4] = el)}
            src="https://media.istockphoto.com/id/1370461598/photo/picturesque-autumn-scene-of-sunny-morning-on-almsee-lake-poppular-travell-destination.jpg?s=612x612&w=0&k=20&c=CL7XvGc_hK9_IG_c7NZrqLIAhBJgOmVR9Zc3YZwJ1Kk="
            alt=""
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <footer className="py-2 w-full md:py-4">
        <p className="text-center text-gray-800 text-sm md:text-base">&copy; 2021 TGESTRAVEL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
