export interface GetProductsRequestType {
  page?: number;
  limit?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

export interface GetProductDetailsRequestType {
  productId: string;
}

export interface AddToWishlistRequestType {
  productId: string;
}

export interface RemoveFromWishlistRequestType {
  productId: string;
}

export interface GetWishlistItemsRequestType {
  page?: number;
  limit?: number;
}

export interface GetPreviouslyViewedItemsRequestType {
  page?: number;
  limit?: number;
}

export interface TrackViewRequestType {
  productId: string;
}
