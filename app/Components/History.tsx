const History = () => {
  return (
    <section id="history" className="py-16 text-center bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Virtual Piano</h3>
            <img src="/images/piano.png"/>
            <p className="text-lg">A web-based application simulating a virtual piano, allowing users to play notes using their keyboard or mouse.</p>
            <a href="https://virtual-piano-beige.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 ml-8">
    View
  </button>
</a>

          </div>

          
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">World Time Recorder</h3>
            <img src="/images/worldtime.png"/>
            <p className="text-lg">A world timer that lets users input the name of a country and city to retrieve the current time.</p>
            <a href="https://world-time-xi.vercel.app//" target="_blank" rel="noopener noreferrer">
  <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 mr-8">
    View
  </button>
</a>
          </div>

          
          <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-2xl font-bold mb-4">AquaSense Smart Device</h3>
            <img src="/images/smartdrain.png"/>
            <p className="text-lg">A smart drainage system device that detects blockages in open drainage systems and alerts users via SMS.</p>
            <a href="https://drive.google.com/drive/u/0/folders/1gcJLYjevNejNztqkaO1PRwDtaymFLCyw" target="_blank" rel="noopener noreferrer">
  <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-4 px-12 rounded mt-8 mr-8">
    View
  </button>
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

