// app/admin/components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Restaurant Admin Dashboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
}