import rootAPI from "@/core/redux/apis/services/api.service";
import {
  IWishlistItem,
  IProductsResponse,
  IProductDetailsResponse,
} from "../types/product.type";
import {
  GetProductsRequestType,
  GetProductDetailsRequestType,
  AddToWishlistRequestType,
  RemoveFromWishlistRequestType,
  GetWishlistItemsRequestType,
  GetPreviouslyViewedItemsRequestType,
  TrackViewRequestType,
} from "../types/productRequestPayload.type";
import { getProductsAPIRoute, getProductDetailsAPIRoute, addToWishlistAPIRoute, removeFromWishlistAPIRoute, getWishlistItemsAPIRoute, getPreviouslyViewedAPIRoute, trackProductViewAPIRoute } from "@/core/redux/apis/api_routes";



const productsAPI = rootAPI.injectEndpoints({
  overrideExisting: false,

  endpoints: (builder) => ({
    // Get all products with filters
    getProducts: builder.query<IProductsResponse, GetProductsRequestType>({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.page) params.append("page", filters.page.toString());
        if (filters.limit) params.append("limit", filters.limit.toString());
        if (filters.category) params.append("category", filters.category);
        if (filters.minPrice)
          params.append("minPrice", filters.minPrice.toString());
        if (filters.maxPrice)
          params.append("maxPrice", filters.maxPrice.toString());
        if (filters.rating) params.append("rating", filters.rating.toString());
        if (filters.search) params.append("search", filters.search);
        if (filters.sortBy) params.append("sortBy", filters.sortBy);
        if (filters.order) params.append("order", filters.order);

        return {
          url: `${getProductsAPIRoute}?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Products"],
    }),

    // Get product details
    getProductDetails: builder.query<
      IProductDetailsResponse,
      GetProductDetailsRequestType
    >({
      query: (request) => ({
        url: getProductDetailsAPIRoute.replace(":productId", request.productId),
        method: "GET",
      }),
      providesTags: (result, error, arg) => [
        { type: "Products", id: arg.productId },
      ],
    }),

    // Add to wishlist
    addToWishlist: builder.mutation<IWishlistItem, AddToWishlistRequestType>({
      query: (addToWishlistData) => ({
        url: addToWishlistAPIRoute,
        method: "POST",
        body: addToWishlistData,
      }),
      invalidatesTags: ["Wishlist"],
      transformResponse: (response: { data: IWishlistItem }) => {
        return response.data;
      },
    }),

    // Remove from wishlist
    removeFromWishlist: builder.mutation<void, RemoveFromWishlistRequestType>({
      query: (removeFromWishlistData) => ({
        url: removeFromWishlistAPIRoute,
        method: "POST",
        body: removeFromWishlistData,
      }),
      invalidatesTags: ["Wishlist"],
    }),

    // Get wishlist items
    getWishlistItems: builder.query<
      IProductsResponse,
      GetWishlistItemsRequestType
    >({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.page) params.append("page", filters.page.toString());
        if (filters.limit) params.append("limit", filters.limit.toString());

        return {
          url: `${getWishlistItemsAPIRoute}?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Wishlist"],
    }),

    // Get previously viewed items
    getPreviouslyViewedItems: builder.query<
      IProductsResponse,
      GetPreviouslyViewedItemsRequestType
    >({
      query: (filters) => {
        const params = new URLSearchParams();
        if (filters.page) params.append("page", filters.page.toString());
        if (filters.limit) params.append("limit", filters.limit.toString());

        return {
          url: `${getPreviouslyViewedAPIRoute}?${params.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["PreviouslyViewed"],
    }),

    // Track product view
    trackProductView: builder.mutation<void, TrackViewRequestType>({
      query: (trackViewData) => ({
        url: trackProductViewAPIRoute,
        method: "POST",
        body: trackViewData,
      }),
      invalidatesTags: ["PreviouslyViewed"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useGetWishlistItemsQuery,
  useGetPreviouslyViewedItemsQuery,
  useTrackProductViewMutation,
} = productsAPI;

export default productsAPI;
