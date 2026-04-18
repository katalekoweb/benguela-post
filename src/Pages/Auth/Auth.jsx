import React from "react";
import { AuthContainer, Section } from "./AuthStyled";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../components/Schemas/signupSchema";
import { signinSchema } from "../../components/Schemas/signinSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import userService from "../../services/userService"
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {

  const navigate = useNavigate()

  const { register: signupRegister, handleSubmit: handleSignupSubmit, reset: resetSignUp, formState: {errors: signupErrors } } = useForm({
    resolver: zodResolver(signupSchema)
  })

  const { register: loginRegister, handleSubmit: handleSubmitLogin, reset: resetLogin, formState: {errors: loginErrors} } = useForm({
    resolver: zodResolver(signinSchema)
  })

  const inHandlesubmit = (data) => {
    console.log(data);    
  }

  const upHandlesubmit = async (data) => {
      try {
        const response = await userService.signup(data)    
        Cookies.set("token", response.data?.token, { expires: 1 })  
        navigate("/")
      } catch (error) {
        console.log(error);        
      }
  }

  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>

        <form onSubmit={handleSubmitLogin(inHandlesubmit)}>
          <Input
            type="text"
            placeholder={"Email"}
            name={"email"}
            register={loginRegister}
          />
          {loginErrors?.email && <ErrorSpan>{loginErrors?.email?.message}</ErrorSpan> }
          <Input
            type="password"
            placeholder={"Senha"}
            name={"password"}
            register={loginRegister}
          />

          {loginErrors?.password && <ErrorSpan>{loginErrors?.password?.message}</ErrorSpan> }

          <Button text={"Entrar"} type={"submit"} />
        </form>
      </Section>
      <Section type="signup">
        <h2>Criar conta</h2>

        <form onSubmit={handleSignupSubmit(upHandlesubmit)}>
          <Input
            type="text"
            placeholder={"Nome"}
            name={"name"}
            register={signupRegister}
          />

          {signupErrors?.name && <ErrorSpan>{signupErrors?.name?.message}</ErrorSpan> }

          <Input
            type="text"
            placeholder={"Email"}
            name={"email"}
            register={signupRegister}
          />

          {signupErrors?.email && <ErrorSpan>{signupErrors?.email?.message}</ErrorSpan> }

          <Input
            type="password"
            placeholder={"Senha"}
            name={"password"}
            register={signupRegister}
          />

          {signupErrors?.password && <ErrorSpan>{signupErrors?.password?.message}</ErrorSpan> }

          <Input
            type="password"
            placeholder={"Confirmar senha"}
            name={"confirm_password"}
            register={signupRegister}
          />

          {signupErrors?.confirm_password && <ErrorSpan>{signupErrors?.confirm_password?.message}</ErrorSpan> }

          <Button text={"Cadastrar"} type={"submit"} />
        </form>
      </Section>
    </AuthContainer>
  );
};

export default Auth;
