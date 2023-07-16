import { FC } from "react";
import s from "./Icon.module.scss";

import {
  Tel,
  Navigation,
  Shield,
  Notes,
  Star,
  Checkmark,
} from "../../public/svg/index";
type IconComponentProps = { name: string; className?: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  tel: Tel,
  navigation: Navigation,
  shield: Shield,
  notes: Notes,
  star: Star,
  checkmark: Checkmark,
};

const Icon: FC<IconComponentProps> = ({ name, className, ...props }) => {
  const classNames = [s.icon];
  className && classNames.push(className);

  let Icon = iconTypes[name];
  return !!Icon && <Icon className={classNames.join(" ")} {...props} />;
};

export default Icon;
