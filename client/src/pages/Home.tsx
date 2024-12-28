import React from 'react';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Trade Carbon Credits, Offset Your Emissions, Secure Your Future
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the global movement towards a sustainable future with EcoSwape's revolutionary carbon credit trading platform.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/trade"
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            View Markets
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">Quick and secure signup process with KYC verification</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Credits</h3>
              <p className="text-gray-600">Browse verified carbon credits from global projects</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trade & Monitor</h3>
              <p className="text-gray-600">Make trades and track your environmental impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Carbon Credits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Amazon Rainforest Conservation',
                price: 25.50,
                change: '+2.3%',
                positive: true
              },
              {
                name: 'Wind Farm Project India',
                price: 18.75,
                change: '-1.2%',
                positive: false
              },
              {
                name: 'Solar Energy Kenya',
                price: 22.30,
                change: '+4.1%',
                positive: true
              }
            ].map((credit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold mb-2">{credit.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${credit.price}</span>
                  <span className={credit.positive ? 'text-green-600' : 'text-red-600'}>
                    {credit.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/trade"
              className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center"
            >
              See All Markets <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;