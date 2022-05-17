import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectArticleById } from '../../../services/articles';

const StyledArticleRow = styled.li`
  p {
    margin: 0;
    padding: 0;
  }
`;

export default function ArticleRow({ articleId, amount }: { articleId: string, amount: number }) {
  // @ts-ignore
  const article = useSelector((state) => selectArticleById(state, articleId));

  return (
    <StyledArticleRow>
      <p>{article?.name}</p>
      <p>
        x
        {amount}
      </p>
    </StyledArticleRow>
  );
}
