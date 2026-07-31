import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/user/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("Password reset successful");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div style={{ width: "300px", margin: "100px auto" }}>
      <h2>Reset Password</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button type="submit" style={{ width: "100%", padding: "10px" }}>
          Reset Password
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;

