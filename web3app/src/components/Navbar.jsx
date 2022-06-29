import { HiMenuAlt4 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import logo from "../../images/ŌṃTech-logos_white.png"
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"

const Navbar = () => {
  return (
    <nav className='flex-row-reverse justify-between items-center p-1'>
      <div className="md:flex-[0.5] flex-initial justify-center items-center p">
        <img src={logo} alt="logo" className="w-64" />
     
      </div>
    </nav>
  )
}

export default Navbar