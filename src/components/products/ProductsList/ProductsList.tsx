import React from 'react';
import StyledList from '../../common/StyledList';

import ProductRow from './ProductRow';
import { useGetProductsQuery } from '../../../services/products';

export default function ProductsList() {
  const { data: products } = useGetProductsQuery();

  const rows = (products || [])
    .map((product) => (<ProductRow key={product.id} product={product} />));

  return (<StyledList>{rows}</StyledList>);
}
