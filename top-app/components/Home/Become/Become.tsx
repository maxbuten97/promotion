"use client";
import Image from "next/image";
import s from "./Become.module.scss";
import { PATH } from "@/components/Header/Header";
import Icon from "@/components/IconComponent/Icon";
import { Button, Input, Link } from "@nextui-org/react";
const Become = () => {
  return (
    <div className={s.Become}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.iphone_block}>
            <Image
              className={s.image}
              src={`${PATH}iphone.png`}
              alt="iphone"
              width={429}
              height={488}
            />
            <div className={s.message_left}>
              <div className={s.chechmark}>
                <Icon name="checkmark" />
              </div>
              <div className={s.text}>
                Партнерское вознаграждение «АО Лека»{" "}
                <span className={s.fatty_text}>+20 000 руб.</span>
              </div>
            </div>
            <div className={s.message_right}>
              <div className={s.chechmark_left}>
                <Icon name="checkmark" />
              </div>
              <div className={s.text}>
                Партнерское вознаграждение «АО Добрая река»{" "}
                <span className={s.fatty_text}>+20 000 руб.</span>
              </div>
            </div>
          </div>
          <div className={s.form_callback}>
            <div className={s.form_title}>
              Если вы хотите стать партнером Finmuster
            </div>
            <div className={s.form_text}>
              и получать вознаграждение за привлечение компаний и инвесторов на
              платформу
            </div>
            <div className={s.callback_block}>
              <Input
                className={s.input}
                bordered
                initialValue="+7"
                contentRight={
                  <Image
                    src={`${PATH}flag.png`}
                    alt="ru"
                    width={15}
                    height={15}
                  />
                }
              />
              <Button css={{ borderRadius: "6px" }} color="secondary" size="lg">
                СТАТЬ ПАРТНЕРОМ
              </Button>
            </div>
            <div className={s.policy_block}>
              Ввод номера телефона подтверждает ваше согласие с{" "}
              <Link className={s.policy} css={{ color: "blue" }}>
                Политикой обработки персональных данных
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
