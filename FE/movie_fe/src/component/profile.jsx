import '@fortawesome/fontawesome-free/js/all.js';

export default function Profile() {

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
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-briefcase h-4 fill-current text-green-700 pr-4"></i>
                            Email: leviettho0611@gmail.com
                        </p>
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-user h-4 fill-current text-green-700 pr-4"></i>
                            Age: 21
                        </p>
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-heart h-4 fill-current text-green-700 pr-4"></i>
                            Gender: Male
                        </p>
                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-phone h-4 fill-current text-green-700 pr-4"></i>
                            Phone: 0708061102
                        </p>

                        <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start">
                            <i className="fa-solid fa-arrow-up h-4 fill-current text-green-700 pr-4"></i>
                            Upgrade_status: Free
                            <button className="bg-yellow-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
                                Upgrade Premium
                            </button>
                        </p>
                        {/* <p className="pt-8 text-sm">
                Totally optional short description about yourself, what you do and so
                on.
              </p> */}
                        <div className="pt-12 pb-8">
                            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                                Edit Profile
                            </button>
                            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full ml-2">
                                Change Password
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
