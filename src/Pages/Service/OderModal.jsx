import React, { useState } from 'react';
import './OderModal.css'

function OrderModal({ onClose }) {
    const [description, setDescription] = useState('');
    const [sampleFile, setSampleFile] = useState(null);
    const [count, setCount] = useState(1);
    

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSampleFile(file);
    };

    const handleCountChange = (e) => {
        setCount(parseInt(e.target.value));
    };

    const handleSubmit = () => {
        // Here you can perform any action with the order details
        // For example, send a request to the server to place the order
        // After handling the order, you can close the modal
        onClose();
    };

    return (
        <div className="order-modal-overlay">
            <div className="order-modal">
                <h2>Place an Order</h2>
                <label>Description of Post or Video:</label>
                <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Enter description..."
                />
                <label>Upload Sample & Music Material (ZIP file):</label>
                <input type="file" onChange={handleFileChange} />
                <label>Count of Post or Video:</label>
                <input
                    type="number"
                    min="1"
                    value={count}
                    onChange={handleCountChange}
                />
                <label>Your Contact Number:</label>
                <input type="text" onChange={handleFileChange} />
                <button onClick={handleSubmit}>Submit Order</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default OrderModal;