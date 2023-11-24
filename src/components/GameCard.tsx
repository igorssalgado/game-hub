import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize={{ base: "25", md: "2x1", lg: "2x1", xl: "2x1" }}>
            {game.name}
          </Heading>
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <HStack margin="0 20px 10px 20px" justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </HStack>
    </Card>
  );
};

export default GameCard;
