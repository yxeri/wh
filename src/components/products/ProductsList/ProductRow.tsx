import React from 'react';
import styled from 'styled-components';

import { Product } from '../../../services/products';
import ArticlesList from '../ArticlesList/ArticlesList';

const StyledProductRow = styled.li`
  h1 {
    padding: 0;
    margin: 0;
  }
`;

export default function ProductRow({ product }: { product: Product }) {
  const { articles = [] } = product;

  return (
    <StyledProductRow>
      <h1>{product.name}</h1>
      <ArticlesList articles={articles} />
    </StyledProductRow>
  );
}
