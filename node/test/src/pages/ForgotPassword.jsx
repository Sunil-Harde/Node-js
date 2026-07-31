
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/user/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("Reset link sent to your email");
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Forgot Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Send Reset Link
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
