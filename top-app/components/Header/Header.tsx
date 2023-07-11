import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";

const PATH = "/image/";

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.row}>
        <Image
          src={`${PATH}logo.png`}
          alt={"Логотип"}
          width={182}
          height={44}
        />
      </div>
    </div>
  );
};

export default Header;
