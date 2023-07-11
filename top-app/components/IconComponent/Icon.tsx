import { FC } from "react";

import { Tel } from "public/svg/index";

import s from "./Icon.module.scss";

type IconComponentProps = { name: string; className?: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  tel: Tel,
};

const Icon: FC<IconComponentProps> = ({ name, className, ...props }) => {
  const classNames = [s.icon];
  className && classNames.push(className);

  let Icon = iconTypes[name];
  return !!Icon && <Icon className={classNames.join(" ")} {...props} />;
};

export default Icon;
