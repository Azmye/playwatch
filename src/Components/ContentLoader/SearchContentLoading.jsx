const SearchContentLoading = () => {
  return (
    <section id="home" className="">
      <div className="lg:bg-gradient-to-r from-slate-600 via-slate-500/30 to-slate-800">
        <div className="flex flex-col lg:flex-row lg:gap-10 animate-pulse">
          <div>
            <div className="bg-slate-500 w-full h-[400px] lg:w-[430px] lg:h-[642px] "></div>
          </div>
          <div className="py-4 flex flex-col gap-5">
            <div className="w-[15rem] lg:w-[30rem] h-16 lg:h-24 bg-slate-500 rounded-md"></div>
            <div className="w-[8rem] h-6 bg-slate-500 rounded-md"></div>
            <div className="w-[20rem] lg:w-[40rem] h-16 lg:h-24 bg-slate-500 rounded-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchContentLoading;
