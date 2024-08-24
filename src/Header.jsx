import { useState } from "react";

function Header() {
  const [dropped, setDropped] = useState(false)

  function dropDown () {
    setDropped(!dropped)
  }

  return (
    <>
      <header className="flex fixed top-0 bg-white z-10 right-0 left-0 justify-between items-center p-2 px-[5%]">
        <div className="bg-red-400 rounded-[10px] w-[35px] max-sm:flex hidden flex-col gap-1 p-2 hover:opacity-80 active:opacity-80 hover:cursor-pointer" onClick={dropDown}>
          <div className="w-full bg-black h-[3px]"></div>
          <div className="w-full bg-black h-[3px]"></div>
          <div className="w-full bg-black h-[3px]"></div>
        </div>
        <div className={`${dropped ? 'max-sm:flex' : 'max-sm:hidden'}`}>
          <nav>
            <ul className="max-sm:flex max-sm:absolute max-sm:top-[50px] max-sm:left-0 max-sm:w-52 max-sm:items-center max-sm:p-5 max-sm:rounded-lg max-sm:bg-red-300 max-sm:flex-col flex gap-10 text-gray-500">
              <li className=" hover:text-black font-bold hover:cursor-pointer">
                <a href="/">Home</a>
              </li>
              <li className=" hover:text-black font-bold hover:cursor-pointer">
                <a href="/">About</a></li>
              <li className=" hover:text-black font-bold hover:cursor-pointer">Products</li>
              <li className=" hover:text-black font-bold hover:cursor-pointer">
                <a href="/">Review</a>
              </li>
              <li className=" hover:text-black font-bold hover:cursor-pointer">
                <a href="/">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-lg font-bold text-red-300">
          FlowerShop.
        </div>
      </header>
    </>
  )
  
}

export default Header;