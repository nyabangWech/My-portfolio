const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src="/images/nyabang's.jpg" 
              alt="About Me Image" 
              className="rounded-full w-[350px] h-[350px] ml-18"
            />
          </div>

          
          <div className="md:w-1/2 text-center md:text-left mr-[400px]">
            <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            <p className="text-lg">
              As a software developer, I pride myself on being hardworking, self-driven, and motivated. 
              I love collaborating with others in a team environment, where I can contribute and learn from different perspectives. 
              I’m passionate about continuous learning, always eager to explore new technologies and improve my skills. 
              This drive to grow and adapt helps me stay forward-thinking and prepared for any challenge I face.
            </p>
          </div>
        </div>
      </section>
    );
};

export default About;
