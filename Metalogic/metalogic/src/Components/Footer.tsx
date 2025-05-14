import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#001f4e] relative py-16 px-4 md:px-6 lg:px-8">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-0">
        <div className="border-2 rounded-lg bg-white shadow-lg w-60  sm:w-[500px] md:w-[550px] lg:w-[590px] ">
          <div className="flex flex-col  sm:flex-row py-6 px-6 gap-8 justify-between items-center">
           
            <div className="flex flex-col text-center sm:text-start">
              <h1 className="font-medium text-3xl md:text-4xl text-green-400">
                313
              </h1>
              <span className="text-gray-800 text-base md:text-lg lg:text-[18px] font-semibold">
                Kilometers of code written
              </span>
            </div>
            <div className="flex flex-col text-center sm:text-start">
              <h1 className="font-medium text-3xl md:text-4xl text-green-400">
                210
              </h1>
              <span className="text-gray-800 text-base md:text-lg lg:text-[18px] font-semibold">
                Liters of Coffee Drank
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid  mt-12 md:mt-2 grid-cols-1 px-2  text-white md:grid-cols-5 gap-2  rounded-md">
             <div className="space-y-3 px-1">
          <h2 className="text-lg font-bold">MetaLogic</h2>
          <p>Software Private Limited</p>
          <p>Saptakhel, Lalitpur (Head office)</p>
          <p>📞 +977 9851353599</p>
          <p>📧 info@metalogic.com.np</p>
        </div>
            <div className="m-2">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>Feedback</li>
            <li>Partnership</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
             <div className="m-2">
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>Cloud Computing Services</li>
            <li>Quality Assurance and Testing</li>
            <li>UI/UX Designing</li>
            <li>Maintenance and Support</li>
            <li>Dev Ops</li>
            <li>Blockchain Solutions</li>
          </ul>
        </div>
         <div className="m-2">
          <h3 className="font-bold mb-2">Join</h3>
          <ul className="space-y-1">
            <li>Careers at MetaLogic</li>
            <li>Internships</li>
          </ul>
        </div>
           <div className="m-2">
          <h3 className="font-bold mb-3">Join us on Social Medias</h3>
          <div className="flex gap-3">
            <FaWhatsapp className="w-6 h-6 hover:text-green-400 transition" />
            <FaFacebookF className="w-6 h-6 hover:text-blue-500 transition" />
            <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
            <FaLinkedinIn className="w-6 h-6 hover:text-blue-300 transition" />
          </div>
        </div>
      </div>
      
      {/* Copyright text */}
      <div className="text-center text-xs md:text-sm text-gray-400 mt-4">
        &copy; Copyright 2024 MetaLogic. All rights reserved.
      </div>
    </footer>
  );
};



export default Footer;