import React from "react";
import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const Productcard = ({ id, image, price, title, reviews }) => {
  const router = useRouter();

  const handleClick = (id) => {
    if (id) {
      router.push(`/singleuser/${id}`);
    }
  };

  title = title.split(" ");
  if (title.length > 5) {
    title = title.slice(0, 5).join(" ");
  }
  let x;
  if (reviews.rate > 3.5) {
    x = "rgb(35, 187, 117)";
  } else {
    x = "rgb(244, 182, 25)";
  }

  return (
    <>
      <div>
        <Box
          bg={"whitesmoke"}
          borderRadius={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px;"}
          padding={{ sm: "0.5rem", lg: "1rem" }}
          onClick={() => handleClick(id)}
          cursor={"pointer"}
          width={{ sm: "100%", md: "100%", lg: "100%" }}

          maxHeight={{ sm: "600px", lg: "500px" }}

        >
          <Image h={{ sm: "200px", lg: "35vh" }} maxHeight={{ sm: "100px", lg: "35vh" }} objectFit={"cover"} w={"100%"} src={image} alt={title} />
          <Text
            pt={"1rem"}
            pl={"1.1rem"}
            fontWeight={"bold"}
            fontSize={{ sm: "0.7rem", lg: "1rem" }}
            color={"grey"}
            className={styles.lineClamp}
          >
            {title}
          </Text>
          <Flex>
            <Text
              color={"black"}
              pt={"0.6rem"}
              pl={{ sm: "2rem", lg: "1.3rem" }}
              fontSize={"1.3rem"}
              fontWeight={"bolder"}
              c={"black"}
            >
              ₹{price}{" "}
            </Text>
            <Text pl={"0.1rem"} pt={"0.6rem"} color={"grey"}>
              onwards
            </Text>
          </Flex>

          <Button border={"0px"} mt={"0.5rem"} p={"0.2rem"}>
            Free Delivery
          </Button>

          <Flex direction={["column", "row"]} >
            <div
              style={{
                backgroundColor: x,
                color: "white",
                fontStyle: "bold",
                padding: "0.5rem",
                maxWidth: "70px",
                borderRadius: "16px",
                fontWeight: "bold",
              }}
            >
              {reviews.rate} ★{" "}
            </div>
            <div style={{ padding: "0.5rem", color: "grey" }}>4 Reviews</div>
          </Flex>
        </Box>
      </div>
    </>

  );
};

export default Productcard;
