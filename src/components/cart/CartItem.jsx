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
import SideBar from "./CartSideBar";
import ConfirmModal from "./ConfirmModal";

const CartItem = (props) => {
  // const { cartTotal } = useSelector(store => store.cart);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Stack
      padding={"10px"}
      marginBottom={"15px"}
      border={"1px solid #e1e1e1"}
      borderRadius="5px"
    >
      <SideBar
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        data={props}
      />
      <Flex justify={"space-between"}>
        <Flex w="90%">
          <Image
            src={props.image}
            alt=""
            w="76px"
            h="76px"
            objectFit={"cover"}
          />
          <Stack p={"0 10px"} lineHeight="1.5">
            <Text fontSize={"16px"} fontWeight={"500"}>
              {props.title}
            </Text>
            <Text>Qty : {props.quantity}</Text>
            <Text>₹{props.price}</Text>
            <Button
              w={"max-content"}
              color={"#f43f97"}
              size={"sm"}
              fontWeight="bold"
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              leftIcon={<CloseIcon fontSize={"10px"} />}
              textAlign="left"
              p={0}
              onClick={onModalOpen}
            >
              REMOVE
            </Button>
          </Stack>
          <ConfirmModal
            isOpen={isModalOpen}
            onClose={onModalClose}
            title={props.title}
            id={props._id}
          />
        </Flex>
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
      </Flex>
      <Flex
        justify={"space-between"}
        p={"10px 0"}
        borderTop="1px solid #e1e1e1"
      >
        <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
          Supplier : Deepti Creations
        </Text>
        <Text fontSize={"16px"} fontWeight={"500"} color={"grey"}>
          Free Delivery
        </Text>
      </Flex>
    </Stack>
  );
};

export default CartItem;
