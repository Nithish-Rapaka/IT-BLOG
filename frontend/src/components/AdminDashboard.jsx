import React from 'react';
import theoryimg from '../assets/Theory.png';
import Labs from '../assets/Labs.png';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // clear login state
    navigate('/login'); // redirect to login
  };

  return (
    <div>
      {/* Logout button */}
      <div className="flex justify-end p-4 bg-gray-100">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md transition"
        >
          Logout
        </button>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={theoryimg}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Theoretical Knowledge
              </h2>
              <p className="leading-relaxed text-base">
                Theoretical knowledge helps practical work smarter, safer, and more innovative.
              </p>
              <Link to="/AdminTheory">
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Add PDF
                </button>
              </Link>
            </div>

            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Labs}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Practical Knowledge
              </h2>
              <p className="leading-relaxed text-base">
                Practical knowledge is the hands-on expertise gained through real-world application.
              </p>
              <Link to="/AdminLab">
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Add PDF
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
