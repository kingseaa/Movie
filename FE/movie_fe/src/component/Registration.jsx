
import { FaMailBulk, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'



const Registration = () => {
    return (
        <section className=" h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 relative overflow-hidden">
            <div className="absolute top-4 left-4">
                {/* Logo Film */}
                <img src="/path/to/your/logo.png" alt="Film Logo" className="w-12 h-12" />
            </div>
            <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://wallpaperaccess.com/full/1076873.jpg"
                alt="Background"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-slate-500 opacity-50 rounded-lg"></div>

            <div className="relative z-10 text-white w-2/5 h-2/5 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold mb-12">Register</h1>

                {/* Form đăng ký */}
                <form className="flex flex-col items-center w-full">

                    <Link to="/signin" className= ' w-2/3 mb-2' >
                        <button type="button" className="w-full bg-slate-100  text-black px-4 py-2 rounded-md flex items-center justify-center">
                            <FaMailBulk className=' text-black size-8 mr-5' />
                            <span>Register with email</span>
                        </button>
                    </Link>
                    {/* Đăng ký với Google */}
                    <button type="button" className=" w-2/3 bg-black text-white px-4 py-2 rounded-md flex items-center justify-center">
                        <FaGoogle className=' text-red-500 size-8 mr-5' />
                        <span>Register with google</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Registration;
