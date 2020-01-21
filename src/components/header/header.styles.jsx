import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: #3d56b6;
  color: white !important;
  border:none
`;

export const LogoContainer = styled(Link)`
  width: auto !important;
  background-color: #FBC02D !important;
  padding: 0px 10px;
  font-size: 28px;
  color: #333333;
  position: relative !important;
  margin-left: 0px !important;
  left: 0 !important;
`;
