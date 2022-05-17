import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { useGetArticlesQuery } from './services/articles';
import { useGetProductsQuery } from './services/products';
import ProductsPage from './components/products/ProductsPage/ProductsPage';
import CreateSalePage from './components/sales/CreateSalePage/CreateSalePage';

const StyledApp = styled.div`
  font-family: sans-serif;
  
  a {
    color: inherit;
    text-decoration: inherit;
  }
  
  a:hover {
    color: aquamarine;
  }
`;

function App() {
  const articlesQuery = useGetArticlesQuery();
  const productsQuery = useGetProductsQuery();

  return (
    <StyledApp>
      {
        articlesQuery.isSuccess && productsQuery.isSuccess
          ? (
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="/newSale" element={<CreateSalePage />} />
            </Routes>
          )
          : <span>Loading...</span>
      }
    </StyledApp>
  );
}

export default App;
