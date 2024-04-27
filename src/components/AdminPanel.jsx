import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Fetch user data from the backend API when the component mounts
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            // Make an HTTP GET request to fetch user data
            const response = await axios.get('/api/users'); // Adjust the API endpoint as per your backend setup
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <div>
            <h1>User Data</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map(user => (
                        <tr key={user.id}>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.country}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPanel;
