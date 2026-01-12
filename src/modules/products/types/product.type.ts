export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images?: string[];
  category: string;
  inStock: boolean;
  quantity?: number;
  sku: string;
  specifications?: Record<string, string>;
  createdAt: string;
  updatedAt: string;
}

export interface IWishlistItem extends IProduct {
  addedToWishlistAt: string;
}

export interface IPreviouslyViewedItem extends IProduct {
  viewedAt: string;
}

export interface IProductFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  inStock?: boolean;
  search?: string;
}

export interface IProductsResponse {
  data: IProduct[];
  total: number;
  page: number;
  limit: number;
}

export interface IProductDetailsResponse {
  data: IProduct;
}
