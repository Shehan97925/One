
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Join.css';
import Header from '../../Component/Header/Header';
import Body from '../../Component/Body/Body';
import Footer from '../../Component/Footer/Footer';

function Join() {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        email: '',
        userName: '',
        password: '',
        // confirmPassword: '',
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message); // Display success message
                setError(''); // Clear any previous error messages
                // Optionally, reset the form or redirect the user to another page
            } else {
                setError(data.error); // Display error message
                setMessage(''); // Clear any previous success messages
            }
        } catch (error) {
            console.error('Error registering user:', error);
            // Add code to handle error
            setError('An error occurred while registering.'); // Display generic error message
            setMessage(''); // Clear any previous success messages
        }
    };

    return (
        <>
            <Header />
            <div className="body-content">
                <Body>
                    <div className="header1">
                        <div className="text-r">Registration</div>
                        <div className="underline1"></div>
                    </div>
                    <div className="container1">
                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <div className="input">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Full Name"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Contact Number:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="contactNumber"
                                                        value={formData.contactNumber}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Contact Number"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Email:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        placeholder="example@gmail.com"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>User Name:</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="userName"
                                                        value={formData.userName}
                                                        onChange={handleInputChange}
                                                        placeholder="Ex: amal35"
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Password:</td>
                                                <td>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        placeholder="Ex: ABcd@1234"
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="register-container">
                                    <button type="submit" className="register">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="message">
                        {message && <p className="success">{message}</p>}
                        {error && <p className="error">{error}</p>}
                    </div>
                </Body>
            </div>
            <Footer />
        </>
    );
}

export default Join;








// import React, { useState } from 'react';
// import './Join.css';
// import Header from '../../Component/Header/Header';
// import Body from '../../Component/Body/Body';
// import Footer from '../../Component/Footer/Footer';

// function Join() {
//     // State variables to store form data
//     const [formData, setFormData] = useState({
//         fullName: '',
//         contactNumber: '',
//         email: '',
//         userName: '',
//         password: '',
//         confirmPassword: '',
//     });

//     // Function to handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Function to handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const data = await response.json();
//             console.log(data); // Log the response from the server
//             // Add code to handle success or error response from the server
//         } catch (error) {
//             console.error('Error registering user:', error);
//             // Add code to handle error
//         }
//     };

//     return (
//         <>
//             <Header />
//             <div className="body-content">
//                 <Body>
//                     <div className="header1">
//                         <div className="text">Registration</div>
//                         <div className="underline1"></div>
//                     </div>
//                     <div className="container1">
//                         <form onSubmit={handleSubmit}>
//                             <div className="inputs">
//                                 <div className="input">
//                                     <table>
//                                         <tbody>
//                                             <tr>
//                                                 <td>Name:</td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="fullName"
//                                                         value={formData.fullName}
//                                                         onChange={handleInputChange}
//                                                         placeholder="Enter First Name"
//                                                     />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Contact Number:</td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="contactNumber"
//                                                         value={formData.contactNumber}
//                                                         onChange={handleInputChange}
//                                                         placeholder="Enter Contact Number"
//                                                     />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Email:</td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="email"
//                                                         value={formData.email}
//                                                         onChange={handleInputChange}
//                                                         placeholder=".........@gmail.com"
//                                                     />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>User Name:</td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="userName"
//                                                         value={formData.userName}
//                                                         onChange={handleInputChange}
//                                                         placeholder="Ex: amal35"
//                                                     />
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>Password:</td>
//                                                 <td>
//                                                     <input
//                                                         type="password"
//                                                         name="password"
//                                                         value={formData.password}
//                                                         onChange={handleInputChange}
//                                                         placeholder="Ex: ABcd@1234"
//                                                     />
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                                 <div className="register-container">
//                                     <button type="submit" className="register">
//                                         Register
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </Body>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Join;
