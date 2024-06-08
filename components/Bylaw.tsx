
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Bylaw = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (

    <>
      <Button variant="light" onPress={onOpen} size="sm" className="underline decoration-yellow-500 decoration-2" color="warning">Click to view</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-700">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <iframe className="w-full h-full rounded-md" src="https://img1.wsimg.com/blobby/go/03e196c7-d689-42bf-b6cb-a6de0c89877a/downloads/2023%2005%20-%20(E)%20TCRC%202022%20Bylaws.pdf?ver=1716414090692" />
                <div className="flex absolute top-1/2 right-1/3 -z-10">
                  <div className='h-4 w-4 mx-4 bg-white rounded-full animate-ping [animation-delay:-0.3s]'></div>
                  <div className='h-4 w-4 mx-4 bg-white rounded-full animate-ping [animation-delay:-0.15s]'></div>
                  <div className='h-4 w-4 mx-4 bg-white rounded-full animate-ping'></div>
                </div>
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

export default Bylaw