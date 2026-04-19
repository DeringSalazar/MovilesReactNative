
export interface ProductSummary {
  category_slug: string;
  category_name: string;
  subcategory_code: string;
  subcategory_name: string;
  product_id: string;
  product_name: string;
  pdf_page: string;
  product_image: string | string[] | null; // Puede ser un string, un array de strings o null
}


export interface ProductDetail {
  product_id: string;
  product_name: string;
  category_name: string;
  subcategory_code: string;
  subcategory_name: string;
  pdf_page: string;
  features?: string[] | null;
  applications?: string[] | null;
  images?: string[] | null;
}


export interface UseProductsReturn {
  products: ProductSummary[];
  selectedProduct: ProductDetail | null;
  loading: boolean;
  loadingDetail: boolean;
  error: string | null;
  fetchProductById: (id: string) => Promise<void>;
  clearSelectedProduct: () => void;
}