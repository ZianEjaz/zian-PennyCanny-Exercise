import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const Header = () => {
  const headerText = () => {
    return (
      <>
        <div className="w-full">
          <h2 className="text-4xl lg:text-6xl text-white font-bold">
            Jessica Henery
          </h2>
          <p className="p-4 font-regular lg:text-xl text-gold sm:pt-4">
            Senior SEO Writer
          </p>
        </div>
        <div className="w-8/12 justify-between sm:justify-start flex text-gray-400 self-end sm:pb-8">
          <span className="pr-3">
            <FaFacebookF />
          </span>
          <span className="pr-3">
            <FaTwitter />
          </span>
          <span className="pr-3">
            <FaLinkedinIn />
          </span>
          <span className="pr-3">
            <FaInstagram />
          </span>
          <span className="pr-3">
            <FaPinterestP />
          </span>
        </div>
      </>
    );
  };

  const overviewBlock = () => {
    return (
      <>
        <h3 className="  text-3xl lg:text-5xl font-bold text-navy w-full">
          Overview
        </h3>
        <p className="sm:text-xs lg:text-sm xl:text-lg text-navy pt-1">
          A professional wordsmith skilled in SEO writing with a knack for
          digital marketing. He writes to enlighten customers and knows how to
          tickle readers’ imaginations while connecting stories with sales.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </>
    );
  };
  return (
    <header>
      <div className="w-full flex flex-wrap py-16 sm:w-4/5 mx-auto bg-navy-sm">
        {/* top section  */}

        {/* top image section */}
        <div className="px-8 w-full sm:w-2/6 sm:pr-3 h-full">
          <img
            className="w-full"
            src="/assets/Rectangle 3674.png"
            alt="Jessica Henery"
          />
          <div className="flex flex-wrap justify-center text-center p-6 sm:hidden">
            {headerText()}
          </div>

          <button className="bg-gold w-full p-3 rounded-lg font-semibold text-xs my-5">
            Contact
          </button>
        </div>

        {/* top text content */}
        <div className="w-4/6 pl-12 ">
          <div className="hidden w-full sm:flex flex-wrap h-1/2 pt-2">
            {headerText()}
          </div>
          <div className="hidden h-1/2 sm:flex flex-wrap pt-8">
            {overviewBlock()}
          </div>
        </div>
      </div>
      <div className="px-8 pt-14 sm:hidden">{overviewBlock()}</div>
    </header>
  );
};

export default Header;
