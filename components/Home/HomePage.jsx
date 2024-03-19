import { products } from "@/constants/data";
import { EyeIcon, HeartIcon, MessageCircleIcon, Share2Icon } from "lucide-react";
import { FaHeart, FaShareAlt, FaRegComment, FaEye, FaHamburger } from "react-icons/fa";
const HomePage = () => {
  
  return (
    <>
   
      <div className="text-black lg:w-[800px]  w-full  md:w-[450px]  pr-4 border-r-2 border-slate-200 mt-[100px] ">
        {products.map((prod, i) => {
          return (
            <div key={i} className="text-black ml-[50px] w-[230px] lg:w-[700px] md:w-[350px]  rounded-lg shadow-md h-[120px] mb-4">
              <div className="flex px-2 py-2">
                <div className="w-[50px] h-[50px] border-black rounded-full">
                  <img
                    className="rounded-full lg:w-[50px] lg:h-[50px] hidden md:flex"
                    src={prod.thumbnail}
                  />
                </div>
                <div className="flex pl-2 md:pl-6 w-[200px] flex-col">
                  <h2 className="font-medium lg:text-lg truncate lg:font-semibold text-xs">
                    {prod.title}
                  </h2>
                  <p className="text-xs  lg:w-[600px] truncate  font-extralight">
                    {prod.description}
                  </p>
                  <div className="flex lg:w-[600px] w-[150px] relative mt-8 justify-between items-center">
                    <div className="cursor-pointer text-gray-500">
                      <FaHeart className="w-4 h-4" />
                    </div>
                    <div className="cursor-pointer text-gray-500">
                      <FaShareAlt className="w-4 h-4" />
                    </div>
                    <div className="cursor-pointer text-gray-500">
                      <FaRegComment className="w-4 h-4" />
                    </div>
                    <div className="cursor-pointer text-gray-500">
                      <FaEye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;