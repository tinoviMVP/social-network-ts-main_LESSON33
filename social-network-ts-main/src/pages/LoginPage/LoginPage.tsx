import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/Typography/Heading/Heading";
import { RegistrationInfo } from "../../components/RegistrationInfo/RegistrationInfo";
import { AppButton } from "../../components/UI/AppButton/AppButton";
import { AppInput } from "../../components/UI/AppInput/AppInput";


export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <Heading headingType="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput type= "text"
         hasError= {false}
         errorText= "Ошибка"
         required
         placeholder="Номер телефона"
         />
         <AppInput 
         type="password"
         hasError={false}
         errorText="Ошибка"
         required
         placeholder="Пароль"
         />
        <AppButton
         type="button"
         disabled={false} buttonLabel="Войти"
         />
        <input type="name" placeholder="Имя" />
        <input type="email" placeholder="Почта" />
        <input type="text" placeholder="Город" />
        <button>Войти</button>
      </form>
      <a href="#">Забыли пароль?</a>
      <RegistrationInfo />
    </div>
  );
};
