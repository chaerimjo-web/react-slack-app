import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const LoginPage = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [errorFromSubmit, setErrorFromSubmit] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //훅 폼에 제공되는 handleSubmit이 있음 -> onSubmit을 따로 만든다
  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.error(error);
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
          })}
          //유효성 통화하지 못하면 errors 실행 => errors true
        />
        {errors.email && <p>This email field is required </p>}

        <label htmlFor="password">Password </label>
        <input
          type="password"
          type="password"
          id="password"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This password field is required </p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password must have at least 6 characters</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />

        <Link
          to={"/register"}
          style={{ color: "gray", textDecoration: "none" }}
        >
          아이디가 없다면 ...
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
