import React, { useState } from 'react';
import '../Service/PackageItems.css';

const PackageItem = () => {
  const packages = [
    {
      title: 'General',
      description: 'Price - LKR 18,000.00',
      description1: 'Manage Instagram & Facebook',
      list: [
        'Art Work - 10',
        'Post Design - 2',
        'Sinhala & English Content - 10',
        'Strategic Page Management',
        'Hash Tag Research',
      ]
    },
    {
      title: 'Silver',
      description: 'Price - LKR 24,000.00',
      description1: 'Manage Instagram & Facebook',
      list: [
        'Art Work - 13',
        'Post Design - 3',
        'Sinhala & English Content - 10',
        '30 Second Animation Video - 1',
        'Strategic Marketing Plan - Monthly',
        'Strategic Page Management',
        'Hash Tag Research',
      ]
    },
    {
      title: 'Gold',
      description: 'Price - LKR 31,000.00',
      description1: 'Manage Instagram & Facebook',
      list: [
        'Art Work - 22 + Free 4',
        'Post Design - 10',
        'Sinhala & English Content - 10',
        '15 Second Animation Video - 2',
        'Contact Calender - Weekly',
        'Monthly Report & One Meeting',
        'Strategic Page Management',
        'Hash Tag Research',
      ]
    },
    {
      title: 'Premium',
      description: 'Price - LKR 35,000.00',
      description1: 'Manage Instagram, Facebook, Google My Business & TikTok',
      list: [
        'Art Work - 30 + Free 5',
        'Post Design - 15',
        'Sinhala & English Content - 10',
        '15 Second Animation Video + Voice',
        'Contact Calender - Weekly',
        'Report & Meeting - Monthly',
        'Paid add + One Google add',
        'Email Marketing',
        'Customer Handling',
        'Strategic Page Management',
        'Hash Tag Research - Monthly',
      ]
    }
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageClick = (packageItem) => {
    setSelectedPackage(packageItem);
  };

  const handleClosePopup = () => {
    setSelectedPackage(null);
  };

  const getBackgroundColor = (index) => {
    const colors = ['#FFC0CB', '#ADD8E6', '#D4af37', '#FFA07A']; // Add more colors if needed
    return colors[index % colors.length];
  };

  return (
    <div className='package'>
      {packages.map((packageItem, index) => (
        <div
          className='package-item'
          key={index}
          onClick={() => handlePackageClick(packageItem)}
          style={{ backgroundColor: getBackgroundColor(index) }}
        >
          <div className='package-header'>
            <h3>{packageItem.title}</h3>
            <p>{packageItem.description}</p>
            {/* <p>{packageItem.description1}</p>
            <ul>
              {packageItem.list && packageItem.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul> */}
          </div>
        </div>
      ))}
      {selectedPackage && (
        <div className='popup'>
          <div className='popup-content'>
            <h2>{selectedPackage.title}</h2>
            <p>{selectedPackage.description}</p>
            <p>{selectedPackage.description1}</p>
            <ul>
              {selectedPackage.list && selectedPackage.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className='popup-buttons'>
              <button onClick={() => console.log('Place an Order clicked')}>Place an Order</button>
              <button onClick={handleClosePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageItem;
