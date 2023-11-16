// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/base/button";
import Input from "src/components/base/input";
import style from "./style.module.scss";
import { validator } from "./validator";
import { Link } from "react-router-dom";
import Errortext from "src/components/base/error-text";
import user from "./user.json";
import { showToast } from "src/utils/showToast";
import { useNavigate } from "react-router-dom";
interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onsubmit: SubmitHandler<LoginInputs> = (data) => {
    const userData = user.find((item) => item.email === data.email);
    if (userData?.password === data.password) {
      showToast("Login Succsessful", "success");
      sessionStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } else {
      showToast("Email or password is incorrect", "error");
    }
  };

  return (
    <form className={style.loginform} onSubmit={handleSubmit(onsubmit)}>
      <div className={style.formGroup}>
        <Input
          register={register("email", validator.email)}
          id="email"
          label="Email"
          placeholder="Enter Your Email"
          error={errors?.email}
        />
        {errors?.email && <Errortext>{errors.email.message}</Errortext>}
      </div>
      <div className={style.formGroup}>
        <Input
          register={register("password", validator.password)}
          id="password"
          label="Password"
          placeholder="Enter Your Password"
          type="password"
          error={errors?.password}
        />
        {errors?.password && <Errortext>{errors.password.message}</Errortext>}
      </div>
      <div className={style["login-action"]}>
        <Button variant="contained" color="blue" type="submit">
          Sign in
        </Button>
        <Link
          to="/forgotpassword"
          className={style["login-action__forgotPswd"]}
        >
          Forget password?
        </Link>
      </div>
    </form>
  );
};

export default LoginPage;
