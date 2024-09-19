import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.png";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="bg-[#2FC822] Header w-[100vh]  text-[10px] justify-center text-white pt-1 ">
        {" "}
        <p className=" justify-centery ">Use Code FBEGRI20 & Get 20% Off On Your First App Order*</p>
      </div>
      <div className=" w-full h-16  Header flex justify-between  ">
        <div className="pl-12">
          <img src={logo} alt="" className="    w-[200px] h-16" />
        </div>
        <div className=" flex justify-center ite pt-4 border border-red-500">
          <CiSearch className="ab" />
          <input
            type="text"
            placeholder="   Search product"
            className="bg-[#D9D9D9] w-[70%] h-9"
          />
          <button className=" bg-[#34AD54]  text-white  w-24 h-9">
            Search
          </button>
        </div> 
        <div className="flex justify-center w-[400px] h-9 pt-4">
          <FiShoppingCart className="  w-6 h-6" />
          <button className=" border-black  w-24 h-9 "> Log In</button>
          <button className="bg-[#34AD54]  text-white  w-24 h-9">
            Sign Up
          </button>
        </div>
      </div>
      <div className=" w-full h-8 bg-[#34AD54]">
        <ul className="flex justify-center gap-10 align-middle text-white font-md text-xl text-center ">
          <li>Home</li>
          <li>About</li>
          <li>Servies</li>
          <li>Prpduct</li>
          <li>Cantacts</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
