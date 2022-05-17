import React from 'react';

import StyledList from '../../common/StyledList';
import ArticleRow from './ArticleRow';
import { ProductArticle } from '../../../services/products';

export default function ArticlesList({ articles = [] }: { articles: Array<ProductArticle> }) {
  const rows = articles
    .map((article) => (
      <ArticleRow
        key={article.id}
        articleId={article.id}
        amount={article.amountRequired}
      />
    ));

  return (
    <StyledList>
      {rows}
    </StyledList>
  );
}
