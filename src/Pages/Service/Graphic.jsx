import React, {useState } from 'react';

import './Graphic.css'
import OrderModal from './OderModal';
function Graphic() {
    const graphic = [
        {

            title: 'Post Design',
            list: ['LKR 500.00 for per design',
                'There are three time changes free of chages',
                'Deliver within two days'
            ]


        },
        {

            title: 'Video Design',
            list: ['LKR 2000.00 for per design',
                'There are three time changes free of chages',
                'Deliver within two days'

            ]
        }
    ];
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (

        <div className='graphic-item'>
            <p className='paragraph'>Unleash the power of exceptional graphic design! At our company,
                we're passionate about creating visuals that perfectly capture your brand identity and resonate
                with your target audience. Our team of highly skilled and experienced designers is dedicated to
                translating your vision into stunning graphics that elevate your marketing materials, social media presence,
                and overall brand image. Whether you need captivating social media posts, eye-catching website visuals, or impactful
                brochures, we possess the expertise to deliver creative solutions that meet your specific goals and exceed your expectations.</p>
            {graphic.map((graphic) => (
                <div className="grapic" key={graphic.title}>
                    <h3>{graphic.title}</h3>

                    {graphic.list && graphic.list.length > 0 && (
                        <ul>
                            {graphic.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    <div className='b'>
                        <button onClick={openModal}>Place an Order</button>
                    </div>

                </div>
            ))}
            {showModal && <OrderModal onClose={closeModal} />}
        </div>
    )
}

export default Graphic
