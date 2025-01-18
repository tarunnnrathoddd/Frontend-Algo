import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import LineGraph from "../components/LineGraph";

const Home = () => {
  return (
    
    <div className="bg-gray-900 text-white min-h-screen py-8 px-10">
      {/* Hero Section */}
      <section className=" text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Largest Trade Marketplace</h1>
        <p className="text-xl mb-6">
          Welcome to the world's largest AlgoTrade marketplace. Sign up to
          explore more about Trading.
        </p>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Search for Stocks</h2>
          <input
            type="text"
            placeholder="Search for stocks..."
            className="w-full sm:w-1/2 md:w-1/3 mx-auto p-3 border border-gray-600 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8">
        {/* <LineGraph /> */}
        <h2 className="text-2xl font-bold text-center mb-6">Stock Stats</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Example stats, you can dynamically add them */}
          <Link to="/stocks/google">
            
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Tesla</p>
              <p className="text-lg text-indigo-400">$ 1,234,567,890</p>
            </div>
          </Link>

          <Link to="/stocks/google">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Google</p>
              <p className="text-lg text-indigo-400">+2.34%</p>
            </div>
          </Link>

          <Link to="/stocks/google">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Microsoft</p>
              <p className="text-lg text-indigo-400">100,000,000</p>
            </div>
          </Link>

          <Link to="/stocks/google">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Meta</p>
              <p className="text-lg text-indigo-400">$ 567,890,123</p>
            </div>
          </Link>

          <Link to="/stocks/google">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Apple</p>
              <p className="text-lg text-indigo-400">+5.23%</p>
            </div>
          </Link>

          <Link to="/stocks/nvidia">
            <div className="text-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-xl font-semibold">Nvidia</p>
              <p className="text-lg text-indigo-400">100,000,000</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
