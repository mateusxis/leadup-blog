import styled from "styled-components";

import { Paper } from "@material-ui/core";

export const SContainer = styled(Paper)`
  position: fixed;
  z-index: 100;
  top: 20%;
  display: relative;
`;

export const SShadow = styled.div`
  background-color: rgba(45, 45, 45, 0.7);
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
