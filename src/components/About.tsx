import { useEffect, useState } from 'react';
import aboutImage from '../assets/about-image.jpeg';
import heroBackground from '../assets/hero-background.jpeg';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';
import product4 from '../assets/product4.jpeg';
import { Shield, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const slides = [
    { src: aboutImage, alt: 'Tech solutions workspace' },
    { src: heroBackground, alt: 'Hardware showcase background' },
    { src: product1, alt: 'Featured product 1' },
    { src: product2, alt: 'Featured product 2' },
    { src: product3, alt: 'Featured product 3' },
    { src: product4, alt: 'Featured product 4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    const total = slides.length;
    const nextIndex = ((index % total) + total) % total;
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const features = [
    {
      icon: Shield,
      title: 'Reliable Solutions',
      description: 'Trusted by over 1500+ clients for consistent, high-quality tech support and hardware solutions.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Average response time under 2 hours for urgent issues, ensuring minimal downtime for your business.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified technicians with extensive experience in hardware, software, and networking solutions.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: '98% repair success rate with comprehensive warranties on all our services and products.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tech Solutions
              <span className="block text-blue-600">Built For You</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We offer top-tier computer sales and expert tech support designed to keep your technology running smoothly. From new system setups to complex troubleshooting, our certified technicians provide reliable assistance for all your hardware and software needs.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We also specialize in server setup and maintenance, ensuring your business infrastructure is robust and efficient. Trust us for comprehensive IT solutions that scale with your growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
              
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((slide, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>

            <button
              aria-label="Previous slide"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md backdrop-blur transition"
            >
              <span className="text-xl">‹</span>
            </button>
            <button
              aria-label="Next slide"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md backdrop-blur transition"
            >
              <span className="text-xl">›</span>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => goToSlide(idx)}
                  className={`${idx === currentIndex ? 'bg-white' : 'bg-white/60'} w-2.5 h-2.5 rounded-full shadow`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;