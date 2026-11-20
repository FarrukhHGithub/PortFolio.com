import React from "react";

export default function CustomError({ statusCode }) {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem", fontFamily: "sans-serif" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>Please try again or return to the homepage.</p>
    </div>
  );
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

