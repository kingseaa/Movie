// import React from 'react';

// import { FaMailBulk, FaGoogle } from 'react-icons/fa';


const Signin = () => {
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 bg-slate-500 opacity-50 rounded-lg"></div>

            <div className="relative z-10 text-white w-2/5 h-2/5 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold mb-8">Sign in</h1>

                {/* Form đăng ký */}
                <form className="flex flex-col items-center w-full">

                    <input
                        type="text"
                        placeholder="Enter Email"
                        className="bg-transparent w-96 border-b-2 border-white text-white mb-4 py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter username"
                        className="bg-transparent w-96 border-b-2 border-white text-white mb-4 py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter password"
                        className="bg-transparent w-96 border-b-2 border-white text-white mb-4 py-2 px-4 focus:outline-none focus:border-blue-500"
                    />
                   

                    {/* Thêm các trường khác như mật khẩu và xác nhận mật khẩu ở đây */}

                    <button type="submit" className="bg-black text-white px-4 py-2 rounded-md mb-2">
                        Create Account
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Signin;
