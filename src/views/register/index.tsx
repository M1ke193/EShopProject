// import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "src/components/base/button";
import Input from "src/components/base/input";
import style from "./style.module.scss";
import { validator } from "./validator";
import Errortext from "src/components/base/error-text";

interface registerInputs {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerInputs>();
  const onsubmit: SubmitHandler<registerInputs> = (data) => {
    console.log(data);
  };
  return (
    <form className={style.loginform}>
      <div className={style.formGroup}>
        <Input
          register={register("name", validator.name)}
          id="name"
          label="User Name"
          placeholder="Enter Your User Name"
          error={errors?.name}
        />
        {errors?.name && <Errortext>{errors.name.message}</Errortext>}
      </div>
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
        <Button
          color="blue"
          variant="contained"
          onClick={handleSubmit(onsubmit)}
        >
          Create Account
        </Button>
      </div>
    </form>
  );
};

export default RegisterPage;
