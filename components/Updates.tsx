
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const Updates = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    
    <>
   <Button variant="light" onPress={onOpen}>TCRC Updates</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-700">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
            <iframe className="w-full h-full rounded-md" src="https://tcrccalgary.ca/Updates.html"/>
            </ModalBody>
            <ModalFooter>
              <Button color="warning" variant="ghost" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  </>
  )
  
}

export default Updates