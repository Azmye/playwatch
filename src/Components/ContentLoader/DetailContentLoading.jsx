import placeholderImage from '/src/assets/placeholder-image.png';
const DetailContentLoading = () => {
  return (
    <section id="home" className="bg-slate-900 h-[100vh]">
      <div className="bg-gradient-to-r from-slate-700 via-slate-800/30 to-slate-800">
        <section id="hero-details" className={`bg-cover bg-no-repeat bg-center lg:bg-top `}>
          <div className="bg-gradient-to-t from-slate-900 via-slate-600/30 to-slate-900 h-[100vh]">
            <div className="container mx-auto lg:pb-20 animate-pulse">
              <div className={`flex flex-row pt-20 lg:gap-10 lg:pb-0 lg:py-28 lg:px-4 `}>
                <div className="justify-start w-1/3 hidden lg:flex">
                  <div className="overflow-hidden ">
                    <div className="bg-slate-500 w-[501px] h-[752px] rounded-xl"> </div>
                  </div>
                </div>
                <div className="px-4 flex flex-col justify-center py-10 gap-5 lg:w-1/2 text-white  md:px-0 lg:bg-none">
                  <div>
                    <div className="w-4/5 h-16 lg:h-24 bg-slate-500 rounded-md"></div>
                  </div>
                  <div>
                    <ul className="flex-row divide-x flex items-center text-base">
                      <li className="px-1 lg:pr-3">
                        <div className="w-16 lg:w-24 h-5 bg-slate-500 rounded-full"></div>
                      </li>
                      <li className="px-1 lg:px-3">
                        <div className="w-16 lg:w-24 h-5 bg-slate-500 rounded-full"></div>
                      </li>
                      <li className="px-1 lg:px-3">
                        <div className="w-16 lg:w-24 h-5 bg-slate-500 rounded-full"></div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-32 h-8 bg-slate-500 rounded-full"></div>
                    <div className="w-80 lg:w-96 h-12 bg-slate-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-32 h-8 bg-slate-500 rounded-full"></div>
                    <div className="w-80 lg:w-96 h-12 bg-slate-500 rounded-full"></div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="w-56 h-8 bg-slate-500 rounded-full"></div>
                    <div className="w-full h-24 bg-slate-500 rounded-md"></div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-24 h-12 bg-slate-500 rounded-full"></div>
                    <div className="w-24 h-12 bg-slate-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DetailContentLoading;
