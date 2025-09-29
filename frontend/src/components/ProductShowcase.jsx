import React from 'react';
import territoryJacket from '../assets/REVIT-TERRITORY-JACKET.webp';
import sambaGlove from '../assets/HELD-SAMBIA-GLOVE.webp';
import arrowShoes from '../assets/REVIT-ARROW-SHOES.webp';
import ventureXTPants from '../assets/ALPINESTARS-VENTURE-XT-PANTS.webp';

const ProductCard = ({ image, name, href, index }) => (
  <a 
    href={href} 
    className={`group bg-white p-6 rounded-xl shadow-lg text-center flex-shrink-0 block no-underline transition-all duration-500 ease-in-out transform scale-100 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/20 border-2 border-transparent hover:border-yellow-400 animate-fade-in-up animation-delay-${(index + 1) * 200}`}
  >
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover transition-all duration-500 ease-in-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <p className="text-gray-800 font-bold text-lg group-hover:text-yellow-600 transition-colors duration-300">{name}</p>
    <div className="mt-2 text-yellow-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      View Details →
    </div>
  </a>
);

const ProductShowcase = () => {
  const products = [
    { name: "REV'IT! Territory Jacket", image: territoryJacket, href: "/product/territory-jacket" },
    { name: "Held Samba Glove", image: sambaGlove, href: "/product/samba-glove" },
    { name: "REV'IT! Arrow Shoes", image: arrowShoes, href: "/product/arrow-shoes" },
    { name: "Alpinestars Venture XT Pants", image: ventureXTPants, href: "/product/venture-xt-pants" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/10 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-500/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            WHAT'S LEADING THE PACK
          </h1>
        </div>
        
        <div className="animate-scale-in animation-delay-200">
          <hr className="w-full max-w-5xl mx-auto border-t-2 border-gradient-to-r from-yellow-400 to-orange-400 mb-12" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              image={product.image} 
              name={product.name} 
              href={product.href} 
              index={index}
            />
          ))}
        </div>
        
        <div className="animate-fade-in-up animation-delay-800 mt-12 text-center">
          <a 
            href="/products" 
            className="btn-primary"
          >
            View All Products
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;