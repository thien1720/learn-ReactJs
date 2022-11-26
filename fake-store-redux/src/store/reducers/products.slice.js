// import { createSlice } from "@reduxjs/toolkit";

// const initialState = { loading: false, list: [] };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     startFetch(state) {
//       state.loading = true;
//     },
//     save(state, action) {
//       const { payload } = action;
//       state.loading = false;
//       state.list = payload;
//     }
//   }
// });

// export const { startFetch, save } = productsSlice.actions;

// export const fetchProducts = () => (dispatch) => {
//   dispatch(save([]));
//   dispatch(startFetch());
  
//   fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json())
//   .then(products => dispatch(save(products)))
  
// };


// export default productsSlice.reducer;
