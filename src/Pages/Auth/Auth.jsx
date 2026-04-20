import React, { useState } from "react";
import {
  PageWrapper,
  Card,
  Brand,
  TabRow,
  Tab,
  FormBody,
  FieldGroup,
  Label,
  InputWrapper,
  StyledInput,
  EyeBtn,
  InlineError,
  SubmitBtn,
  SwitchText,
  PasswordStrength,
  StrengthBar,
} from "./AuthStyled";
import userService from "../../services/userService";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../components/Schemas/signupSchema";
import { signinSchema } from "../../components/Schemas/signinSchema";

/* ── password strength helper ── */
const getStrength = (pwd = "") => {
  if (!pwd) return 0;
  let score = 0;
  if (pwd.length >= 8) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score;
};

const strengthLabel = ["", "Fraca", "Razoável", "Boa", "Forte"];
const strengthColor = ["", "#ef4444", "#f97316", "#eab308", "#22c55e"];

/* ── Field component ── */
const Field = ({ label, name, type = "text", register, error, watch }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const value = watch ? watch(name) ?? "" : "";
  const strength = isPassword && name === "password" ? getStrength(value) : 0;

  return (
    <FieldGroup>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper hasError={!!error}>
        <StyledInput
          id={name}
          type={isPassword && show ? "text" : type}
          autoComplete={isPassword ? "current-password" : "off"}
          {...register(name)}
        />
        {isPassword && (
          <EyeBtn type="button" onClick={() => setShow((s) => !s)} tabIndex={-1}>
            <i className={`bi bi-eye${show ? "-slash" : ""}`} />
          </EyeBtn>
        )}
      </InputWrapper>
      {isPassword && name === "password" && value && (
        <PasswordStrength>
          {[1, 2, 3, 4].map((i) => (
            <StrengthBar key={i} active={i <= strength} color={strengthColor[strength]} />
          ))}
          <span style={{ color: strengthColor[strength], fontSize: "0.72rem" }}>
            {strengthLabel[strength]}
          </span>
        </PasswordStrength>
      )}
      {error && <InlineError>{error.message}</InlineError>}
    </FieldGroup>
  );
};

/* ── Main component ── */
const Auth = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("signin");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const signin = useForm({ resolver: zodResolver(signinSchema) });
  const signup = useForm({ resolver: zodResolver(signupSchema) });

  const inHandleSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    try {
      const response = await userService.signin(data);
      Cookies.set("token", response.data?.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      setServerError("Email ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  const upHandleSubmit = async (data) => {
    setLoading(true);
    setServerError("");
    try {
      const response = await userService.signup(data);
      Cookies.set("token", response.data?.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      setServerError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Brand>
          <span>Benguela</span>Post
        </Brand>

        <TabRow>
          <Tab active={tab === "signin"} onClick={() => { setTab("signin"); setServerError(""); }}>
            Entrar
          </Tab>
          <Tab active={tab === "signup"} onClick={() => { setTab("signup"); setServerError(""); }}>
            Criar conta
          </Tab>
        </TabRow>

        {/* ── SIGNIN ── */}
        {tab === "signin" && (
          <FormBody onSubmit={signin.handleSubmit(inHandleSubmit)}>
            <Field label="Email" name="email" type="text" register={signin.register} error={signin.formState.errors.email} />
            <Field label="Senha" name="password" type="password" register={signin.register} error={signin.formState.errors.password} watch={signin.watch} />
            {serverError && <InlineError center>{serverError}</InlineError>}
            <SubmitBtn type="submit" disabled={loading}>
              {loading ? <i className="bi bi-arrow-repeat spin" /> : "Entrar"}
            </SubmitBtn>
            <SwitchText>
              Ainda não tem conta?{" "}
              <button type="button" onClick={() => setTab("signup")}>Criar agora</button>
            </SwitchText>
          </FormBody>
        )}

        {/* ── SIGNUP ── */}
        {tab === "signup" && (
          <FormBody onSubmit={signup.handleSubmit(upHandleSubmit)}>
            <Field label="Nome completo" name="name" type="text" register={signup.register} error={signup.formState.errors.name} />
            <Field label="Email" name="email" type="text" register={signup.register} error={signup.formState.errors.email} />
            <Field label="Senha" name="password" type="password" register={signup.register} error={signup.formState.errors.password} watch={signup.watch} />
            <Field label="Confirmar senha" name="confirm_password" type="password" register={signup.register} error={signup.formState.errors.confirm_password} />
            {serverError && <InlineError center>{serverError}</InlineError>}
            <SubmitBtn type="submit" disabled={loading}>
              {loading ? <i className="bi bi-arrow-repeat spin" /> : "Criar conta"}
            </SubmitBtn>
            <SwitchText>
              Já tem conta?{" "}
              <button type="button" onClick={() => setTab("signin")}>Entrar</button>
            </SwitchText>
          </FormBody>
        )}
      </Card>
    </PageWrapper>
  );
};

export default Auth;