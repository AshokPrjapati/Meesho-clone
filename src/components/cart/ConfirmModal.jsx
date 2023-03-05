import useToastMsg from "@/custom-hooks/useToast";
import { removeCartProduct } from "@/redux/cart/cart.action";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

function ConfirmModal({ isOpen, onClose, title, id }) {
  const dispatch = useDispatch();
  const token = useSelector(store => store.login.token);
  const { loading } = useSelector(store => store.cart)
  const Toast = useToastMsg();

  // for removing product from databse
  const removeProduct = () => {
    dispatch(removeCartProduct(id, token, Toast, onClose));
  }

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
              isLoading={loading}
              loadingText={"Removing"}
              color={"#fff"}
              bg={"#f43f97"}
              _hover={{ bg: "#f43f97" }}
              mr={3}
              onClick={removeProduct}
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
