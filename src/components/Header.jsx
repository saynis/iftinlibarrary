import { Link, useNavigate } from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";



function Header() {


  const [open, setOpen] = useState(false)
  const [userData, setUserData] = useState({})


  const navigate = useNavigate()


  useEffect(()=>{
   
     const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://jju.saynis.store/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.status === "Success") {
          setUserData(response.data);
          console.log(userData)
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // If token is invalid or expired
          localStorage.removeItem("token");
          navigate("/");
        }
        console.error("Error fetching user data:", error);
      }
    };



    fetchUserData()


  },[])

  
   

  


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

            {userData?.user ? (
              <span>{userData?.user?.username}</span>
            ) : (
              <> 
                 <Link to="/login"> 
              <button className="cursor-pointer  text-xl font-bold md:mx-auto mx-0">Login</button>
              </Link>

            <Link to="/register"> 
            <button className="py-2 
            px-6 bg-[#2A7EFF] text-xl rounded-md text-white cursor-pointer
            ">Sign up</button>

            </Link>
            </>
            )}

           

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