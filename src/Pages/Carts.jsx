import React, { useContext, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Mycontext } from '../context/Context';
import Images from '../constants/Images';

const Carts = () => {
  const { datashop } = useContext(Mycontext);

  const [cartItems, setCartItems] = useState(
    datashop.map(item => ({...item[0], quantity: 1,}))
  );

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (index, change) => {
    setCartItems(prevItems =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleUpdateCart = () => {
    console.log('Updated Cart:', cartItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden ">
          <div className='max-md:overflow-x-scroll'>
            <div className="bg-gray-50 px-6 py-4 w-[72rem]">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700 uppercase tracking-wide">
              <div className="col-span-5">PRODUCT NAME</div>
              <div className="col-span-2 text-center">UNIT PRICE</div>
              <div className="col-span-3 text-center">QUANTITY</div>
              <div className="col-span-2 text-right">TOTAL</div>
            </div>
          </div>

          <div className="px-6 py-6 border-b border-gray-200  ">
            {cartItems.map((item, index) => (
              <div key={item.id} className="grid grid-cols-12 gap-4 items-center mb-4 w-[69rem]">
                <div className="col-span-5 flex items-center space-x-4">
                  <div className="w-20 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0" >
                    <img src={Images[item.image]} alt="" />
                   </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">{item.name}</h3>
                  </div>
                </div>

                <div className="col-span-2 text-center">
                  <span className="text-gray-900 font-medium">${item.price.toFixed(2)}</span>
                </div>

                <div className="col-span-3 flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="col-span-2 text-right">
                  <span className="text-gray-900 font-medium text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div className="px-6 py-6 bg-gray-50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <input
                type="text"
                value={couponCode}
                onChange={handleCouponChange}
                placeholder="Coupon Code"
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-900"
              />
              <button
                onClick={handleUpdateCart}
                className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 mt-4 sm:mt-0"
              >
                UPDATE CART
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="max-w-sm ml-auto space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>${getTotal()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping:</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total:</span>
                <span>${getTotal()}</span>
              </div>
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 mt-4">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
