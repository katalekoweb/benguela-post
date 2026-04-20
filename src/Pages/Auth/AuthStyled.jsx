import styled, { css, keyframes } from "styled-components";

const PRIMARY = "#EE4017";
const PRIMARY_DARK = "#c73310";
const PRIMARY_LIGHT = "rgba(238, 64, 23, 0.08)";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* ── Page ── */
export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  background-image: radial-gradient(circle at 20% 20%, rgba(238,64,23,0.06) 0%, transparent 60%),
                    radial-gradient(circle at 80% 80%, rgba(238,64,23,0.04) 0%, transparent 60%);
  padding: 1.5rem;
  font-family: 'Georgia', serif;
`;

/* ── Card ── */
export const Card = styled.div`
  background: #fff;
  border: 1px solid #f0ece9;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 4px 40px rgba(238, 64, 23, 0.07), 0 1px 4px rgba(0,0,0,0.06);
  animation: ${fadeUp} 0.4s ease both;

  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
    border-radius: 14px;
  }
`;

/* ── Brand ── */
export const Brand = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2rem;

  span {
    color: ${PRIMARY};
    font-weight: 800;
  }
`;

/* ── Tabs ── */
export const TabRow = styled.div`
  display: flex;
  border-bottom: 2px solid #f0ece9;
  margin-bottom: 1.75rem;
`;

export const Tab = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 0.65rem 0;
  font-size: 0.9375rem;
  font-family: inherit;
  cursor: pointer;
  color: ${({ active }) => (active ? PRIMARY : "#888")};
  font-weight: ${({ active }) => (active ? "700" : "400")};
  border-bottom: 2.5px solid ${({ active }) => (active ? PRIMARY : "transparent")};
  margin-bottom: -2px;
  transition: all 0.2s;

  &:hover {
    color: ${PRIMARY};
  }
`;

/* ── Form ── */
export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  animation: ${fadeUp} 0.3s ease both;
`;

/* ── Field ── */
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const Label = styled.label`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #444;
  letter-spacing: 0.02em;
  font-family: 'Arial', sans-serif;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1.5px solid ${({ hasError }) => (hasError ? "#ef4444" : "#e8e2de")};
  border-radius: 10px;
  background: #fdfcfb;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus-within {
    border-color: ${({ hasError }) => (hasError ? "#ef4444" : PRIMARY)};
    box-shadow: 0 0 0 3px ${({ hasError }) => (hasError ? "rgba(239,68,68,0.1)" : PRIMARY_LIGHT)};
    background: #fff;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 0.75rem 0.9rem;
  font-size: 0.9375rem;
  font-family: 'Arial', sans-serif;
  color: #1a1a1a;
  outline: none;
  width: 100%;

  &::placeholder {
    color: #bbb;
  }

  /* Remove autofill background */
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #fdfcfb inset;
  }
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  padding: 0 0.75rem;
  cursor: pointer;
  color: #aaa;
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: color 0.15s;

  &:hover { color: ${PRIMARY}; }
`;

/* ── Password strength ── */
export const PasswordStrength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.2rem;
`;

export const StrengthBar = styled.div`
  height: 3px;
  flex: 1;
  border-radius: 99px;
  background: ${({ active, color }) => (active ? color : "#eee")};
  transition: background 0.3s;
`;

/* ── Errors ── */
export const InlineError = styled.span`
  font-size: 0.78rem;
  color: #ef4444;
  font-family: 'Arial', sans-serif;
  display: block;
  ${({ center }) => center && css`text-align: center; margin-top: 0.25rem;`}
`;

/* ── Submit button ── */
export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.9375rem;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  letter-spacing: 0.03em;
  margin-top: 0.25rem;
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(238, 64, 23, 0.25);

  &:hover:not(:disabled) {
    background: ${PRIMARY_DARK};
    box-shadow: 0 4px 20px rgba(238, 64, 23, 0.35);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  /* spinner icon */
  .spin {
    display: inline-block;
    animation: ${spin} 0.7s linear infinite;
  }
`;

/* ── Switch text ── */
export const SwitchText = styled.p`
  text-align: center;
  font-size: 0.8125rem;
  color: #888;
  font-family: 'Arial', sans-serif;
  margin-top: 0.25rem;

  button {
    background: none;
    border: none;
    color: ${PRIMARY};
    font-weight: 700;
    cursor: pointer;
    font-size: inherit;
    padding: 0;

    &:hover { text-decoration: underline; }
  }
`;