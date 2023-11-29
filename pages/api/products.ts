import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      "https://serpapi.com/search.json?engine=home_depot&q=chair&api_key=15a1780233bffe321c04ec147040302f9bcd35cf02e12d5ef8d960a16c81fee7"
    );
      const products = response.data.products
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
}
