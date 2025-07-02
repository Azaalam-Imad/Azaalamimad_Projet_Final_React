import React, { useContext, useState } from 'react';
import ddata from '../json/produit.json';
import { Search } from 'lucide-react';
import Images from '../constants/Images';
import { Link } from 'react-router-dom';
import { Mycontext } from '../context/Context';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Alphabetically, A-Z');
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const {addcart}= useContext(Mycontext)

  const products = ddata;

  const categories = [
    { name: 'Best Seller', count: 8 },
    { name: 'Featured', count: 8 },
    { name: 'Men', count: 8 },
    { name: 'Women', count: 8 }
  ];

  const colors = ['black', 'grey', 'red'];
  const prices = ['0-20', '20-40'];
  const sizes = ['L', 'M', 'S', 'XL'];

  const handleColorChange = (color) => {
    setSelectedColors(prev => {
      if (prev.includes(color)) return prev.filter(c => c !== color);
      return [...prev, color];
    });
  };

  const handlePriceChange = (price) => {
    setSelectedPrices(prev => {
      if (prev.includes(price)) return prev.filter(p => p !== price);
      return [...prev, price];
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSizes(prev => {
      if (prev.includes(size)) return prev.filter(s => s !== size);
      return [...prev, size];
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color);
    const exists = selectedPrices.find(priceRange => {
      const [min, max] = priceRange.split('-').map(Number);
      return product.price >= min && product.price <= max;
    });
    const matchesPrice = selectedPrices.length === 0 || exists;
    const matchesSize = selectedSizes.length === 0 || selectedSizes.some(size => product.size.includes(size));
    return matchesSearch && matchesColor && matchesPrice && matchesSize;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "Alphabetically, A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Alphabetically, Z-A") return b.name.localeCompare(a.name);
    if (sortBy === "Price, low to high") return a.price - b.price;
    if (sortBy === "Price, high to low") return b.price - a.price;
    return 0;
  });

  // Pagination
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if(pageNumber < 1) pageNumber = 1;
    else if(pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen ">
      <div className="relative h-[300px] bg-black">
              <img
                alt="Blog Banner"
                src={Images.carousel3}
                className="object-cover w-full h-full opacity-50"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-white font-bold text-5xl">Shop</h1>
              </div>
            </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-64 bg-white p-6 rounded-lg h-fit ">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.name} className="flex justify-between items-center cursor-pointer hover:text-blue-600 text-gray-600">
                    <span>{category.name}</span>
                    <span className="text-gray-400 text-sm">({category.count} items)</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Color</h3>
              <div className="space-y-2">
                {colors.map(color => (
                  <label key={color} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                    />
                    <span className="capitalize text-gray-600">{color}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Price</h3>
              <div className="space-y-2">
                {prices.map(price => (
                  <label key={price} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedPrices.includes(price)}
                      onChange={() => handlePriceChange(price)}
                    />
                    <span className="text-gray-600">${price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Size</h3>
              <div className="space-y-2">
                {sizes.map(size => (
                  <label key={size} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={selectedSizes.includes(size)}
                      onChange={() => handleSizeChange(size)}
                    />
                    <span className="text-gray-600">{size}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>
                <select
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={6}>6</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                </select>
              </div>
              <div className="text-gray-600">
                Showing {indexOfFirstProduct + 1} to {Math.min(indexOfLastProduct, sortedProducts.length)} of {sortedProducts.length} items
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map(product => (
                <div key={product.id} className="bg-white  overflow-hidden group  duration-300 h-[75vh]">
                  <div className="relative bg-black">
                    <img
                      src={Images[product.image]}
                      alt={product.name}
                      className="w-full h-96 object-cover object-top group-hover:opacity-70 transition-opacity duration-300"
                    />
                    {product.onSale && (
                      <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Sale
                      </span>
                    )}
                    <button onClick={()=>addcart(product.id)} className="cursor-pointer absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black rounded-full text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Cart
                    </button>
                  </div>
                  <div className="p-4">
                    <Link to={`/ProductDetailPage/${product.id}`}>
                      <h3 className="font-medium text-gray-800 mb-2 hover:text-amber-800 cursor-pointer">{product.name}</h3>
                    </Link>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex mt-8 space-x-2 items-center justify-center flex-wrap gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
              >
                Previous
              </button>

              {Array(totalPages).fill().map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`rounded-full w-8 h-8 border flex items-center justify-center ${
                      currentPage === pageNum
                        ? 'bg-black text-white'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => paginate(currentPage + 1)}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
