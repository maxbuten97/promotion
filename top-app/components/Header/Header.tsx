import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Icon from "../IconComponent/Icon";
const PATH = "/image/";

const Header = () => {
  return (
    <section className={s.Header}>
      <div className={s.row}>
        <div className={s.image_wrap}>
          <Image
            src={`${PATH}logo.png`}
            alt={"Логотип"}
            width={182}
            height={44}
          />
        </div>
        <div className={s.callback_block}>
          <div className={s.tel}>
            <Link href="/">+7 (918) 142-48-44</Link>
          </div>
          <div className={s.callback_btn}>
            <Button color="secondary">
              <Icon name="tel" />
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
            <Button color="secondary" auto ghost>
              ЛИЧНЫЙ КАБИНЕТ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
