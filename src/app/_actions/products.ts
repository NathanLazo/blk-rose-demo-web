"use server";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { env } from "~/env";

export async function getProducts({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}) {
  const endpoint = env.SHOPIFY_STORE_DOMAIN;
  const key = env.PRIVATE_STOREFRONT_API_KEY;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
