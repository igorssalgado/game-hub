import { Platform } from "../hooks/useGames";
import { HStack } from "@chakra-ui/react";
import ShowIcon from "./ShowIcon";
import { useState } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const [iconText, setIconText] = useState("");

  return (
    <>
      <HStack inlineSize={"300px"} marginY={1} wrap={"wrap"}>
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
      <span
        style={{
          color: "#62789d",
          position: "absolute",
          marginTop: "13px",
          marginRight: "-2",
          marginBottom: "-13px",
          fontSize: "9px",
          fontStyle: "oblique",
        }}
      >
        {iconText}
      </span>
    </>
  );
};

export default PlatformIconList;
