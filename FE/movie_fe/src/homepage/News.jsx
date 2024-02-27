import MovieFilm from "../assets/movie_film.png";

export default function News() {
  return (
    <div className="max-w-screen-lg m-auto">
      {/* <div className="w-72 h-96 bg-slate-600 mt-12 relative card-film  ">
        <img src={cardImage} alt="wonder woment" className="h-full w-full" />
        <div className="detail-content absolute bottom-0 ">
          <div className="button flex justify-end  mb-2.5 mr-2.5  ">
              {" "}
              <div className="p-3 rounded-full bg-green-500 mr-2">
                <FaPlay color="white" />
              </div>
              <div className="p-3 rounded-full bg-slate-200">
                <MdOutlineBookmarkAdd color="black" />
              </div>
          </div>
          <div className="   text-xs text-white bg-slate-900 h-3/6 w-full p-2">
            <h1 className="text-2xl">Fighting for love</h1>
            <div className="flex items-center mt-2">
              <IoStar color="yellow" className="mr-1" />
              <span className="mr-1">6.9</span>
              <div className="divide w-1 h-3 bg-gray-500 mr-1"></div>
              <p className="mr-1">106 phút</p>
              <div className="divide w-1 h-3 bg-gray-500 mr-1"></div>
              <p className="mr-1">30/02/2069</p>
            </div>
            <div className="genre mb-2">
              <div className="genre-card bg-gray-500 inline-block px-1 rounded-sm mr-2 mt-2 ">
                Chinese Mainland
              </div>
              <div className="genre-card bg-gray-500 inline-block px-1 rounded-sm mr-2 mt-2 ">
                Romance{" "}
              </div>
              <div className="genre-card bg-gray-500 inline-block px-1 rounded-sm mr-2 mt-2 ">
                Friendship
              </div>
            </div>
            <div className="description line-clamp-5">
              <p></p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatesasd perspictatesasd perstatesasd perstatesasd persiatis
              corrupti labore modi qui voluptatum, laboriosam at iusto
              consequuntur quasi voluptatem facilis, temporibus velit quas ipsum
              eius nam. Explicabo, magnam! lorem#100
            </div>
          </div>
        </div>
      </div> */}

      <h2 className="mt-16">Latest news</h2>
      <div className="description_content mt-6  grid  grid-cols-2 items-center  ">
        <div className="relative">
          <img src={MovieFilm} alt="" />
          <div className="image_content absolute bottom-5 left-5 text-white">
            <h2 className="mb-6">
              New American films on the screen of Nizami Cinema Center
            </h2>
            <p>
              US-produced &ldquo;Independence Day: Revival&ldquo; at Nizami
              Cinema Center. &ldquo;Neighbours. 2 in wartime ”films have been
              shown. &ldquo;Independence Day: Revival&ldquo; is based on a
              screenplay by Nicholas Wright and directed by Roland Emmerich in
              the genres of science fiction, adventure and war. Slogan: “We had
              20 years to prepare.
            </p>
          </div>
        </div>
        <div className="description_subcontent ml-12 text-xs">
          <div className="flex items-center mt-6">
            <img src={MovieFilm} alt="" className="h-20 w-24  rounded-lg" />
            <div className="subnews_content ml-6">
              <p className="mb-2">25.03.2022</p>
              <p>
                An event titled &ldquo;April battles and victory&ldquo;
                dedicated to the Armed Forces Day was held at the Nizami Cinema
                Center
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img src={MovieFilm} alt="" className="h-20 w-24  rounded-lg" />
            <div className="subnews_content ml-6">
              <p className="mb-2">25.03.2022</p>
              <p>
                An event titled &ldquo;April battles and victory&ldquo;
                dedicated to the Armed Forces Day was held at the Nizami Cinema
                Center
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img src={MovieFilm} alt="" className="h-20 w-24  rounded-lg" />
            <div className="subnews_content ml-6">
              <p className="mb-2">25.03.2022</p>
              <p>
                An event titled &ldquo;April battles and victory&ldquo;
                dedicated to the Armed Forces Day was held at the Nizami Cinema
                Center
              </p>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <img src={MovieFilm} alt="" className="h-20 w-24  rounded-lg" />
            <div className="subnews_content ml-6">
              <p className="mb-2">25.03.2022</p>
              <p>
                An event titled &ldquo;April battles and victory&ldquo;
                dedicated to the Armed Forces Day was held at the Nizami Cinema
                Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
