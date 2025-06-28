// app/privacy-policy/page.jsx
"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiShield, FiUser, FiMail, FiCreditCard } from 'react-icons/fi';
import { FaCookieBite } from "react-icons/fa6";


const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FiShield className="w-5 h-5 mr-2 text-amber-600" />,
      content: `At Savory Delights, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our restaurant website or use our services.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: <FiUser className="w-5 h-5 mr-2 text-amber-600" />,
      content: `We may collect personal information that you voluntarily provide to us when you:
      - Make a reservation
      - Sign up for our newsletter
      - Participate in promotions
      - Contact us with inquiries
      
      The types of personal information we collect may include:
      - Your name
      - Contact information (email, phone number)
      - Reservation details
      - Payment information (processed securely through third-party services)
      - Dietary preferences or restrictions
      
      We also collect non-personal information automatically through cookies and similar technologies when you interact with our website.`
    },
    {
      id: 'use-of-information',
      title: 'How We Use Your Information',
      icon: <FiMail className="w-5 h-5 mr-2 text-amber-600" />,
      content: `We use the information we collect for various purposes, including:
      - Processing and managing your reservations
      - Providing personalized dining experiences
      - Sending promotional offers and newsletters (with your consent)
      - Responding to your inquiries and feedback
      - Improving our website and services
      - Analyzing usage trends and preferences
      
      We will never sell your personal information to third parties.`
    },
    {
      id: 'payment-security',
      title: 'Payment Security',
      icon: <FiCreditCard className="w-5 h-5 mr-2 text-amber-600" />,
      content: `For online payments and gift card purchases, we use trusted third-party payment processors that comply with PCI-DSS standards. Savory Delights does not store your full credit card information on our servers. All payment transactions are encrypted using SSL technology.`
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      icon: <FaCookieBite className="w-5 h-5 mr-2 text-amber-600" />,
      content: `Our website uses cookies and similar tracking technologies to:
      - Remember your preferences
      - Analyze website traffic
      - Personalize content
      
      You can control cookies through your browser settings. Disabling cookies may affect your experience on our website. We also use Google Analytics to collect anonymous usage data.`
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Disclosure',
      content: `We may share your information with:
      - Service providers who assist with reservations and marketing
      - Legal authorities when required by law
      - Business partners for joint promotions (with your consent)
      
      We require all third parties to respect your privacy and comply with data protection laws.`
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: `We retain your personal information only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, we retain reservation data for 3 years and marketing preferences until you unsubscribe.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: `You have rights regarding your personal information, including:
      - Access to the information we hold about you
      - Correction of inaccurate information
      - Deletion of your personal data
      - Objection to certain processing activities
      - Withdrawal of consent at any time
      
      To exercise these rights, please contact us at privacy@savorydelights.com.`
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website with an updated effective date. We encourage you to review this policy periodically.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
      - Email: privacy@savorydelights.com
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
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At Savory Delights, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full mr-4">
                <FiShield className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Privacy Matters</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We handle your information with care and transparency
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
                      {section.icon || <FiShield className="w-5 h-5 mr-2 text-amber-600" />}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
            <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2">Data Protection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We implement industry-standard security measures to protect your information from unauthorized access.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
            <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2">Your Control</h3>
            <p className="text-gray-600 dark:text-gray-300">
              You have the right to access, correct, or delete your personal information at any time.
            </p>
          </div>
          <div className="bg-amber-50 dark:bg-gray-700 rounded-xl p-6 border border-amber-100 dark:border-gray-600">
            <h3 className="font-bold text-lg text-amber-900 dark:text-amber-200 mb-2">Transparency</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We clearly explain how we use your data and will notify you of any significant changes.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
              Have Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how we protect your information and respect your privacy rights.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:privacy@savorydelights.com" 
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-center font-medium transition-colors"
              >
                Email Our Privacy Team
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-white dark:bg-gray-700 border border-amber-600 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-gray-600 rounded-lg text-center font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2025 Savory Delights Restaurant. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/" className="text-amber-600 dark:text-amber-400 hover:underline">Home</Link> • 
            <Link href="/privacy-policy" className="text-amber-600 dark:text-amber-400 hover:underline mx-2">Privacy Policy</Link> • 
            <Link href="/terms-conditions" className="text-amber-600 dark:text-amber-400 hover:underline">Terms of Service</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;