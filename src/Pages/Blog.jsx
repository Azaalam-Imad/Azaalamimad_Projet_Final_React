import React from "react";
import { Link } from "react-router-dom";
import Images from '../constants/Images';
import { motion } from "motion/react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Black Friday Guide: Best Sales & Discount Codes",
      image: "blog1",
    },
    {
      id: 2,
      title: "The White Sneakers Nearly Every Fashion Girls Own",
      image: "blog2",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Boxy7 T-Shirt with Roll Sleeve",
      price: 20.0,
      image: "shopy1",
    },
    {
      id: 2,
      name: "Boxy6 T-Shirt with Roll Sleeve",
      price: 20.0,
      image: "shopy2",
    },
    {
      id: 3,
      name: "Boxy5 T-Shirt with Roll Sleeve",
      price: 20.0,
      image: "shopy3",
    },
    {
      id: 4,
      name: "Boxy4 T-Shirt with Roll Sleeve",
      price: 20.0,
      image: "shopy4",
    },
    {
      id: 5,
      name: "Boxy3 T-Shirt with Roll Sleeve",
      price: 30.0,
      image: "shopy5",
    },
  ];

  const blogTags = ["Crafts", "Streetstyle"];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[300px] bg-black">
        <img
          alt="Blog Banner"
          src={Images.carousel3}
          className="object-cover w-full h-full opacity-50"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white font-bold text-5xl">Blog</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <section className="lg:w-2/3">
            {blogPosts.map((post, index) => (
              <article key={post.id} className="mb-16">
                <div className="mb-6 overflow-hidden">
                  <img
                    alt={post.title}
                    src={Images[post.image]}
                    className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {index === 0 ? (
                  <>
                    <h2 className="mb-2 text-3xl font-bold hover:text-red-500 transition-colors">
                      <p>{post.title}</p>
                    </h2>
                    <div className="text-sm text-gray-500 mb-3">
                      by{" "}
                      <span className="font-semibold">fashe-theme Admin</span> |{" "}
                      <span className="capitalize">crafts, street style</span> | 1
                      Comments
                    </div>
                    <p className="mb-6 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Etiam sed turpis sed lorem dignissim vulputate nec cursus
                      ante. Nunc sit...
                    </p>
                    <p className="inline-block text-gray-800 hover:text-red-500 transition-colors">
                      Continue Reading
                    </p>
                  </>
                ) : index === 1 ? (
                  <>
                    <h2 className="mb-2 text-3xl font-bold hover:text-red-500 transition-colors">
                      <p>{post.title}</p>
                    </h2>
                    <div className="text-sm text-gray-500 mb-3">
                      by{" "}
                      <span className="font-semibold">fashe-theme Admin</span> |{" "}
                      <span className="capitalize">crafts, street style</span> | 0
                      Comments
                    </div>
                    <p className="mb-6 text-gray-700">
                      Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                      pellentesque mattis augue id euismod. Inter-dum et malesuada
                      fames
                    </p>
                    <p className="inline-block text-gray-800 hover:text-red-500 transition-colors">
                      Continue Reading
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-gray-500 text-sm mb-3">
                      {post.date} <span className="mx-2">|</span> {post.category}
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold hover:text-red-500 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p className="mb-6 text-gray-600">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-block text-gray-800 hover:text-red-500 transition-colors"
                    >
                      Continue Reading →
                    </Link>
                  </>
                )}
              </article>
            ))}
          </section>

          <aside className="lg:w-1/3">
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2">
                  <i className="fas fa-search text-gray-400"></i>
                </button>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="mb-6 text-lg font-semibold">Featured Products</h3>
              <div className="space-y-4">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="flex gap-4">
                    <Link
                      to={`/shop/${product.id}`}
                      className="flex-shrink-0 w-20 h-20"
                    >
                      <img
                        src={Images[product.image]}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                    </Link>
                    <div>
                      <h4 className="text-sm hover:text-red-500 transition-colors">
                        <Link to={`/ProductDetailPage/${product.id}`}>{product.name}</Link>
                      </h4>
                      <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">Tags Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {blogTags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 text-sm bg-gray-100 rounded text-gray-600 hover:bg-red-500 hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Blog;
