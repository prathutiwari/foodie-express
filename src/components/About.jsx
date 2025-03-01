const About = () => {
     return (
          <div className="flex flex-col items-center justify-start bg-white text-gray-900 px-6 mt-10">
               <div className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-4 text-orange-500">🍽️ Welcome to FoodieExpress!</h1>
                    <p className="text-lg text-gray-700 mb-6">
                         Discover the best restaurants in **Kanpur**, browse live menus, and order your favorite meals with ease!
                    </p>

                    <div className="bg-gray-100 shadow-lg rounded-lg p-6 mb-6">
                         <h2 className="text-2xl font-semibold mb-3 text-green-500">🚀 Feature of WebApp</h2>
                         <ul className="text-gray-700 text-left">
                              <li className="mb-2">✅ **Live Restaurant Listings** – Browse real-time menus of top restaurants.</li>
                              <li className="mb-2">✅ **Easy Cart Management** – Add, remove, or clear items effortlessly.</li>
                              <li className="mb-2">✅ **Smooth Checkout Process** – Hassle-free payments & fast delivery.</li>
                              <li className="mb-2">✅ **Lightning Fast UI** – Powered by **React & Redux** for a seamless experience.</li>
                         </ul>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                         <div className="bg-gray-100 shadow-md rounded-lg p-4 w-60">
                              <h3 className="text-lg font-semibold text-blue-500">🍕 Browse Restaurants</h3>
                              <p className="text-gray-600 text-sm">Explore menus & real-time availability.</p>
                         </div>
                         <div className="bg-gray-100 shadow-md rounded-lg p-4 w-60">
                              <h3 className="text-lg font-semibold text-red-500">🛒 Manage Your Cart</h3>
                              <p className="text-gray-600 text-sm">Add or remove items with ease.</p>
                         </div>
                         <div className="bg-gray-100 shadow-md rounded-lg p-4 w-60">
                              <h3 className="text-lg font-semibold text-yellow-500">🚚 Fast Delivery</h3>
                              <p className="text-gray-600 text-sm">Enjoy hot meals at your doorstep.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;
