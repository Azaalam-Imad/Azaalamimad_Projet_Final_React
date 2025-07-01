import React, { useState } from 'react';
import { Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import ddata from '../json/produit.json'
import { useParams } from 'react-router-dom';
import Images from '../constants/Images';
import Caroussel2 from '../components/Caroussel2';

const ProductDetailPage = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('white');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    additionalInfo: false,
    reviews: false
  });
  const {id} = useParams()


  const products = ddata.find(e=> e.id == parseInt(id))
 
  const productt = [Images.shopy1,Images.shopy2,Images.shopy7,Images.shopy6,Images.shopy5,Images.shopy4,Images.shopy3]
  const prod = productt.filter( e => e != products.image)
  prod.unshift(Images[products.image])
  const product = prod
  
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity
    });
    // Add your cart logic here
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="flex gap-4">
            {/* Thumbnail Column */}
            <div className="flex flex-col gap-2 w-20">
              {product.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === index ? 'border-gray-400' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            {/* Product Title and Price */}
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                {products.name}
              </h1>
              <p className="text-3xl font-bold text-gray-900">
                ${products.price.toFixed(2)}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
              <div className="flex gap-2">
                {products.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex gap-2">
                
                  <button
                    
                    onClick={() => setSelectedColor(products.color)}
                    className={`w-10 h-10 rounded-md border-2 transition-all ${
                      selectedColor === products.color
                        ? 'border-gray-400 scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: products.color.hex }}
                  />
              
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={() => handleQuantityChange('decrease')}
                  className="p-2 hover:bg-gray-50 transition-colors"
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange('increase')}
                  className="p-2 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-900 transition-colors"
              >
                ADD TO CART
              </button>
            </div>

            {/* Product Meta */}
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <span className="font-medium">Brand:</span>{' '}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {products.brand}
                </span>
              </p>
              <p>
                <span className="font-medium">Categories:</span>{' '}
                
                  <span >
                    <span className="text-blue-600 hover:underline cursor-pointer">
                      {products.category}
                    </span>
                  </span>
               
              </p>
            </div>

            {/* Expandable Sections */}
            <div className="space-y-4 border-t pt-6">
              {/* Description */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('description')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-medium text-gray-900">Description</span>
                  {expandedSections.description ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.description && (
                  <div className="pb-4 text-gray-600">
                    <p>
                      This comfortable boxy t-shirt features rolled sleeves for a casual, 
                      relaxed fit. Made from premium cotton blend fabric that's soft to the touch 
                      and perfect for everyday wear. The versatile design pairs well with jeans, 
                      shorts, or skirts for effortless styling.
                    </p>
                    <ul className="mt-3 space-y-1">
                      <li>• 60% Cotton, 40% Polyester blend</li>
                      <li>• Machine washable</li>
                      <li>• Relaxed fit</li>
                      <li>• Roll sleeve detail</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection('additionalInfo')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-medium text-gray-900">Additional Information</span>
                  {expandedSections.additionalInfo ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.additionalInfo && (
                  <div className="pb-4 text-gray-600">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p><strong>Weight:</strong> 0.3 kg</p>
                        <p><strong>Dimensions:</strong> 25 × 20 × 2 cm</p>
                      </div>
                      <div>
                        <p><strong>Material:</strong> Cotton Blend</p>
                        <p><strong>Care:</strong> Machine Wash</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Reviews */}
              <div>
                <button
                  onClick={() => toggleSection('reviews')}
                  className="flex items-center justify-between w-full py-3 text-left"
                >
                  <span className="font-medium text-gray-900">Reviews</span>
                  {expandedSections.reviews ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedSections.reviews && (
                  <div className="pb-4 text-gray-600">
                    <p className="mb-4">No reviews yet. Be the first to review this product!</p>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='text-center font-bold text-[30px]'>Related Products</div>
    <Caroussel2 />
    </>
  );
};

export default ProductDetailPage;