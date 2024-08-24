import { FaCopyright, FaGoogle, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin, FaRegCopyright, FaTwitter } from "react-icons/fa6";

function Footer () {
  return (
    <footer className="mt-10 px-[8px] bg-red-200">
      <div className="gap-10 flex-wrap flex justify-center items-center">
        <div>
          <h3 className="font-bold">Computer Service</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-2">
            <li>Lorem</li>
            <li>Ajvgvg</li>
            <li>Demgfxfg</li>
            <li>GJNKL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-2">
            <li>Lorem</li>
            <li>Ajvgvg</li>
            <li>Demgfxfg</li>
            <li>GJNKL</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social Media</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-2">
            <a href="http://www.x.com/dev_benneth" className="hover:text-red-400 active:text-red-400 flex items-center"><FaTwitter/> : dev_benneth</a>
            <a href="http://www.tiktok.com/@dev_roi" className="hover:text-red-400 active:text-red-400 flex items-center"><FaTiktok/> : dev_roi</a>
            <a href="http://wa.me/0508529031" className="hover:text-red-400 active:text-red-400 flex items-center"><FaWhatsapp/> : 0508529031</a>
            <a href="mailto:addobenneth6@gmail.com" className="hover:text-red-400 active:text-red-400 flex items-center"><FaGoogle/>: mailto:addobenneth6@gmail.com</a>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Archive</h3>
          <ul className="text-gray-600 text-sm flex flex-col gap-2">
            <li>Lorem</li>
            <li>Ajvgvg</li>
            <li>Demgfxfg</li>
            <li>GJNKL</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-5 font-bold">
        <p className="hover:text-red-400 active:text-red-400 flex items-center"><FaLocationPin/>: Accra, Ghana, West Africa</p>
      </div>
      <div className="text-center mt-5">
        <p className="flex items-center justify-center">
          FlowerShop. 
          <FaRegCopyright/> Copyright | All Rights Reserved 2024</p>
      </div>
    </footer>
  )
}

export default Footer;