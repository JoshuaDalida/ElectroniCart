'use client'
import React, { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';


export default function Profile() {
    const { data: session, status } = useSession();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");

    // Update the state based on the current session
    useEffect(() => {
        if (session && session.user) {
            setName(session.user.name || "");
            setEmail(session.user.email || "");
            setAvatar(session.user.image || "");
            setDescription(session.user.description || "");
        }
    }, [session]);

    // Redirect to sign in if not logged in
    if (status === "loading") {
        return <p>Loading...</p>;
    }
    if (!session) {
        signIn();
        return <p>Redirecting to login...</p>;
    }

    // Handle form submission to update profile
    const handleSubmit = async (event) => {
        event.preventDefault();
        fetch('/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, gender, description })
        })
            .then(res => console.log(res))
    };
    const handleDelete = async () => {
        fetch('/api/profile', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        })
            .then(res => console.log(res))
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center font-bold text-xl uppercase">
                            {avatar ? (
                                <img src={avatar} alt="User Avatar" className='rounded-full' />
                            ) : (
                                session.user.name[0].toUpperCase()
                            )}
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            rows="3"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Update Profile
                        </button>
                    </div>
                    <div>
                        <button type="button" className="w-full px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleDelete}>
                            Delete Account
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
}

