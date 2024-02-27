import '@fortawesome/fontawesome-free/css/all.min.css';

function ChangePassword() {

    return (
        <>

            <img
                className="absolute top-0 left-0 w-full h-full object-cover "
                src="https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KU8IkmrM5HbtYIyyS5k1qQ"
                alt="Background"
            />
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                {/*Main Col*/}
                <div
                    id="profile"
                    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
                >

                    <div className="p-4 md:p-12 text-center lg:text-left">
                        {/* Image for mobile view*/}
                        <div
                            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                            style={{
                                backgroundImage: 'url("https://source.unsplash.com/MP0IUfwrn0A")'
                            }}
                        />

                        <h1 className="text-3xl font-bold pt-8 lg:pt-0">Le Viet Tho</h1>
                        <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />
                        <h2 className="text-lg font-bold pt-8 lg:pt-0 text-red-500">Change Password</h2>
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-lock h-4 fill-current text-green-700 pr-4"></i>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Old Password"/>
                            </div>
                        </p>
                        
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-lock h-4 fill-current text-green-700 pr-4"></i>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="New Password"/>
                            </div>
                        </p>
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-lock h-4 fill-current text-green-700 pr-4"></i>
                            <div className="md:w-2/3">
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="" placeholder="Confirm Password"/>
                            </div>
                        </p>
                        
                        {/* <p className="pt-8 text-sm">
                Totally optional short description about yourself, what you do and so
                on.
              </p> */}
                        <div className="pt-12 pb-8">
                            <button className="bg-blue-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                Save
                            </button>
                           
                        </div>
                        <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">

                        </div>
                        {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
                    </div>
                </div>
                {/*Img Col*/}
                <div className="w-full lg:w-2/5">
                    {/* Big profile image for side bar (desktop) */}
                    <img
                        src="https://source.unsplash.com/MP0IUfwrn0A"
                        className=" relative rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                    />
                    {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
                </div>
                {/* Pin to top right corner */}

            </div>

        </>
    )
}

export default ChangePassword