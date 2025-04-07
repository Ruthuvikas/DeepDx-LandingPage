import React from 'react';
import { Brain, Clock, Guitar as Hospital, Activity, ChevronRight, Shield, Database, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white">DeepDx</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-blue-200">Features</a>
              <a href="#how-it-works" className="text-white hover:text-blue-200">How it Works</a>
              <a href="#benefits" className="text-white hover:text-blue-200">Benefits</a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                AI-Powered Medical Diagnostics for Healthcare Professionals
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Transform weeks of waiting into minutes of clarity with our advanced AI diagnostic platform.
              </p>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=80" 
                alt="Medical Analysis"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Why Choose DeepDx?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Rapid Results</h3>
              <p className="mt-2 text-gray-600">Get diagnostic insights in minutes instead of weeks</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">AI Expertise</h3>
              <p className="mt-2 text-gray-600">Powered by advanced Mixture of Experts AI technology for accurate diagnostics</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">HIPAA Compliant</h3>
              <p className="mt-2 text-gray-600">Your health data is protected with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            How DeepDx Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Upload Reports</h3>
              <p className="mt-2 text-gray-600">Submit your medical reports and tests</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">AI Analysis</h3>
              <p className="mt-2 text-gray-600">Multiple AI experts analyze your data</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Get Results</h3>
              <p className="mt-2 text-gray-600">Receive comprehensive diagnostic insights</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white p-6 rounded-full shadow-lg">
                <Hospital className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Take Action</h3>
              <p className="mt-2 text-gray-600">Share results with your healthcare provider</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Transforming Healthcare Diagnostics
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Higher Accuracy</h3>
                    <p className="text-gray-600">Multiple AI models work together to ensure precise diagnostics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Save Time</h3>
                    <p className="text-gray-600">Reduce diagnostic wait times from months to minutes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Secure & Private</h3>
                    <p className="text-gray-600">Enterprise-grade security and HIPAA compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=2400&q=80" 
                alt="Healthcare Professional"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Brain className="h-8 w-8" />
                <span className="ml-2 text-2xl font-bold">DeepDx</span>
              </div>
              <p className="mt-4 text-gray-400 max-w-sm">
                Revolutionizing medical diagnostics with AI-powered technology for faster, more accurate results.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How it Works</a></li>
                  <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#careers" className="text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#terms" className="text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#security" className="text-gray-400 hover:text-white">Security</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DeepDx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;