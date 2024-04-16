import React from 'react';

const footer = () => {
    return (
        <footer className='bg-gray-100' >
            <div className='flex flex-row justify-center'>
                <div className="bg-gray-300 text-black flex flex-col items-center m-5 py-9 w-40 rounded-lg">
                    <img className='h-10' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Shopping Cart" />
                    <p>Best Price & Offers</p>
                    <p className="text-sm text-gray-600">Order $50 or More</p>
                </div>
                <div className="bg-gray-300 text-black flex flex-col items-center m-5 py-9 px-2 rounded-lg">
                    <img className='h-10' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Shopping Cart" />
                    <p>Free Delivery</p>
                    <p className="text-sm text-gray-600">24/7 amazing services</p>
                </div>
                <div className="bg-gray-300 text-black flex flex-col items-center m-5 py-9  w-40 rounded-lg">
                    <img className='h-10' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Shopping Cart" />
                    <p>Great Daily Deal</p>
                    <p className="text-sm text-gray-600">When you sign up</p>
                </div>
                <div className="bg-gray-300 text-black flex flex-col items-center m-5 py-9  w-40 rounded-lg">
                    <img className='h-10' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Shopping Cart" />
                    <p>Wide Assortment</p>
                    <p className="text-sm text-gray-600">Wide Assortment</p>
                </div>
                <div className="bg-gray-300 text-black flex flex-col items-center m-5 py-9  w-40 rounded-lg">
                    <img className='h-10' src='https://www.svgrepo.com/show/80543/shopping-cart-outline.svg' alt="Shopping Cart" />
                    <p>Easy Returns</p>
                    <p className="text-sm text-gray-600">Within 30 days</p>
                </div>
            </div>
            <div className='flex flex-row justify-center'>
                <div className="text-black flex flex-col items-center m-5">
                    <p className="text-2xl font-bold text-gray-800">ElectroniCart</p>
                    <p className="text-sm text-gray-400 no-underline">The place to buy the best electronics</p>
                    <img className="h-9" src='https://help.zazzle.com/hc/article_attachments/360010513393' />
                </div>
                <div className="text-black flex flex-col items-center m-5">
                    <p className="text-xl font-bold text-gray-800">Support</p>
                    <p className="text-sm text-gray-600">Track Your Order </p>
                    <p className="text-sm text-gray-600">Terms & Conditions </p>
                    <p className="text-sm text-gray-600">Privacy Policy</p>
                    <p className="text-sm text-gray-600">Help Center</p>
                </div>
                <div className="text-black flex flex-col items-center m-5">
                    <p className="text-xl font-bold text-gray-800">Useful Links</p>
                    <p className="text-sm text-gray-600">Home </p>
                    <p className="text-sm text-gray-600">About</p>
                    <p className="text-sm text-gray-600">News & Articles</p>
                    <p className="text-sm text-gray-600">Help Center</p>
                </div>
                <div className="text-black flex flex-col items-center m-5">

                    <p className="text-xl font-bold text-gray-800">Infromation</p>
                    <p className="text-sm text-gray-600">123 Main Street</p>
                    <p className="text-sm text-gray-600">ElectroniCart@gmail.com</p>
                    <p className="text-sm text-gray-600">(403) 587 1234</p>

                </div>
            </div>
        </footer>
    );
};

export default footer;
