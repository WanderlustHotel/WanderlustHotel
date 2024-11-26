import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest,}
from "react-icons/fa";
import { images } from '../images/images';
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    navigate(path);
  };
  return (
    <footer className="bg-[#B89881] text-black py-10 px-4">
      <div className="container mx-auto text-center mb-6" onClick={() => handleMenuItemClick("/WanderlustHotel")}>
        {/* Logo Section */}
        <img 
          src={images.logo}
          alt="The Wanderlust Hotel Logo" 
          className="mx-auto h-24 mb-4"  // Logo lớn và căn giữa
        />
      </div>

      {/* Quick Links Section */}
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-8">
          <li>
            <a 
              href="https://maps.app.goo.gl/9hhkQk7gihK9xWvn7?g_st=iz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              Reviews
            </a>
          </li>
          <li>
            <a 
              href="/about" 
              className="hover:underline"
            >
              About Us
            </a>
          </li>
          <li>
            <a 
              href="https://drive.google.com/file/d/16Ivn0Un1o-bGPYWuAAimgZVEbUeBtXSZ/view?usp=drive_link" 
              className="hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="/vietnamonline.com" 
              className="hover:underline"
            >
              Article
            </a>
          </li>
        </ul>
      </div>

      {/* Article Section */}
      {/* <div className="text-center mt-10">
        <a 
          href="/article" 
          className="text-sm hover:underline"
        >
          Read our Article
        </a>
      </div> */}

      <div className="text-center mt-4">
      <p>99/8B Tran Phu, Loc Tho Ward, Nha Trang Province, Vietnam</p>
          <p>Phone: 0258.7765.912</p>
          <p>&copy; 2024 The Wanderlust Hotel</p>
      </div>
    </footer>
  );
};

export default Footer;
