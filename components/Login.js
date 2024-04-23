import React, { useState } from "react";
import { Typography, TextField, Button, Box, Paper } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setIsLoggedIn(true);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome</h1>
          <p>You are now logged in</p>
        </div>
      ) : (
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
              required
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              required
            />
            <Box marginTop={2}>
              <Button
                variant="contained"
                sx={{ background: "#6c757d" }}
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Box>
          </form>
        </Paper>
      )}
    </Box>
  );
};

export default Login;
