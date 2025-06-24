import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#240077] text-[#f2f0ff] p-10">
      <aside className="space-y-3">
        <img src={logo} alt="" />
        <p>
          AppGallery - Find your best app
          <br />
          Providing reliable tech since 2020
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to={"/"} className="link link-hover">
          Apps
        </Link>
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/term-service" className="link link-hover">
          Terms of Service
        </Link>
        <Link to="/privacy-policy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link
          to="https://developer.mozilla.org/en-US/"
          target="_blank"
          className="link link-hover"
        >
          Developer Resources
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a
          href="https://www.facebook.com/borhan.siddque.19/"
          target="_blank"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/borhan_siddque/"
          target="_blank"
          className="link link-hover"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/en/"
          target="_blank"
          className="link link-hover"
        >
          Tiktok
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
