import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"


function Register() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const response = await axios.post("https://jju.saynis.store/api/user/register", formData)

        if(response.data.message === "Please fill all fields"){
            toast.error("Please fill all fields")
            return
        }else if(response.data.message === "Invalid username"){
            toast.error("Invalid username")
            return
        }else if(response.data.message === "User already exists"){
            toast.error("User already exists")
            return
        }else if(response.data.message === "Email must start with at least 5 letters and end with .com"){
            toast.error("Email must start with at least 5 letters and end with .com")
            return
        }else{
            toast.success("register seccefully")
        }

        setFormData({
            username: "",
            email: "",
            password: ""
        })


         setTimeout(()=>{
             navigate("/login")
         },2000)

    }

    return (
        <div className="py-28">
            <ToastContainer />

            <div className="max-w-7xl mx-auto md:mt-20 mt-8">

                <div className="md:flex justify-between ">

                    {/* sawir */}
                    <div className="md:w-1/2">
                        <img
                            className="md:w-72 w-full h-72"
                            src="/jju.png" alt="" />
                    </div>

                    {/* form */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:w-1/2 px-6 mt-6 md:mt-0 md:px-0  bg-white shadow-md shadow-gray-200"
                        action="">

                        <h1
                            className="text-2xl font-bold text-gray-700 capitalize mb-2"
                        >Create an account</h1>
                        <h2
                            className="text-lg font-semibold text-gray-700 mb-4"
                        >Enter your details below to create an account</h2>

                        {/* username */}
                        <div className="flex flex-col gap-2 mb-2">
                            <label className="text-xl
                text-gray-700
                 font-semibold mb-2" htmlFor="">username</label>
                            <input
                                className="py-3  rounded-md border
                md:w-[70%] px-4
                 border-gray-800"
                                type="text"
                                placeholder="enter your username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>


                        {/* email */}
                        <div className="flex flex-col gap-2 mb-2">
                            <label className="text-xl
                text-gray-700
                 font-semibold mb-2" htmlFor="">email</label>
                            <input
                                className="py-3  rounded-md border
                md:w-[70%] px-4
                 border-gray-800"
                                type="email"
                                placeholder="enter your email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        {/* password */}
                        <div className="flex flex-col gap-2 mb-2">
                            <label className="text-xl
                text-gray-700
                 font-semibold mb-2" htmlFor="">password</label>
                            <input
                                onChange={handleChange}
                                className="py-3  rounded-md border
                md:w-[70%] px-4
                 border-gray-800"
                                type="password"
                                placeholder="enter your password"
                                name="password"
                                value={formData.password}
                            />
                        </div>


                        <button
                            className="py-3 bg-blue-700 text-white border-none mt-2
           rounded-md w-[70%]"
                        >Create an account</button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default Register