import { ReactNode, useEffect } from "react";
import { Button } from "src/components/base/button";
import logo from "/logo.png";
import "./styles.scss";
import "./responsive.scss";
import { Outlet, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  type: string;
}

const AuthLayout = ({ type }: Props) => {
  const navigate = useNavigate();
  // tải ảnh trước
  useEffect(() => {
    const image1 = new Image();
    const image2 = new Image();
    image1.src = "/register.png";
    image2.src = "/login.png";
  }, []);

  const handleNavigate = () => {
    const url = type !== "login" ? "/login" : "/register";
    navigate(url);
  };

  return (
    <div className="login-container">
      <div
        className="left-login"
        style={
          type !== "login"
            ? {
                backgroundImage: `url("register.png")`,
                minHeight: "110%",
              }
            : {
                backgroundImage: `url("/login.png")`,
              }
        }
      >
        <img onClick={() => navigate("/")} className="logo-login" src={logo} />
        <div className="left-login__title">
          <p>We Offer the Best Products</p>
        </div>
      </div>
      <div className="right-login">
        <div className="right-wrap-logo">
          <img
            onClick={() => navigate("/")}
            className="logo-right"
            src={logo}
          />
          <div className="singUp_action">
            <span>
              {type !== "login" ? "Already a member?" : "Not a member?"}
            </span>
            <Button color="red" variant="contained" onClick={handleNavigate}>
              {type !== "login" ? "Sign In" : "Sign Up Now"}
            </Button>
          </div>
        </div>
        <div className="login-form">
          <h2>
            {type === "login"
              ? "Sign in to EShop."
              : type === "register"
              ? "I'm New Here"
              : "Forgot Password?"}
          </h2>
          <p className="detail">
            {type !== "forgotpassword"
              ? "Enter your detail below"
              : "Enter the email address you used when you joined and we’ll send you instructions to reset your password."}
          </p>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
