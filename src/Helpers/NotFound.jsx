import NotFoundImage from '/src/assets/NotFound.png';

const NotFound = () => {
  return (
    <div className=" bg-slate-900 ">
      <div className="container mx-auto w-full h-[100vh] px-4 flex flex-row items-center justify-center">
        <div className="text-white w-2/3 flex justify-end">
          <h1 className="text-8xl">Oops don't seem, to find anything here</h1>
        </div>
        <div className="w-1/3">
          <img src={NotFoundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
