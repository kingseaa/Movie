// import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    function handleGoogleLogin() {
        //login with google
    }
    function handleFacebookLogin() {
        //login with google
    }

    return (
        <section className="h-full bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full ">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    src="https://wallpaperaccess.com/full/1076873.jpg"
                    alt="Background"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-slate-500 opacity-50 rounded-lg">

                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold mb-12">Login</h1>

                    {/* Input với viền */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-transparent w-96 border-b-2 border-white text-white mb-4 py-2 px-4 focus:outline-none focus:border-blue-500"
                    />

                    {/* Input với viền */}
                    <div className="relative w-96 mb-20">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="bg-transparent w-full border-b-2 border-white text-white py-2 px-4 focus:outline-none focus:border-blue-500"
                        />
                        {/* Nút ẩn/hiện mật khẩu */}
                        <button
                            onClick={togglePasswordVisibility}
                            className="absolute bottom-2 right-0 bg-transparent text-sm text-gray-400 "
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    {/* Nút đăng nhập */}
                    <button
                        className="bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black focus:outline-none focus:shadow-outline-blue active:bg-slate-500"
                    >
                        Log in
                    </button>

                    {/* Liên kết quên mật khẩu */}
                    <div className="mt-4">
                        <a href="#" className="text-gray-300">Forgot password?</a>
                    </div>
                    <div className="mt-4">
                        <Link to="/register" className="text-gray-300">Don`t have an account? Register here</Link>

                    </div>
                    <div className="mt-4 flex flex-row">
                        <p className=' text-gray-300'>Login with Google or Facebook</p>
                        <img
                            src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png'
                            alt='login with google'
                            className=' w-6 h-6 cursor-pointer mx-4'
                            onClick={handleGoogleLogin()}
                        />

                        <img
                            src='https://www.facebook.com/images/fb_icon_325x325.png'
                            alt='login with facebook'
                            className=' w-6 h-6 cursor-pointer mx-4'
                            onClick={handleFacebookLogin()}
                        />
                    </div>



                    {/* Thêm các trường nhập, nút đăng nhập, ... */}
                </div>

            </div>
        </section>
    );
}
export default Login;
