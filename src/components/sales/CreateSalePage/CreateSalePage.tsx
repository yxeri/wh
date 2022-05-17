import React from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

import ProductSelect from './ProductSelect';
import BasePage from '../../BasePage/BasePage';
import { useCreateSaleMutation } from '../../../services/sales';

const StyledSubmit = styled.button`
  border-width: 1px;
  border-radius: .2em;
  border-color: black;
  background-color: transparent;
`;

export default function CreateSalePage() {
  const formMethods = useForm();
  const [createSale] = useCreateSaleMutation();

  const onSubmit: SubmitHandler<any> = async ({ product }: { product: number }) => {
    await createSale({
      productId: product,
      amountSold: 1,
    });
  };

  return (
    <BasePage>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <ProductSelect />
          <StyledSubmit type="submit">Register sale</StyledSubmit>
        </form>
      </FormProvider>
    </BasePage>
  );
}
