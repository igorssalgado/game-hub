import { Platform } from "../hooks/useGames";
import { HStack, Text } from "@chakra-ui/react";
import ShowIcon from "./ShowIcon";
import { useState } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const [iconText, setIconText] = useState("");

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <ShowIcon
            key={platform.id}
            platform={platform}
            setIconText={() => {
              setIconText(platform.name);
            }}
            clearIconText={() => setIconText("")}
          />
        ))}
      </HStack>
      <Text
        marginY={-2}
        position={"absolute"}
        marginTop={"-13px"}
        fontSize={11}
      >
        {iconText}
      </Text>
    </>
  );
};

export default PlatformIconList;
