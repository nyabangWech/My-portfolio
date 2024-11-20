const Hero = () => {
  return (
    <section className="bg-green-800 text-white py-20">
      
      <div className="container mx-auto flex items-center">
      
        <div className="w-2/2 flex justify-center">
          <img
            src="/images/nyabang.jpg"
            className="w-[350px] h-[350px] rounded-full shadow-lg bg-white"
          />
        </div>

        <div className="w-1/2 text-right">
          <h1 className="text-6xl font-bold mr-12 text-yellow-500">
            I am Nyabang Wech</h1>
            <br/>
            <h1 className="text-4xl font-bold mr-[250px]">a Software Developer</h1>
          
          <p className="text-xl mt-4 mr-[180px]">Proficient in Frontend and Backend development</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded mt-8 mr-[500px]">
            Contact Me
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;
