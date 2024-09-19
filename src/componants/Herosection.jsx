import mainimage1 from "../assets/mainimage1.png";

function Herosection() {
  return (
    <div className="w-full h-[600px] bg-slate-500">
      <div className="w-full h-[600px] text-[#111211] pl-48 pt-52 font-md  absolute">
        <p className="text-white text-2xl">KISAN SE KISAN TAK</p>
        <h1 className=" text-white text-6xl">
          ORGANIC{" "}
          <span className="text-[#2FC822]">
            TARGUAN <br /> AGRO
          </span>
        </h1>
        <div className="flex gap-20 w-[400px] text-white h-[200px] items-start pt-10  pl-0">
          <button className=" border-black  opacity-50 font-bold bg-black text-white  w-24 h-9 "> 
            <span className="opacity-100">Explore</span>
          </button>
          <button className="bg-[#34AD54]  text-white  w-28 h-9">
            Get Started
          </button>
        </div>
      </div>
      <img src={mainimage1} alt="" className=" w-full h-[600px]" />
    </div>
  );
}

export default Herosection;
