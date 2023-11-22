import { Platform } from "../hooks/useGames";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

import { Icon, Text, useTimeout } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  platform: Platform;
  setIconText: () => void;
  clearIconText: () => void;
}

const ShowIcon = ({
  platform,
  setIconText,
  clearIconText: onMouseLeave,
}: Props) => {
  const [color, setColor] = useState("gray.500");

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <div>
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={color}
          onMouseEnter={() => {
            setColor("gray.0");
            setIconText();
          }}
          onMouseLeave={() => {
            setColor("gray.500");
            onMouseLeave();
          }}
        />
      </div>
    </>
  );
};

export default ShowIcon;
