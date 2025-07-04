import React from "react";
import { Link } from "react-router-dom";

const ResistorPage = () => {
  return (
    <div className="auth-wrapper">
      <div style={{ textAlign: "center" }}>
        <h3>ResistorPage</h3>
      </div>
      <form>
        <label htmlFor="email">Email </label>
        <input type="email" type="email" id="email" />

        <label htmlFor="name">Name </label>
        <input type="name" type="name" id="name" />

        <label htmlFor="password">Password </label>
        <input type="password" type="password" id="password" />

				<input type="submit" disabled />

        <Link to={"/"} style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면 ...
        </Link>
      </form>
    </div>
  );
};

export default ResistorPage;
