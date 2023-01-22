import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const ProductCard = ({ title, id, image, price }) => {
  const router = useRouter();


    const handleClick = (id) => {
        router.push(`/update/${id}`)
    }


  return (
    <div style={{ width: "fit-content" }}>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={image}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height={{
              base: "250px",
              sm: "230px",
              md: "260px",
              lg: "300px",
              xl: "300px",
              "2xl": "280px",
            }}
            width={{
              base: "240px",
              sm: "200px",
              md: "210px",
              lg: "250px",
              xl: "250px",
              "2xl": "240px",
            }}
          />
          <Stack mt="6" spacing="3">
            <Heading
              size={{
                base: "sm",
                sm: "sm",
                md: "sm",
                lg: "md",
                xl: "md",
                "2xl": "md",
              }}
              maxWidth={{
                base: "180px",
                sm: "180px",
                md: "190px",
                lg: "200px",
                xl: "230px",
                "2xl": "230px",
              }}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                flexShrink: "1",
              }}
            >
              {title}
            </Heading>
            <Text color="blue.600" fontSize="2xl">
              ₹ {price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="green"
              onClick={() => handleClick(id)}
            >
              Update
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
