import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";

import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import TextField from "../../components/TextField";
import { isAuthenticated, login } from "../../services/auth";

import { SContainer, SError, SForm, SPaper } from "./styles";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleOnChange = (field, setField) => {
    setField(field);
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || password === "") return setError(true);

    login(email);

    history.push("/home");
  };

  const ErrorMessage = () => {
    const plural = email === "" && password === "" ? "s" : "";

    return error ? (
      <Fragment>
        <SError>
          <Error color={"error"} fontSize={"small"} />
          <Typography variant={"body2"} gutterBottom color={"error"}>
            {`Preencha o${plural} campo${plural}
              ${email === "" ? " e-mail" : ""} 
              ${plural !== "" ? " e" : ""}
              ${password === "" ? " senha" : ""}`}
          </Typography>
        </SError>
      </Fragment>
    ) : null;
  };

  if (isAuthenticated()) {
    return <Redirect to={"/home"} />;
  }

  return (
    <SContainer maxWidth="lg">
      <SPaper square>
        <LogoIcon />
        <SForm onSubmit={handleSubmit}>
          <TextField
            label="E-mail"
            value={email}
            onChange={(event) => handleOnChange(event.target.value, setEmail)}
          />
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(event) =>
              handleOnChange(event.target.value, setPassword)
            }
          />
          <Button type="submit" variant="outlined" color="primary">
            Entrar
          </Button>
          <ErrorMessage />
        </SForm>
      </SPaper>
    </SContainer>
  );
};

export default Login;
