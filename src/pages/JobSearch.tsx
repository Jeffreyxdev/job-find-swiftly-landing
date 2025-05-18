
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const JobSearch = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Job Search</h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under construction. Check back soon for our job search functionality!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobSearch;
