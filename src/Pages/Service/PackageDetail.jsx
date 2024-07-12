  import React from 'react';
  import { useLocation } from 'react-router-dom';

  const PackageDetail = () => {
    const location = useLocation();
    const { title, description, serviceList } = location.state;

    const handleOrderClick = (price) => {
      // Navigate to the payment screen with the price as a URL parameter
      history.push(`/payment?price=${price}`);
    };

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {serviceList.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
        <button onClick={() => handleOrderClick(description)}>Place an Order</button>
      </div>
    );
  };

  export default PackageDetail;
