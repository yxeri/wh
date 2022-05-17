import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import { selectAvailableProducts } from '../../../services/products';

const StyledProductSelect = styled.select`
  min-width: 10em;
`;

export default function ProductSelect() {
  const { register } = useFormContext();
  const products = useSelector(selectAvailableProducts);

  const options = products
    .map((product) => <option key={product.id} value={product.id}>{product.name}</option>);

  return (
    <StyledProductSelect required {...register('product')}>
      {
        products.length > 0
          ? options
          : <option>No products in stock</option>
      }
    </StyledProductSelect>
  );
}
