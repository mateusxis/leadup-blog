import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const SContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const SError = styled.div`
  display: flex;
  flex-direction: line;
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.form`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
`;

export const SPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 50px 60px 70px 60px;
  align-items: center;
  justify-content: space-between;
  height: 303px;
  width: 222px;
`;
