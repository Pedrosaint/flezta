import rootAPI from "@/core/redux/apis/services/api.service";
import ICartItem from "../types/cart.type";
import { addToCartAPIRoute, removeFromCartAPIRoute, updateCartAPIRoute } from "@/core/redux/apis/api_routes";
import { IAddToCartRequesPayload, RemoveFromCartRequestType, UpdateCartRequestType } from "../types/cartRequestPayload.type";

const cartAPI = rootAPI.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    // Add to cart API
    addToCart: builder.mutation<ICartItem, IAddToCartRequesPayload>({
      query: (addToCartData) => ({
        url: addToCartAPIRoute,
        method: "POST",
        body: addToCartData,
      }),
      invalidatesTags: ["Cart"],
      transformResponse: (response: { data: ICartItem }) => {
        return response.data;
      },
    }),

    // Remove from cart API
    removeFromCart: builder.mutation<ICartItem, RemoveFromCartRequestType>({
      query: (removeFromCartData) => ({
        url: removeFromCartAPIRoute,
        method: "POST",
        body: removeFromCartData,
      }),
      invalidatesTags: ["Cart"],
      transformResponse: (response: { data: ICartItem }) => {
        return response.data;
      },
    }),

    // Update cart API
    updateCart: builder.mutation<ICartItem, UpdateCartRequestType>({
      query: (updateCartData) => ({
        url: updateCartAPIRoute,
        method: "POST",
        body: updateCartData,
      }),
      invalidatesTags: ["Cart"],
      transformResponse: (response: { data: ICartItem }) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} = cartAPI;

export default cartAPI;