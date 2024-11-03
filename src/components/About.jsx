function About() {
  return (
    <div id="about" className="mt-5 mx-[5%]">
      <div className="py-8">
        <h2 className="text-red-400 text-center text-3xl font-bold">
          About <span className="text-black">Us</span>
        </h2>
        <div className="mt-2 flex gap-5 max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full h-[250px] items-center justify-center flex relative rounded-lg overflow-hidden bg-right bg-[url(https://raw.githubusercontent.com/BennethA/flower-shop-website/main/src/assets/secondImg.jpg)]">
            <p className="absolute bottom-[45%] text-center right-0 left-0 bg-white opacity-90 text-2xl font-semibold text-red-400">
              Best Flower Sellers
            </p>
          </div>
          <div className="w-1/2 flex max-sm:w-full flex-col gap-1 items-start">
            <h3 className="text-2xl font-bold">
              Why Choose Us
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat impedit adipisci, repellat, porro saepe nam voluptatum illum omnis ullam officia maiores quaerat optio, similique mollitia dignissimos quae.
            </p>
            <p className="text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae necessitatibus sequi perferendis hic voluptatibus provident, atque placeat neque totam.
            </p>
            <button className="bg-black text-white px-5 py-2 rounded-full hover:opacity-80 active:opacity-90">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#dadada] py-10 flex items-center justify-center flex-wrap gap-3">
        <div className="cursor-pointer bg-white shadow-[#868686] shadow-md flex gap-3 p-2 rounded">
          <div>
            shsh
          </div>
          <div>
            <h4 className="font-semibold">
              Lorefgsd sjhkx
            </h4>
            <p>shhshhhs guigsshus</p>
          </div>
        </div>
        <div className="cursor-pointer bg-white shadow-[#868686] shadow-md flex gap-3 p-2 rounded">
          <div>
            shsh
          </div>
          <div>
            <h4 className="font-semibold">
              Lorefgsd sjhkx
            </h4>
            <p>shhshhhs guigsshus</p>
          </div>
        </div>
        <div className="cursor-pointer bg-white shadow-[#868686] shadow-md flex gap-3 p-2 rounded">
          <div>
            shsh
          </div>
          <div>
            <h4 className="font-semibold">
              Lorefgsd sjhkx
            </h4>
            <p>shhshhhs guigsshus</p>
          </div>
        </div>
        <div className="cursor-pointer bg-white shadow-[#868686] shadow-md flex gap-3 p-2 rounded">
          <div>
            shsh
          </div>
          <div>
            <h4 className="font-semibold">
              Lorefgsd sjhkx
            </h4>
            <p>shhshhhs guigsshus</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default About;