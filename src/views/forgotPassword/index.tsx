// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/base/button";
import Input from "src/components/base/input";
import style from "./style.module.scss";
import { validator } from "./validator";
import Errortext from "src/components/base/errorText";
type loginInputs = {
  email: string;
  password: string;
};
const ForgotPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginInputs>();
  const onsubmit: SubmitHandler<loginInputs> = (data) => {
    console.log(data);
  };
  return (
    <form className={style.loginform}>
      <div className={style.formGroup}>
        <Input
          register={register("email", validator.email)}
          id="email"
          label="Email"
          placeholder="Enter Your Email"
        ></Input>
        {errors?.email && <Errortext>{errors.email.message}</Errortext>}
      </div>
      <div className={style["login-action"]}>
        <Button
          variant="contained"
          color="blue"
          onClick={handleSubmit(onsubmit)}
        >
          Send Reset Instructions
        </Button>
      </div>
    </form>
  );
};

export default ForgotPage;
