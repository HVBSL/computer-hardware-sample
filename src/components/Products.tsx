import React from 'react';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import { Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'TechPro Gaming Desktop',
      price: '$1,299',
      image: product1,
      specs: ['Intel i7 Processor', '16GB RAM', 'RTX 3060 Graphics', '1TB SSD'],
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'Business Laptop Pro',
      price: '$899',
      image: product2,
      specs: ['Intel i5 Processor', '8GB RAM', 'Integrated Graphics', '512GB SSD'],
      rating: 4.7,
      reviews: 89
    },
    {
      name: 'Enterprise Server Rack',
      price: '$2,499',
      image: product3,
      specs: ['Dual Xeon CPUs', '64GB RAM', 'RAID Storage', '24/7 Support'],
      rating: 4.8,
      reviews: 45
    },
    {
      name: 'All-in-One Workstation',
      price: '$1,599',
      image: product4,
      specs: ['27" 4K Display', 'i7 Processor', '16GB RAM', '1TB Storage'],
      rating: 4.6,
      reviews: 73
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Hardware</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-performance computing solutions designed for gaming, business, and enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  New
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>

                <ul className="space-y-1 mb-6">
                  {product.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="text-sm text-gray-600">• {spec}</li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;