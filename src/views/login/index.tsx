// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/base/button";
import Input from "src/components/base/input";
import style from "./style.module.scss";
import { validator } from "./validator";
import { Link } from "react-router-dom";
import Errortext from "src/components/base/error-text";

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onsubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={style.loginform} onSubmit={handleSubmit(onsubmit)}>
      <div className={style.formGroup}>
        <Input
          register={register("email", validator.email)}
          id="email"
          label="Email"
          placeholder="Enter Your Email"
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
