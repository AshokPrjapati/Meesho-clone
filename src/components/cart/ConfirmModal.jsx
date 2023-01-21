import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Toast,
} from "@chakra-ui/react";
import axios from "axios";

function ConfirmModal({ isOpen, onClose, title, id, removeProduct }) {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove Product From Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>Are you ure you want to remove {title}.</ModalBody>

          <ModalFooter>
            <Button
              color={"#fff"}
              bg={"#f43f97"}
              _hover={{ bg: "#f43f97" }}
              mr={3}
              onClick={() => {
                removeProduct(id);
                Toast({
                  title: "Product Removed",
                  status: "success",
                  duration: 5000,
                  isClosable: true,
                });
                onClose();
              }}
            >
              Remove
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmModal;
