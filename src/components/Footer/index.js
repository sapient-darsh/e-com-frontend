import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-commonGreen h-auto w-full text-white">
        <div className="p-8 container mx-auto grid grid-cols-2  lg:grid-cols-4 gap-4 items-center">
          <div className="m-4 px-8">
            <div className="font-semibold text-2xl underline-offset-8 mb-8">
              About
            </div>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Career Us</li>
              <li>Stories</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="m-4 px-8">
            <div className="font-semibold text-2xl underline-offset-8 mb-8">
              Help
            </div>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancel or Return</li>
              <li>FAQs</li>
              <li>Reports</li>
            </ul>
          </div>
          <div className="m-4 px-8">
            <div className="font-semibold text-2xl underline-offset-8 mb-8">
              Policy
            </div>
            <ul>
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="m-4 px-8">
            <div className="font-semibold text-2xl underline-offset-8 mb-8">
              Social
            </div>
            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Linkdin</li>
              <li>Youtube</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
