import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "red";

  let numberColor =
    color === "green"
      ? "green.200"
      : color === "yellow"
      ? "yellow.600"
      : color === "red"
      ? "red.200"
      : "";

  return (
    <Badge
      backgroundColor={color}
      color={numberColor}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
