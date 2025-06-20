import Navbar from "../components/Navbar/navbar";

const landing = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex w-full justify-center gap-56 items-center">
        <div className="flex flex-col">
          <h1 className="text-center text-slate-50 text-[100px] font-extrabold">
            Enter to the WiKi
          </h1>
          <button className="p-4 bg-lime-400 rounded-2xl text-[50px] w-full font-extrabold hover:p-5 hover:brightness-75 active:brightness-50 duration-200">
            Enter
          </button>
        </div>

        <img
          src="src/assets/landing.png"
          alt=""
          className="w-1/3 h-fit mt-10"
        />
      </div>
    </div>
  );
};

export default landing;
