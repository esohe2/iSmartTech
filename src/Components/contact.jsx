// import { Link } from "react-router-dom";

// export default function Contact() {
//   return (
//     <div>
//       <div>
//         <div className="bg-[url('/src\assets\img\ameen-almayuf-OQ4tJVXMCYM-unsplash.jpg')] bg-cover bg-center h-full rounded-lg shadow-sm shadow-black ">
//           <p className="py-[152px] text-white text-6xl font-medium text-center text-outline">
//             Our Contact Details
//           </p>
//         </div>
//         <div className="grid grid-cols-2 grid-flow-row gap-6 text-center px-[50px] py-[106px] ">
//           <div className="grid justify-items-center shadow-md rounded-md active:shadow-darkblue">
//             <img
//               className=" size-10"
//               src="/src\assets\img\location-dot-solid.svg"
//               alt=""
//             />
//             <p className="text-2xl font-medium py-[8px]">Address</p>
//             <a
//               href="https://maps.google.com/?q=123 18a Arala street, Airport Rd, opposite keystone bank"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="pb-[22px] text-lg"
//             >
//               18a Arala street, Airport Rd, opposite keystone bank, <br /> Benin
//               City, Edo
//             </a>
//           </div>
//           <div className="grid justify-items-center shadow-md rounded-md active:shadow-darkblue">
//             <img
//               className=" size-10"
//               src="/src\assets\img\envelope-solid.svg"
//               alt=""
//             />
//             <p className="text-2xl font-medium py-[8px]">Email</p>
//             <a
//               className="pb-[22px] text-lg"
//               href="mailto:amadinfestus@gmail.com?subject=Inquiry&body=Hello, I would like to ask about..."
//             >
//               amadinfestus@gmail.com
//             </a>
//           </div>
//           <div className="grid justify-items-center shadow-md rounded-md active:shadow-darkblue">
//             <img
//               className=" size-10"
//               src="/src\assets\img\phone-solid (1).svg"
//               alt=""
//             />
//             <p className="text-2xl font-medium py-[8px]">Call Us</p>
//             <a className="pb-[22px] text-lg" href="tel:+2347046059363">
//               +234 704 605 9363
//             </a>
//             .
//           </div>
//           <div className="grid justify-items-center shadow-md rounded-md active:shadow-darkblue">
//             <img
//               className=" size-10"
//               src="/src\assets\img\square-whatsapp-brands-solid.svg"
//               alt=""
//             />
//             <p className="text-2xl font-medium py-[8px]">Whatsapp</p>
//             <a
//               href="https://wa.me/2347046059363"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="pb-[22px] text-lg"
//             >
//               +234 704 605 9363 (click to send a message)
//             </a>
//           </div>
//         </div>
//       </div>

import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[url('/img/ameen-almayuf-OQ4tJVXMCYM-unsplash.jpg')] lg:h-[300px] bg-cover bg-center h-64 md:h-80 rounded-lg shadow-sm shadow-black flex items-center justify-center">
        <p className="text-white text-3xl md:text-5xl lg:text-6xl font-medium text-center text-outline px-4">
          Our Contact Details
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 lg:px-16 py-10 md:py-16">
        {/* Address */}
        <div className="grid justify-items-center shadow-md rounded-md p-6 hover:shadow-lg active:shadow-darkblue transition-shadow">
          <img
            className="w-10 h-10 mb-4"
            src="/img/location-dot-solid.svg"
            alt="Address Icon"
          />
          <p className="text-xl md:text-2xl font-medium mb-2">Address</p>
          <a
            href="https://maps.google.com/?q=18a Arala street, Airport Rd, opposite keystone bank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg text-blue-600 hover:underline text-center"
          >
            18a Arala street, Airport Rd, <br /> opposite Keystone Bank, Benin
            City, Edo
          </a>
        </div>

        {/* Email */}
        <div className="grid justify-items-center shadow-md rounded-md p-6 hover:shadow-lg active:shadow-darkblue transition-shadow">
          <img
            className="w-10 h-10 mb-4"
            src="/img/envelope-solid.svg"
            alt="Email Icon"
          />
          <p className="text-xl md:text-2xl font-medium mb-2">Email</p>
          <a
            className="text-sm md:text-lg text-blue-600 hover:underline"
            href="mailto:amadinfestus@gmail.com?subject=Inquiry&body=Hello, I would like to ask about..."
          >
            amadinfestus@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="grid justify-items-center shadow-md rounded-md p-6 hover:shadow-lg active:shadow-darkblue transition-shadow">
          <img
            className="w-10 h-10 mb-4"
            src="/img/phone-solid (1).svg"
            alt="Phone Icon"
          />
          <p className="text-xl md:text-2xl font-medium mb-2">Call Us</p>
          <a
            className="text-sm md:text-lg text-blue-600 hover:underline"
            href="tel:+2347046059363"
          >
            +234 704 605 9363
          </a>
        </div>

        {/* WhatsApp */}
        <div className="grid justify-items-center shadow-md rounded-md p-6 hover:shadow-lg active:shadow-darkblue transition-shadow">
          <img
            className="w-10 h-10 mb-4"
            src="/img/square-whatsapp-brands-solid.svg"
            alt="WhatsApp Icon"
          />
          <p className="text-xl md:text-2xl font-medium mb-2">WhatsApp</p>
          <a
            href="https://wa.me/2347046059363"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg text-blue-600 hover:underline"
          >
            +234 704 605 9363 (click to send a message)
          </a>
        </div>
      </div>

      {/* FOOTER SECTION */}

      <div className="bg-[url('/img/Use.png')] bg-cover bg-center h-full rounded-lg py-7 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left py-10 px-6 md:px-10 lg:px-16">
          <div className="text-white text-center">
            <div className="flex justify-center  mb-4 px-90 ">
              <img
                src="/src/assets/img/Group 1logo.svg"
                alt=""
                className="h-10"
              />
            </div>
            <p>
              18a Arala street, Airport Rd, <br />
              opposite Keystone Bank, Benin City, Edo
            </p>
            <p>+234 704 605 9363</p>
            <p>amadinfestus@gmail.com</p>
          </div>
          <div className="text-white mt-8 lg:mt-0 text-center">
            <p className="text-2xl font-medium mb-4">Quick Links</p>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-blue">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:text-blue">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-blue">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white text-center py-4">
          @Copyright iSmartTech Devices
        </p>
      </div>
    </div>
  );
}
