import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <Box padding={3}>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="4px">
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedUrl(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={
                    selectedGenre?.id === genre.id ? "bold" : "normal"
                  }
                  fontStyle={
                    selectedGenre?.id === genre.id ? "oblique" : "normal"
                  }
                  onClick={() => onSelectedGenre(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default GenreList;
