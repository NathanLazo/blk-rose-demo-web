"use server";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { postToShopify } from "~/server/shopify";

export async function getProducts() {
  try {
    const result = await await postToShopify({
      query: `
        query getProductList {
          products(sortKey: PRICE, first: 100, reverse: true) {
            edges {
              node {
                id
                handle
                description
                title
                totalInventory
                variants(first: 5) {
                  edges {
                    node {
                      id
                      title
                      quantityAvailable
                      priceV2 {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: {},
    });
    return {
      status: 200,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      body: result,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
