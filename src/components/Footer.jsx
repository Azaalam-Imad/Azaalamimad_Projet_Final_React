import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-between px-4 bg-gray-400/35 py-5'>
            <div className='w-[30vw]'>
                <h1>GET IN TOUCH</h1>
                <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>

            </div>
            <div>
                <h1>CATEGORIES</h1>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Dresses</li>
                    <li>Sunglasses</li>
                </ul>
            </div>
            <div>
                <h1>LINKS</h1>
                <ul>
                    <li>Search</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div>
                <h1>HELP</h1>
                <ul>
                    <li>Track Order</li>
                    <li>Returns</li>
                    <li>Shipping</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div>
                <h1>NEWSLETTER</h1>
                <div>
                    <input type="email" />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;