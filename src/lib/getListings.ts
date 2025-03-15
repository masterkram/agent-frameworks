import { getCollection } from "astro:content";

export async function getListings() {
  return await getCollection("directory");
}
