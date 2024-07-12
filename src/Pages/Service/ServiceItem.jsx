import React from 'react';

function ServiceItem({ service, isSelected, onClick }) {
  return (
    <li
      className={`service-item ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{ cursor: isSelected ? 'default' : 'pointer' }}
    >
      {service.title}
    </li>
    
  );
}

export default ServiceItem;