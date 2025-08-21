import { Link } from "react-router"

const Login = () => {
  return <div className="p-3">
    <div className="p-3 pt-5 pb-5 relative mt-20 flex flex-col justify-center ml-[20%] mr-[20%] shadow-xl rounded-2xl border border-cyan-300">
      <h1 className="absolute top-[-25px] bg-white left-[35%] right-[35%] text-center text-2xl font-bold p-2 rounded-full border border-cyan-400">Login</h1>
        <form className="mt-4 flex flex-col md:flex-row gap-4 justify-center p-3">
          <input className="md:hidden ml-1 p-1 border rounded" type="email" placeholder="Enter your email..." />
          <input className="md:hidden ml-1 p-1 border rounded" type="password" placeholder="enter your Password..." />
          <label className="hidden md:block font-semibold text-gray-500">Email 
          <input className="ml-1 p-1 border border-cyan-400 rounded" type="email" placeholder="Enter your email..." />
          </label>
          <label className="hidden md:block font-semibold  text-gray-500">Password
          <input className="ml-1 p-1 border  border-cyan-400 rounded" type="password" placeholder="Enter your Password..." />
          </label>
        </form>
        <button className="p-1 bg-cyan-200 text-white font-semibold rounded-full ml-[20%] mr-[20%] sm:ml-[35%] sm:mr-[35%] mb-3">Sign in</button>
        <Link to={'/forgot'} className=" absolute bottom-1 right-2 sm:bottom-1 sm:right-3 text-sm hover:text-red-500">Forgot Password </Link>
    </div>
  </div>
}

export default Login