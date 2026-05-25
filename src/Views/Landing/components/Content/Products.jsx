import React from "react";
import CustomProductCard from "../../../../components/customcomponents/CustomProductCard";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Modern Watch",
      category: "Accessories",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "White Sneakers",
      category: "Fashion",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Leather Bag",
      category: "Bags",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Black Headphones",
      category: "Electronics",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },

    // New Products
    {
      id: 5,
      title: "Smart Phone",
      category: "Electronics",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Gaming Laptop",
      category: "Electronics",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1587202372775-98927b45a78b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Perfume Bottle",
      category: "Beauty",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Wrist Bracelet",
      category: "Accessories",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 9,
      title: "Sunglasses",
      category: "Fashion",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 px-6">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Trending Products
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Explore our latest premium collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <CustomProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
