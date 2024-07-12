import React, { useState, useEffect } from 'react';
import ServiceItem from './ServiceItem.jsx';
import ContactPopup from './ContactPopup.jsx';

const servicesData = [
  {
    id: 1,
    title: 'Marketing',
    description:
      "Unlock the full potential of your business with our comprehensive marketing solutions. From strategic planning to execution, we offer a range of services designed to enhance your brand presence, attract new customers, and drive growth. Whether you need help with market research, branding, advertising, or digital marketing, our team is here to guide you every step of the way. Let's amplify your message and elevate your business to new heights."
  },
  {
         id: 2,
        title: 'Social Media Page Handling',
        description:
          "Engage your audience and boost brand visibility with our expert social media page handling services. We'll manage your social media profiles, create compelling content, and interact with your followers to keep them engaged and connected. Let us take the reins of your social media presence, so you can focus on what you do best – running your business.",
      },
      {
        id: 3,
        title: 'Graphic Design',
        description:
          "Make a lasting impression with captivating visuals crafted by our talented graphic design team. Whether you need eye-catching logos, stunning marketing materials, or engaging digital content, we've got you covered. Our designs are tailored to your brand identity and messaging, ensuring consistency and impact across all channels. Let us bring your vision to life through the power of design.",
      },
      {
        id: 4,
        title: 'Web & Mobile App Development',
        description:
          "Turn your ideas into reality with our expert web and mobile app development services. Whether you're looking to build a responsive website, a dynamic web application, or a cutting-edge mobile app, our team has the skills and experience to bring your project to life. From concept to launch, we'll work closely with you to deliver custom solutions that meet your business objectives and exceed your expectations. Let's build something amazing together.",
      },
];

function ServiceSection() {
  const [selectedServiceId, setSelectedServiceId] = useState(1); // Default to Marketing service
  const [showPopup, setShowPopup] = useState(false);

 

  useEffect(() => {
    // Automatically open contact popup when entering services page
    //setShowPopup(true);

  }, []);

  const handleServiceClick = (serviceId) => {
    setSelectedServiceId(serviceId);
  };

  const handleContactClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="service-section">
        <ul className="service-list">
          {servicesData.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isSelected={service.id === selectedServiceId}
              onClick={() => setSelectedServiceId(service.id)}
            />
          ))}
        </ul>
        <div className="service-content">
          {servicesData.find((s) => s.id === selectedServiceId) && (
            <p className='result'>
              {servicesData.find((s) => s.id === selectedServiceId).description}
            </p>
          )}
        </div>
      </div>

      <div className='cnt-dtl'>
        <div>
          <button className='con' onClick={handleContactClick}>Contact for More Details</button>
        </div>
        {showPopup && <ContactPopup onClose={handleClosePopup} />}
      </div>
    </>
  );
}

export default ServiceSection;




















// import React, { useState } from 'react';
// import ServiceItem from './ServiceItem.jsx';
// import ContactPopup from './ContactPopup.jsx';

// const servicesData = [
//   {
//     id: 1,
//     title: 'Marketing',
//     description:
//       "Unlock the full potential of your business with our comprehensive marketing solutions. From strategic planning to execution, we offer a range of services designed to enhance your brand presence, attract new customers, and drive growth. Whether you need help with market research, branding, advertising, or digital marketing, our team is here to guide you every step of the way. Let's amplify your message and elevate your business to new heights."

//     ,
//   },
//   {
//     id: 2,
//     title: 'Social Media Page Handling',
//     description:
//       "Engage your audience and boost brand visibility with our expert social media page handling services. We'll manage your social media profiles, create compelling content, and interact with your followers to keep them engaged and connected. Let us take the reins of your social media presence, so you can focus on what you do best – running your business.",
//   },
//   {
//     id: 3,
//     title: 'Graphic Design',
//     description:
//       "Make a lasting impression with captivating visuals crafted by our talented graphic design team. Whether you need eye-catching logos, stunning marketing materials, or engaging digital content, we've got you covered. Our designs are tailored to your brand identity and messaging, ensuring consistency and impact across all channels. Let us bring your vision to life through the power of design.",
//   },
//   {
//     id: 4,
//     title: 'Web & Mobile App Development',
//     description:
//       "Turn your ideas into reality with our expert web and mobile app development services. Whether you're looking to build a responsive website, a dynamic web application, or a cutting-edge mobile app, our team has the skills and experience to bring your project to life. From concept to launch, we'll work closely with you to deliver custom solutions that meet your business objectives and exceed your expectations. Let's build something amazing together.",
//   },

// ];

// function ServiceSection() {
//   const [selectedServiceId, setSelectedServiceId] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClick = (serviceId) => {
//     setSelectedServiceId(serviceId);
//   };

//   const handleContactClick = () => {
//     setShowPopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <>
//       <div className="service-section">
//         <ul className="service-list">
//           {servicesData.map((service) => (
//             <ServiceItem
//               key={service.id}
//               service={service}
//               isSelected={service.id === selectedServiceId}
//               onClick={() => handleClick(service.id)}
//             />
//           ))}
//         </ul>
//         <div className="service-content">
//           {selectedServiceId !== null && (
//             <p className='result'>
//               {servicesData.find((s) => s.id === selectedServiceId).description}
//             </p>
//           )}
//         </div>
//       </div>

//       <div className='cnt-dtl'>
//         <div>
//           {/* Add onClick handler to show the popup */}
//           <button className='con' onClick={handleContactClick}>Contact for More Details</button>
//           {/* <p className='con' onClick={handleContactClick}>Contact for More Details</p> */}
//         </div>
//         {/* Render the popup only when showPopup is true */}
//         {showPopup && <ContactPopup onClose={handleClosePopup} />}
//       </div>

//     </>

//   );
// }

// export default ServiceSection;
