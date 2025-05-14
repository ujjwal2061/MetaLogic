const CardFlip = () => {
  return (
    <section className="min-h-screen px-6 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-5">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
       
        <div className="flip-card w-64 h-96">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-gradient-to-b from-pink-400 to-pink-600 rounded-xl p-6 text-white flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-xl font-bold">Mobile Development</h3>
              <p className="text-sm mt-2 text-center">
                From streamlining operations to data-driven insights, we create solutions that empower your business to thrive.
              </p>
            </div>
            <div className="flip-card-back bg-white border border-pink-400 rounded-xl p-6 flex flex-col items-center justify-center text-pink-600">
              <h3 className="text-xl font-bold">Why Choose Us?</h3>
              <p className="text-sm mt-2 text-center">
                Agile development, sleek performance, and scalable mobile experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card w-64 h-96">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-gradient-to-b from-pink-400 to-pink-600 rounded-xl p-6 text-white flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold">UI/UX</h3>
              <p className="text-sm mt-2 text-center">
                We create interfaces that are visually appealing, intuitive, and conversion-focused.
              </p>
            </div>
            <div className="flip-card-back bg-white border border-pink-400 rounded-xl p-6 flex flex-col items-center justify-center text-pink-600">
              <p className="text-sm mt-2 text-center font-semibold">
                Interfaces that blend form and function, driving conversions and enhancing user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card w-64 h-96">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-gradient-to-b from-pink-400 to-pink-600 rounded-xl p-6 text-white flex flex-col items-center justify-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-xl font-bold">Brand & Marketing</h3>
              <p className="text-sm mt-2 text-center">
                Elevate your brand with impactful campaigns and targeted marketing strategies.
              </p>
            </div>
            <div className="flip-card-back bg-white border border-pink-400 rounded-xl p-6 flex flex-col items-center justify-center text-pink-600">
              <p className="text-sm mt-2 text-center font-semibold">
                We build strong brand identities and deliver compelling digital marketing experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md text-center md:text-left">
        <h4 className="font-semibold text-gray-800 mb-2">Our Services</h4>
        <h2 className="text-4xl font-bold mb-4">Empowering Your Vision</h2>
        <p className="text-gray-600 mb-6">
          Our range of offerings is carefully curated to cater to your diverse needs, ensuring that your digital journey is seamless, captivating, and results-driven.
        </p>
        <button className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
          Learn More →
        </button>
      </div>

    </section>
  );
};

export default CardFlip;
