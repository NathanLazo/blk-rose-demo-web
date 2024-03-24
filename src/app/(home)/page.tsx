"use client";

import Footer from "~/components/Footer";
import { getProducts } from "../_actions/products";
import CallToAction from "./_components/CallToAction";
import Categories from "./_components/Categories";
import Favorites from "./_components/Favorites";
import FinalCallToAction from "./_components/FinalCallToAction";
import { Hero } from "./_components/Hero";
import StickyScroll from "./_components/StickyScroll";

export default function Page() {
  const handleGetProducts = async () => {
    const response = await getProducts({
      query: `
        query {
          products(first: 10) {
            edges {
              node {
                id
                title
                handle
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
    console.log(response);
  };

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
