import React from 'react';

function Landing() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg">Explore stylish bags and accessories made for you.</p>
      </div>
      
      <div className="carousel w-full mb-8">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="assets/images/banner1.jpg" className="w-full rounded-lg" alt="Banner 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="assets/images/banner2.jpg" className="w-full rounded-lg" alt="Banner 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="assets/images/banner3.jpg" className="w-full rounded-lg" alt="Banner 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Landing;
