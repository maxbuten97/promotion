"use client";
import { NextUIProvider } from "@nextui-org/react";
import s from "./page.module.scss";
import Header from "../../components/Header/Header";
function MyApp() {
  return (
    <div>
      <div className={s.container}>
        <Header />
      </div>
    </div>
  );
}

export default MyApp;
