import React from "react";
import { AuthContainer, Section } from "./AuthStyled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Auth = () => {
  const inRegister = () => {};

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>

        <form action="">
          <Input
            type="text"
            placeholder={"Email"}
            name={"email"}
            register={inRegister}
          />
          <Input
            type="password"
            placeholder={"Senha"}
            name={"password"}
            register={inRegister}
          />

          <Button text={"Entrar"} type={"submit"} />
        </form>
      </Section>
      <Section type="signup">
        <h2>Criar conta</h2>

        <form action="">
          <Input
            type="text"
            placeholder={"Nome"}
            name={"name"}
            register={inRegister}
          />
          <Input
            type="text"
            placeholder={"Email"}
            name={"email"}
            register={inRegister}
          />
          <Input
            type="password"
            placeholder={"Senha"}
            name={"password"}
            register={inRegister}
          />
          <Input
            type="password"
            placeholder={"Confirmar senha"}
            name={"confirm_password"}
            register={inRegister}
          />
          <Button text={"Cadastrar"} type={"submit"} />
        </form>
      </Section>
    </AuthContainer>
  );
};

export default Auth;
