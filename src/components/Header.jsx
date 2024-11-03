import { useState } from "react";

function Header() {
  const [dropped, setDropped] = useState(false);

  function dropDown() {
    setDropped(!dropped);
  }

  return (
    <header className="flex fixed top-0 bg-white z-10 right-0 left-0 justify-between items-center p-2 px-[5%]">
      <div
        className="bg-red-400 rounded-[5px] w-[35px] max-sm:flex hidden flex-col gap-1 p-2 hover:opacity-80 active:opacity-80 hover:cursor-pointer justify-center items-center"
        onClick={dropDown}
      >
        {dropped ? (
          <div className="font-bold">X</div>
        ) : (
          <div className="flex gap-1 flex-col">
            <div className="w-5 bg-black h-[3px]"></div>
            <div className="w-5 bg-black h-[3px]"></div>
            <div className="w-5 bg-black h-[3px]"></div>
          </div>
        )}
      </div>
      <div className={`${dropped ? "max-sm:flex" : "max-sm:hidden"}`}>
        <nav>
          <ul className="max-sm:flex max-sm:absolute max-sm:top-[50px] max-sm:left-0 max-sm:w-52 max-sm:items-center max-sm:p-5 max-sm:rounded-lg max-sm:bg-red-300 max-sm:flex-col flex gap-10 text-gray-500">
            <li className=" hover:text-black font-bold hover:cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className=" hover:text-black font-bold hover:cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className=" hover:text-black font-bold hover:cursor-pointer">
              <a href="#products">Products</a>
            </li>
            <li className=" hover:text-black font-bold hover:cursor-pointer">
              <a href="#review">Review</a>
            </li>
            <li className=" hover:text-black font-bold hover:cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-lg font-bold text-red-300">
        <p>FlowerShop.</p>
      </div>
    </header>
  );
}

export default Header;
