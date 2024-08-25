function Home() {
  return (
    <div className="bg-image bg-cover bg-right relative h-lvh flex items-start justify-center flex-col bg-[url(https://raw.githubusercontent.com/BennethA/flower-shop-website/main/src/assets/homeBg.jpg)]">
      <div className="absolute w-1/2 p-3 flex gap-2 items-start flex-col">
        <h1 className="font-bold text-7xl">
          Fresh Flowers
        </h1>
        <h3 className="text-red-400 font-bold text-4xl">
          Natural & Beautiful Flowers
        </h3>
        <p className="leading-4 text-[#1a1a1a] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum ex error odio accusamus, fugiat eveniet mollitia aspernatur eos quos ad unde vel dolore quidem praesentium, et accusantium! Iure, accusamus.
        </p>
        <button className="bg-black active:bg-[#311010] hover:opacity-80 active:opacity-80 text-white py-2 px-4 rounded-full">
          Buy Buy
        </button>
      </div>
    </div>
  )  
}

export default Home;