import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app, { db } from "../../firebase";
import md5 from "md5";

const ResistorPage = () => {
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
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(createdUser);

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });

      set(ref(db, `users/${createdUser.user.uid}`), {
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });
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
        <h3>ResistorPage</h3>
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

        <label htmlFor="name">Name </label>
        <input
          type="name"
          type="name"
          id="name"
          {...register("name", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>This name field is required </p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>Your input exceed maxinum length</p>
        )}

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

        <Link to={"/"} style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면 ...
        </Link>
      </form>
    </div>
  );
};

export default ResistorPage;
