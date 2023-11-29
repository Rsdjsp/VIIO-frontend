import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { get } from "@/axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/Products",
  async () => {
    const response = get("/api/products");
    const body = (await response).data;
    return body;
  }
);

interface ProductsState {
  products: any[];
  carousel: any[];
  room: any[];
  shopBy: any[];
  recommended: any[];
  loading: boolean;
  error: string;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: "",
  carousel: [],
  room: [],
  shopBy: [],
  recommended: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.carousel = action.payload.slice(0, 5);
        state.room = action.payload.slice(6, 10);
        state.shopBy = action.payload.slice(11, 14);
        state.recommended = action.payload.slice(15, 20);
        state.loading = false;
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = `Error fetching products: ${action.error.message}`;
      });
  },
});

export const getProducts = (state: RootState) => state.productsSlice;

export default productsSlice.reducer;
