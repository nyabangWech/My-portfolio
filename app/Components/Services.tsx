const Services = () => {
    return (
      <section id="services" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">what I can do best</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4"> web development</h3>
              <img src="
              /images/webdevelopment.png" className="w-[400px] h-[400px]"/>
              <p> I can develop web and mobile apps...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">backend development</h3>
              <img src="/images/backenddevelopment.jpg" className="w-[400px] h-[400px]"/>
              <p>Building API endpoint and integration...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">UX/UI Design</h3>
              <img src="/images/design.png" className="w-[450px] h-[400px]"/>
              <p>Create stunning designs with user-friendly interfaces...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Product Management</h3>
              <img src="/images/product management.jpg" className="w-[400px] h-[400px]"/>
              <p>visualise data using Tableau </p>
              <p>Identifying users need,goal,and objective</p>
            </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Mobile development</h3>
              <img src="/images/Andriod.png"/>
              <p>Ability to develop mobile web application</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">UX research </h3>
              <img src="/images/Ux research.png" className="w-[400px] h-[450px]"/>
              <p>conducting research and usability testing</p>
            
            </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  