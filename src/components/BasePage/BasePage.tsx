import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const StyledMain = styled.main`
  padding: .2em;
`;

export default function BasePage({ children }: { children: ReactNode }) {
  return (
    <>
      <Menu />
      <StyledMain>
        {children}
      </StyledMain>
    </>
  );
}
