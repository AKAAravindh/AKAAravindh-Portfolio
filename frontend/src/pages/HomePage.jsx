function HomePage() {
  return (
    <section className="h-[calc(100vh-100px)] w-[75vw] mx-auto flex flex-col justify-center">
      <div className="flex gap-2 items-center border px-6 py-3 w-min">
        <span className="h-2 w-2 block bg-blue-500 rounded-[1px] mb-px" />
        <p className="uppercase text-gray-500 font-[KodeMono] text-sm leading-none">
          Available_For_Projects
        </p>
      </div>
      <h1 className="text-[10vw] font-extrabold leading-tight">Aravindh Raj</h1>
      <div className="flex gap-4">
        <span className="h-0.75 w-40 bg-linear-50 from-white to-transparent block" />
        <span className="h-0.75 w-60 bg-linear-50 from-white to-transparent block" />
      </div>
      <h2 className="text-[3vw] font-bold pt-[2vh]">
        Full Stack Web Developer
      </h2>
      <p className="pt-[1vh] text-gray-500 text-[1.5vw] font-[KodeMono]">
        Building modern web experiences with clean code and creative solutions
      </p>
      <div className="flex gap-6 items-center">
        <button className="border px-6 py-3 mt-10 rounded-lg hover:bg-transparent text-gray-950 bg-gray-300 hover:text-gray-300 cursor-pointer transition-colors duration-300 font-bold">
          Download My CV ➡️
        </button>
        <button className="border px-6 py-3 mt-10 ml-4 rounded-lg hover:bg-gray-300 hover:text-gray-950 cursor-pointer transition-colors duration-300 font-bold">
          Get In Touch
        </button>
      </div>
      <p className="text-gray-500 py-12 font-[KodeMono]">
        [ Scroll _ To _ Explore ]
      </p>
    </section>
  );
}

export default HomePage;
