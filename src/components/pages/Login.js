import React, { useState, useContext } from "react";
import {
  FloatingLabel,
  Form,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { EcomContext } from "../store/EcomContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

 const [isLogin, setIsLogin] = useState(true);
 const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { loginHandler } = useContext(EcomContext);
  const navigate = useNavigate();

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

let url;
if (isLogin) {
  url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKKGdUt1ko9J_bH7wRVmAd_NouIG_rbcw";
} else {
  url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKKGdUt1ko9J_bH7wRVmAd_NouIG_rbcw";
}

    try {
      const response = await fetch(url,
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }

      const data = await response.json();
      //console.log(data)
      loginHandler(data.idToken);
      navigate("/store");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
          <Form onSubmit={submitHandler}>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEnteredEmail(e.target.value)}
                required
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setEnteredPassword(e.target.value)}
                required
              />
            </FloatingLabel>
            <div className="d-grid mt-3">
              {!loading && (
                <Button
                  variant={isLogin ? "primary" : "success"}
                  type="submit"
                  disabled={loading}
                >
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              )}
              {loading && <p>Loading...</p>}
              <Button
                variant={isLogin ? "warning" : "info"}
                type="button"
                onClick={switchModeHandler}
                className="mt-2"
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </Button>
            </div>
            {error && <p className="text-danger mt-2">{error}</p>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
