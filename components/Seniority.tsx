
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const Seniority = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    
    <>
   <Button variant="light" onPress={onOpen}size="sm" className="underline decoration-yellow-500 decoration-2" color="warning">
    Click to view</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-700">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
            <iframe className="w-full h-full rounded-md" src="https://img1.wsimg.com/blobby/go/03e196c7-d689-42bf-b6cb-a6de0c89877a/downloads/ENG-%20Western%20Regional.pdf?ver=1716414090692"/>
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

export default Seniority