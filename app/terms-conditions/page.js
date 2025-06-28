// app/terms-and-conditions/page.jsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiBook, FiCoffee, FiDollarSign, FiAlertCircle, FiCalendar, FiLock, FiUser } from 'react-icons/fi';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FiBook className="w-5 h-5 mr-2 text-amber-600" />,
      content: `Welcome to Savory Delights! These Terms and Conditions govern your use of our website, mobile applications, and services related to restaurant reservations, online orders, and other offerings. By accessing or using our services, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our services.`
    },
    {
      id: 'reservations',
      title: 'Reservation Policies',
      icon: <FiCalendar className="w-5 h-5 mr-2 text-amber-600" />,
      content: `1. Booking Reservations:
      - Reservations can be made online, via phone, or through our mobile app
      - We require a valid credit card to hold reservations for parties of 6 or more
      - Please notify us of any special requests at the time of booking
      
      2. Cancellation Policy:
      - For parties of 1-5: Cancel at least 2 hours before your reservation time
      - For parties of 6 or more: Cancel at least 24 hours in advance
      - Late cancellations or no-shows may be charged $25 per person
      
      3. Arrival Time:
      - Please arrive 5-10 minutes before your reservation time
      - We hold tables for 15 minutes beyond the reservation time before releasing them`
    },
    {
      id: 'online-orders',
      title: 'Online Ordering',
      icon: <FiCoffee className="w-5 h-5 mr-2 text-amber-600" />,
      content: `1. Placing Orders:
      - Orders can be placed for pickup or delivery (where available)
      - All orders must be placed at least 1 hour before closing time
      
      2. Payment:
      - Full payment is required at the time of ordering
      - We accept all major credit cards and digital wallets
      
      3. Modifications & Cancellations:
      - Order changes must be made at least 30 minutes before preparation time
      - Cancellations within 30 minutes of order placement may incur a 50% charge
      
      4. Food Allergies:
      - Please inform us of any allergies or dietary restrictions when ordering
      - While we take precautions, we cannot guarantee allergen-free preparation`
    },
    {
      id: 'pricing',
      title: 'Pricing and Payments',
      icon: <FiDollarSign className="w-5 h-5 mr-2 text-amber-600" />,
      content: `1. Menu Prices:
      - Prices are subject to change without notice
      - Menu items may vary by location and season
      - Taxes and service charges are additional
      
      2. Payment Methods:
      - We accept Visa, Mastercard, American Express, and Discover
      - Digital payments through Apple Pay and Google Pay
      - Gift cards can be used for payment
      
      3. Service Charges:
      - Parties of 8 or more will have an 18% service charge added
      - Delivery orders have a $3 service fee`
    },
    {
      id: 'conduct',
      title: 'Customer Conduct',
      icon: <FiUser className="w-5 h-5 mr-2 text-amber-600" />,
      content: `We strive to provide an exceptional dining experience for all guests. To ensure a pleasant environment:
      
      - Proper attire is required (no swimwear or bare feet)
      - We reserve the right to refuse service to anyone
      - Disruptive behavior may result in removal from the premises
      - Smoking is not permitted except in designated areas
      - Children must be supervised at all times
      
      We reserve the right to terminate services to any customer who violates these conduct standards.`
    },
    {
      id: 'liability',
      title: 'Liability and Disclaimers',
      icon: <FiAlertCircle className="w-5 h-5 mr-2 text-amber-600" />,
      content: `1. Food Safety:
      - While we maintain the highest food safety standards, consumption of raw or undercooked foods may increase your risk of foodborne illness
      
      2. Property Damage:
      - Customers are responsible for any damage they cause to restaurant property
      
      3. Personal Belongings:
      - We are not liable for lost or stolen personal items
      
      4. Limitation of Liability:
      - Savory Delights shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services`
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      content: `All content on our website and mobile applications, including:
      - Logos and branding
      - Menu designs and descriptions
      - Website content and photography
      - Mobile application interfaces
      
      are the exclusive property of Savory Delights or its licensors and are protected by copyright and trademark laws. You may not use, reproduce, or distribute any content without our express written permission.`
    },
    {
      id: 'privacy',
      title: 'Privacy',
      icon: <FiLock className="w-5 h-5 mr-2 text-amber-600" />,
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.`
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: `These Terms and Conditions are governed by the laws of the state where our restaurant is located, without regard to its conflict of law principles. Any disputes arising from these terms shall be resolved in the state or federal courts located in our restaurant's jurisdiction.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `For questions about these Terms and Conditions, please contact us:
      - Email: terms@savorydelights.com
      - Phone: (555) 123-4567
      - Mail: Savory Delights Restaurant, 123 Gourmet Avenue, Culinary City, CC 12345
      
      Last Updated: June 26, 2025`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-200 mb-4">
            Terms and Conditions
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Please read these terms carefully before using our services. These terms govern your relationship with Savory Delights Restaurant.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full mr-4">
                <FiBook className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Agreement With Us</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Understanding these terms helps ensure a great experience for everyone
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {sections.map((section) => (
                <div 
                  key={section.id} 
                  className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between p-4 text-left ${
                      activeSection === section.id 
                        ? 'bg-amber-50 dark:bg-gray-700' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    } transition-colors`}
                  >
                    <div className="flex items-center">
                      {section.icon || <FiBook className="w-5 h-5 mr-2 text-amber-600" />}
                      <span className="font-medium text-gray-800 dark:text-white">
                        {section.title}
                      </span>
                    </div>
                    {activeSection === section.id ? (
                      <FiChevronUp className="w-5 h-5 text-amber-600" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 text-amber-600" />
                    )}
                  </button>
                  
                  {activeSection === section.id && (
                    <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
            <div className="flex items-start">
              <FiAlertCircle className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2">Important Notice</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We reserve the right to refuse service to anyone who violates our terms or disrupts the dining experience of other guests. Management decisions are final.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
            <div className="flex items-start">
              <FiCalendar className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2">Reservation Reminder</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Please review our cancellation policy carefully. Late cancellations affect our ability to serve other guests and may result in charges to your account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Need Help Understanding Our Terms?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Our team is available to clarify any aspect of our terms and conditions or address your concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:terms@savorydelights.com" 
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Email Our Team
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-white dark:bg-gray-700 border border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-600 rounded-lg text-center font-medium transition-colors"
              >
                Contact Form
              </a>
              <a 
                href="tel:5551234567" 
                className="px-6 py-3 bg-white dark:bg-gray-700 border border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-600 rounded-lg text-center font-medium transition-colors"
              >
                Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 Savory Delights Restaurant. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="text-amber-600 dark:text-amber-400 hover:underline">Home</Link> • 
            <Link href="/privacy-policy" className="text-amber-600 dark:text-amber-400 hover:underline mx-2">Privacy Policy</Link> • 
            <Link href="/terms-and-conditions" className="text-amber-600 dark:text-amber-400 hover:underline">Terms and Conditions</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;