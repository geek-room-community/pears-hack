export default function Home() {
  return (
    <div className="text-[#98ff98] h-screen flex flex-col justify-center bg-gradient-to-r from-[#171717] to-[#000000] relative">
  
      <div className="absolute top-4 left-4 px-4 py-2 border border-gray-500 rounded-md text-gray-300">
        Home
      </div>

   
      <div className="flex flex-col mr-8">
        <h1 className="text-6xl text-white font-bold mb-4">PEARS</h1>
        <h2 className="text-4xl text-[#B6DD48] mb-8">GLOBAL</h2>
        <h2 className="text-4xl text-white mb-8">HACKATHON</h2>

        <button
          className="bg-[#171717] text-[#B6DD48] px-8 py-3 rounded-full 
                     text-xl  transition-colors
                     flex items-center space-x-4 w-fit border border-[#B6DD48]" 
        >

          <span>REGISTER NOW</span>
      
          <span
            className="w-6 h-6  text-[#B6DD48]  rounded-full 
                       flex items-center justify-center text-lg font-bold border border-[#B6DD48]"
          >
            &gt;
          </span>
        </button>
      </div>
    </div>
  );
}
