import React from 'react';
import { Monitor, Server, Smartphone, Shield, HardDrive, Wifi } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Computer Repair',
      description: 'Comprehensive desktop and laptop repair services including hardware diagnostics and software troubleshooting.',
      price: 'From $75'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Enterprise server setup, maintenance, and monitoring for optimal business operations and security.',
      price: 'From $300/mo'
    },
    {
      icon: Wifi,
      title: 'Network Setup',
      description: 'Professional network configuration, security implementation, and wireless connectivity solutions.',
      price: 'From $150'
    },
    {
      icon: Shield,
      title: 'Virus Removal',
      description: 'Complete malware detection, removal, and system protection with ongoing security monitoring.',
      price: 'From $100'
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Advanced data recovery services for corrupted drives, deleted files, and system failures.',
      price: 'From $200'
    },
    {
      icon: Smartphone,
      title: 'IT Consulting',
      description: 'Strategic technology planning, system optimization, and digital transformation guidance.',
      price: 'From $125/hr'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to keep your business running smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-white rounded-2xl px-12 py-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2Hr</div>
              <div className="text-gray-600">Response</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Systems Sold</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;