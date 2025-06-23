"use client";

import Footer from "~/components/Footer";
import { getProducts } from "../_actions/products";
import CallToAction from "./_components/CallToAction";
import Categories from "./_components/Categories";
import Favorites from "./_components/Favorites";
import FinalCallToAction from "./_components/FinalCallToAction";
import { Hero } from "./_components/Hero";
import StickyScroll from "./_components/StickyScroll";
import { useEffect } from "react";

export default function Page() {
  const getProductsFromShopify = async () => {
    const products = await getProducts();
    console.log(products.body);
  };

  useEffect(() => {
    getProductsFromShopify()
      .then((products) => {
        console.log("🚀 ~ .then ~ products:", products);
      })
      .catch((error) =>
        console.error("Error fetching products from Shopify:", error),
      );
  }, []);

  return (
    <div className="overflow-hidden bg-white dark:bg-zinc-900">
      <Hero />

      <StickyScroll />
      <main>
        {/* Category section */}
        <Categories />

        {/* Featured section */}
        <CallToAction />

        {/* Favorites section */}
        <Favorites />

        {/* CTA section */}
        <FinalCallToAction />
      </main>

      <Footer />
    </div>
  );
}
