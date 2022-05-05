import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import I1 from "../img/i1.png";

const HomeContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start  justify-center gap-6  ">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut
          exercitationem qui quod vitae voluptatibus accusantium incidunt
          assumenda, cupiditate facere sint eos distinctio asperiores laborum!
          Molestias placeat ex provident quas.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          alt="hero-bg"
          className="ml-auto h-400 w-full lg:w-auto lg:h-650"
        />
        <div className="w-full h-full absolute top-0 -left-20 flex items-center justify-center px-32 py-4">
          <div className="w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-md flex flex-col items-center justify-center">
            <img src={I1} className="w-40 -mt-20" alt="I1" />
            <p className="text-base font-semibold text-textColor">
              Chocolate Vanila
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Chocolate & vanilla
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
