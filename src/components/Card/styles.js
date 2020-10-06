import styled from "styled-components";
import { Button, Paper, Typography } from "@material-ui/core";

export const SButton = styled(Button)``;

export const SCard = styled(Paper)`
  width: 300px;
  height: 465px;
  border: 1px solid #00dcb7;
  padding: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const STypography = styled(Typography)`
  margin-top: 10px !important;
`;

export const SContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-between;
  align-items: center;
`;
