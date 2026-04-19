// hooks/useProducts.ts
import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import type {
  ProductDetail,
  ProductSummary,
  UseProductsReturn,
} from '../types/products';

const BASE_URL = 'https://api-moviles-lilac.vercel.app'; 

export function useProducts(category: string): UseProductsReturn {
  const [products, setProducts] = useState<ProductSummary[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDetail, setLoadingDetail] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  
  useEffect(() => {
    let cancelled = false;

    const fetchAll = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `${BASE_URL}/${category}`;

        const { data } = await axios.get<ProductSummary[]>(url);

        if (!cancelled) {
          setProducts(data);
        }
      } catch (err) {
        if (!cancelled) {
          const axiosErr = err as AxiosError;
          setError(axiosErr.message ?? 'Error al cargar productos');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchAll();
    return () => {
      cancelled = true;
    };
  }, [category]);

  // GET BY ID — se llama manualmente al abrir el modal
  const fetchProductById = useCallback(async (id: string) => {
    setLoadingDetail(true);
    setError(null);
    try {
      const url = `${BASE_URL}/${category}/${id}`;

      const { data } = await axios.get<ProductDetail>(url);

      setSelectedProduct(data);
    } catch (err) {
      const axiosErr = err as AxiosError;
      setError(axiosErr.message ?? 'Error al cargar el producto');
    } finally {
      setLoadingDetail(false);
    }
  }, [category]);

  const clearSelectedProduct = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return {
    products,
    selectedProduct,
    loading,
    loadingDetail,
    error,
    fetchProductById,
    clearSelectedProduct,
  };
}