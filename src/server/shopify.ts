/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { env } from "~/env";

export const postToShopify = async ({ query, variables = {} }) => {
  try {
    const result = await fetch(env.SHOPIFY_STORE_DOMAIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": env.SHOPIFY_STOREFRONT_API_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    }).then((res) => res.json());

    if (result?.errors) {
      console.log({ errors: result?.errors });
      return "Error fetching products from Shopify: ";
    } else if (!result?.data) {
      console.log({ result });
      return "No results found.";
    } else if (!result) {
      return "No results found.";
    }

    return result.data;
  } catch (error) {
    console.log(error);
    return "Error fetching products from Shopify: ";
  }
};
