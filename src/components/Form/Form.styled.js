import { styled } from 'styled-components';
import { ErrorMessage as FormikError } from 'formik';

export const Wrapper = styled.div`
  max-width: 200px;
`;
export const ErrorMessage = styled(FormikError)`
  color: red;
`;
