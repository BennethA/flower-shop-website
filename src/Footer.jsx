import { FaGoogle, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright, FaTwitter } from "react-icons/fa6";

function Footer () {
  return (
    <footer className="mt-10 px-[8px] bg-red-200">
      <div>
        <ul className="text-gray-600 text-sm flex flex-wrap items-center justify-center gap-2">
          <a href="http://www.x.com/dev_benneth" className="hover:text-red-400 active:text-red-400 flex items-center justify-center"><FaTwitter/> : dev_benneth</a>
          <a href="http://www.tiktok.com/@dev_roi" className="hover:text-red-400 active:text-red-400 flex items-center"><FaTiktok/> : dev_roi</a>
          <a href="http://wa.me/0508529031" className="hover:text-red-400 active:text-red-400 flex items-center"><FaWhatsapp/> : 0508529031</a>
          <a href="mailto:addobenneth6@gmail.com" className="hover:text-red-400 active:text-red-400 flex items-center"><FaGoogle/>: mailto:addobenneth6@gmail.com</a>
        </ul>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center mt-5 font-bold">
        <div>
          <p className="flex flex-wrap">
            Location: Accra, Ghana, West Africa
          </p>
        </div>
        <div>
          <p className="flex items-center gap-1 flex-wrap">
            <FaRegCopyright/> Copyright | All Rights Reserved 2024
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;