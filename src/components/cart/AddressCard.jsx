import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import ConfirmModal from "./ConfirmModal";
import AddressSideBar from "./AddressSideBar";

const AddressCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Stack
      padding={"10px"}
      marginBottom={"15px"}
      border={"1px solid #e1e1e1"}
      borderRadius="5px"
      bg="#e7eeff"
    >
      <AddressSideBar
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />

      <Stack p={"0 10px"} lineHeight="1.5">
        <Button
          w={"max-content"}
          color={"#f43f97"}
          size={"md"}
          bg={"none"}
          fontWeight="bold"
          _hover={{
            bg: "none",
          }}
          p={0}
          onClick={onOpen}
          ref={btnRef}
        >
          EDIT
        </Button>
        <Button
          w={"100%"}
          size="lg"
          color={"#fff"}
          bg={"#f43f97"}
          _hover={{ bg: "#f43f97" }}
          textAlign="left"
        >
          Deliver to this Address
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddressCard;
