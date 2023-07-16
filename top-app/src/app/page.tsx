"use client";
import { NextUIProvider } from "@nextui-org/react";
import s from "./page.module.scss";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Home from "@/components/Home/Home";
import Footer from "@/components/Footer/Footer";
function MyApp() {
  return (
    <div className={s.MyApp}>
      <Header />
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default MyApp;
