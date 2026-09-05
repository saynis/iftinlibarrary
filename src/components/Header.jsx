import { Link } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



function Header() {


  const [open, setOpen] = useState(false)


  return (
    <header className="bg-[#E3DCC4]  fixed w-full py-4">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center">


          {/* logo */}
          <div>
            <img className="h-16" width={50} src="/jju.png" alt="logo.png" />
          </div>


          {/* responsive div */}
          <div className={`md:flex
        items-center gap-24 
        text-center
        absolute md:static 
        right-0  bg-[#E3DCC4] 
        h-screen md:h-auto w-[50%] md:w-auto
       ${open ? "  top-24" : "top-10000"}
       
        `} >

            {/* naviagtion */}
            <nav className="">

              <ul className="md:flex gap-8 space-y-4 text-center
                text-xl font-semibold text-gray-700">
                <li onClick={() => setOpen(false)}>
                  <Link to="/" >Home</Link>
                </li>

                <li onClick={() => setOpen(false)}>
                  <Link to="/books" >Books</Link>
                </li>

                <li onClick={() => setOpen(false)}>
                  <Link to="/about" >About</Link>
                </li>

                <li onClick={() => setOpen(false)}>
                  <Link to="/contact" >Contact</Link>
                </li>
              </ul>

            </nav>


            {/* buttons div */}

            <div className="md:flex-row flex flex-col  md:gap-8 gap-4 mx-auto ">
              <button className="text-xl font-bold md:mx-auto mx-0">Login</button>
              <button className="py-2  md:mx-auto mx-0
            px-6 bg-[#2A7EFF] text-xl rounded-md text-white
            ">Sign up</button>

            </div>









          </div>


        {/* menu and cart */}
          <div className="flex gap-6 items-center">
            <Link
              to="/cart">
              <FaCartArrowDown
                className="text-3xl text-[#2A73FF] cursor-pointer" />
            </Link>

            {open ? (
              <IoMdClose
                onClick={() => setOpen(!open)}
                className="text-4xl md:hidden cursor-pointer" />
            ) : (
              <IoMdMenu
                onClick={() => setOpen(!open)}
                className="text-4xl md:hidden cursor-pointer" />
            )}

          </div>


        </div>

      </div>

    </header>
  )
}

export default Header