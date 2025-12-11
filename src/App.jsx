`jsx
import React, { useState, useEffect } from 'react';
import { Download, MapPin, Phone, Mail, Instagram, Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/
 * App.jsx - English-only version with "Gallery" instead of "Our Projects"
 * Requirements:
 * - Place /public/catalog.pdf
 * - Place slider and gallery images in /public/images/
 * - Install dependencies: react, react-dom, framer-motion, lucide-react
 * - Optional: Tailwind CSS for styling used in classes
 */

/ Mock data for products, news and gallery (use local images in /public/images/) /
const mockProducts = [
  {
    id: 1,
    name: "Surgical Packs",
    description: "Modular and customizable surgical packs meeting diverse hospital needs"
  },
  {
    id: 2,
    name: "Hospital Gowns",
    description: "Comfortable and hygienic gowns for patients and staff"
  },
  {
    id: 3,
    name: "Specialized Drapes",
    description: "Sterile drapes for various surgical procedures"
  },
  {
    id: 4,
    name: "Medical Garments",
    description: "Protective clothing for healthcare professionals"
  }
];

const mockNews = [
  {
    id: 1,
    title: "New ISO Certification",
    excerpt: "Achieved latest ISO 13485:2016 certification for quality management"
  },
  {
    id: 2,
    title: "Medical Textile Innovations",
    excerpt: "Exploring sustainable materials for next-generation medical textiles"
  }
];

const mockGallery = [
  { id: 1, title: "Shiraz Medical Center", image: "/images/gallery-1.jpg" },
  { id: 2, title: "Tehran General Hospital", image: "/images/gallery-2.jpg" },
  { id: 3, title: "Isfahan Clinic Network", image: "/images/gallery-3.jpg" },
  { id: 4, title: "Production Line", image: "/images/gallery-4.jpg" },
  { id: 5, title: "Quality Control Lab", image: "/images/gallery-5.jpg" },
  { id: 6, title: "Packaging Area", image: "/images/gallery-6.jpg" }
];

const sliderContent = [
  {
    title: "Premium Medical Textiles",
    desc: "EN 13795 & ISO 13485 certified products"
  },
  {
    title: "Custom Surgical Solutions",
    desc: "Tailored packs for your specific needs"
  },
  {
    title: "Quality & Innovation",
    desc: "Advanced manufacturing processes"
  }
];

const sliderColors = ['#1e3a8a', '#0f172a', '#0c4a6e'];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [sliderIndex, setSliderIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Slider auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex(prev => (prev + 1) % sliderContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formState.name.trim()) errors.name = 'Name is required';
    if (!formState.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formState.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, send data to a server here
      console.log('Form submitted:', formState);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const texts = {
    nav: ['Home', 'About Us', 'Products', 'Services', 'News & Articles', 'Contact Us'],
    downloadCatalog: 'Download Company Catalog',
    slogan: 'Caspian Teb Nedaye Salamat Pars – Leading in Medical Textiles and Hospital Garments',
    intro: 'With over a decade of experience in producing surgical packs, gowns, and drapes, we deliver products compliant with international standards EN 13795 and ISO 13485.',
    aboutText: 'Caspian Teb Nedaye Salamat Pars focuses on innovation, quality, and customization in medical textile production. Our team of experts in design, manufacturing, and quality control aims to enhance safety and comfort for patients and healthcare professionals.',
    servicesList: [
      'Professional consultation for product selection',
      'Customization of packs and garments based on client requirements',
      'Support and training for proper product usage'
    ],
    newsTitle: 'Latest News & Articles',
    contactTitle: 'Get in Touch',
    address: '302 st, Pazhohesh Blvd, 5th Square, Industrial City, Shiraz, Iran',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    nameLabel: 'Name',
    emailLabelInput: 'Email',
    messageLabel: 'Message',
    submit: 'Send Message',
    submitted: 'Message sent successfully!',
    galleryTitle: 'Gallery'
  };

  const pageTransitions = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 }
  };

  const renderSlider = () => (
    <div className="relative h-[70vh] max-h-[700px] overflow-hidden">
      {sliderContent.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          style={{
            backgroundColor: sliderColors[index],
            backgroundImage: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/slider-${index + 1}.jpg'),
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: sliderIndex === index ? 1 : 0,
            zIndex: sliderIndex === index ? 10 : 0
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start text-white">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: sliderIndex === index ? 1 : 0 }}
              transition={{ delay: 0.2 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: sliderIndex === index ? 1 : 0 }}
              transition={{ delay: 0.4 }}
            >
              {slide.desc}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: sliderIndex === index ? 1 : 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/catalog.pdf"
                download
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center transition duration-300 transform hover:scale-105"
              >
                <Download className="ml-2" size={20} />
                {texts.downloadCatalog}
              </a>
            </motion.div>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderContent.map((_, index) => (
          <button
            key={index}
            className={w-3 h-3 rounded-full ${sliderIndex === index ? 'bg-white' : 'bg-white/50'}}
            onClick={() => setSliderIndex(index)}
            aria-label={Slide ${index + 1}}
          />
        ))}
      </div>
    </div>
  );

  const renderHeader = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-blue-900 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">CT</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold mr-3 text-gray-800">Caspian Teb Nedaye Salamat Pars</h1>
          </div>

          {/ Desktop Navigation /}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['home', 'about', 'products', 'services', 'news', 'contact'].map((page, idx) => (
                <li key={page}>
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={font-medium text-lg transition-colors ${currentPage === page ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-700 hover:text-blue-600'}}
                  >
                    {texts.nav[idx]}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/ Mobile menu button /}
          <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/ Mobile Navigation /}
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden pb-4">
            <ul className="space-y-4 mt-4">
              {['home', 'about', 'products', 'services', 'news', 'contact'].map((page, idx) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      setCurrentPage(page);
                      setMenuOpen(false);
                    }}
                    className={block w-full text-left py-2 px-4 font-medium text-lg rounded-lg transition-colors ${currentPage === page ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}}
                  >
                    {texts.nav[idx]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );

  const renderHomePage = () => (
    <motion.div {...pageTransitions}>
      {renderSlider()}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{texts.slogan}</h2>
            <p className="text-lg text-gray-600 mb-8">{texts.intro}</p>
            <a href="/catalog.pdf" download className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300 transform hover:scale-105">
              <Download className="ml-2" size={20} />
              {texts.downloadCatalog}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{texts.galleryTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockGallery.map(item => (
              <div key={item.id} className="rounded-xl overflow-hidden shadow-md">
                <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );

  const renderAboutPage = () => (
    <motion.div {...pageTransitions} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{texts.aboutText}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-700">All our products are manufactured and tested under international standards.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-green-900 mb-3">Research & Development</h3>
              <p className="text-gray-700">Our R&D team is dedicated to innovation in medical textiles.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderProductsPage = () => (
    <motion.div {...pageTransitions} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Products</h1>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <a href="/catalog.pdf" download className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition duration-300 transform hover:scale-105">
            <Download className="ml-2" size={20} />
            {texts.downloadCatalog}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockProducts.map(product => (
            <div key={product.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">EN 13795 Standard</span>
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Customizable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderServicesPage = () => (
    <motion.div {...pageTransitions} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Services</h1>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {texts.servicesList.map((service, index) => (
              <li key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-2 mr-4 mt-1">
                    <Send size={20} />
                  </div>
                  <p className="text-lg text-gray-700">{service}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const renderNewsPage = () => (
    <motion.div {...pageTransitions} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{texts.newsTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mockNews.map(news => (
            <div key={news.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-2xl">Article</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContactPage = () => (
    <motion.div {...pageTransitions} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">{texts.contactTitle}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/ Contact Form /}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">{texts.submitted}</div>
                <button onClick={() => setIsSubmitted(false)} className="text-blue-600 hover:underline">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">{texts.nameLabel}</label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent}
                    placeholder="Your name"
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">{texts.emailLabelInput}</label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent}
                    placeholder="Your email"
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">{texts.messageLabel}</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent}
                    placeholder="Your message"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                  {texts.submit}
                </button>

                <p className="text-sm text-gray-500 text-center mt-2">Your messages are processed with complete security</p>
              </form>
            )}
          </div>

          {/ Contact Information /}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-blue-600 mt-1" size={24} />
                <div className="mr-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">{texts.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-600 mt-1" size={24} />
                <div className="mr-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{texts.phoneLabel}</h3>
                  <p className="text-gray-700">+98 912 917 9078</p>
                  <p className="text-gray-700">+98 917 600 5690</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-blue-600 mt-1" size={24} />
                <div className="mr-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{texts.emailLabel}</h3>
                  <p className="text-gray-700">Caspian.tebs@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex space-x-4">
                  <a href="https://instagram.com/caspiantebmed" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition-colors">
                    <Instagram size={28} />
                  </a>
                  <a href="https://t.me/CaspianTebpars" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 transition-colors">
                    <span className="text-2xl">📱</span>
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-gray-100 rounded-xl overflow-hidden h-64">
                <iframe
                  title="Caspian Teb Location"
                  src="https://www.google.com/maps?q=302%20st%20Pazhohesh%20Blvd%205th%20Square%20Industrial%20city%20Shiraz%20Iran&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-3 text-sm">
                <a href="https://share.google/sSnGSFSsvYx0pOdsZ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderFooter = () => (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-700 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">CT</span>
              </div>
              <h3 className="text-xl font-bold mr-3">Caspian Teb</h3>
            </div>
            <p className="text-gray-400 mb-4">Leading manufacturer of medical textiles in Iran</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/caspiantebmed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://t.me/CaspianTebpars" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-xl">📱</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {mockProducts.slice(0, 3).map(product => (
                <li key={product.id}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{product.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {texts.servicesList.slice(0, 2).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="text-blue-400 mt-1 mr-2" size={18} />
                <span className="text-gray-400">{texts.address}</span>
              </li>
              <li className="flex">
                <Phone className="text-blue-400 mt-1 mr-2" size={18} />
                <span className="text-gray-400">+98 912 917 9078</span>
              </li>
              <li className="flex">
                <Mail className="text-blue-400 mt-1 mr-2" size={18} />
                <span className="text-gray-400">Caspian.tebs@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Caspian Teb Nedaye Salamat Pars. All rights reserved</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {renderHeader()}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && renderHomePage()}
          {currentPage === 'about' && renderAboutPage()}
          {currentPage === 'products' && renderProductsPage()}
          {currentPage === 'services' && renderServicesPage()}
          {currentPage === 'news' && renderNewsPage()}
          {currentPage === 'contact' && renderContactPage()}
        </AnimatePresence>
      </main>
      {renderFooter()}
    </div>
  );
};

export default App;
`
