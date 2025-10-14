import { Monitor, Server, Camera, Shield, HardDrive, Printer, Laptop, Network, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Laptop Sales & Service',
      description: 'All brand laptop sales, repairs, upgrades, and maintenance. Free diagnosis & transparent pricing.',
    },
    {
      icon: Server,
      title: 'Server Sales & Service',
      description: 'Enterprise server solutions, maintenance, and configuration. Custom-built and refurbished options.',
    },
    {
      icon: Shield,
      title: 'Biometric Devices',
      description: 'Fingerprint scanners, face recognition, and access control systems with professional installation.',
    },
    {
      icon: Camera,
      title: 'CCTV & Security',
      description: 'IP cameras, NVR/DVR setup, remote access, and complete surveillance solutions.',
    },
    {
      icon: Network,
      title: 'Network Setup',
      description: 'Office LAN, Wi-Fi optimization, firewall configuration, and structured cabling services.',
    },
    {
      icon: Printer,
      title: 'Printer Sales & Service',
      description: 'All major printer brands, installation, maintenance, and cartridge services.',
    },
    {
      icon: Monitor,
      title: 'Desktop Sales & Service',
      description: 'Custom-built desktops, repairs, upgrades, and comprehensive maintenance services.',
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Laptop and server data recovery from hardware failures and accidental deletion.',
    },
    {
      icon: Settings,
      title: 'AMC Services',
      description: 'Annual maintenance contracts with priority support and preventive maintenance.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to keep your business running smoothly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:transform hover:-translate-y-2 animate-fade-in-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center justify-center space-x-8 bg-white dark:bg-slate-700 rounded-2xl px-12 py-8 shadow-lg hover-lift">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1500+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2Hr</div>
              <div className="text-gray-600 dark:text-gray-300">Response Time</div>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;