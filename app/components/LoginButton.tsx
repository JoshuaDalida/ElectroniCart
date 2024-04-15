'use client'; 
import React from 'react';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
    const handleGoogleLogin = () => {
        signIn('google', { callbackUrl: '/' });
    };

    return (
        <button
        onClick={handleGoogleLogin}
        className="bg-gray-800 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-full transition duration-200 ease-in-out shadow-md hover:shadow-lg">
            Login</button>
    );
}

export default LoginButton