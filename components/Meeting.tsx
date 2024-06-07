import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

const Meeting = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button variant="light" onPress={onOpen}>Meeting Schedule</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 underline decoration-yellow-500 decoration-2 text-shadow-sm">Meeting time: 12pm</ModalHeader>
                            <ModalBody>
                                <p className="my-2 text-gray-500">
                                    Location: Crossroads Community Association
                                    <br></br>Vista Heights - Maryland Heights
                                    1803 - 14 Ave NE
                                </p>
                                <ul className="list-disc list-inside">
                                    <li>May - 14th, 2024</li>
                                    <li>Jun - 11th, 2024</li>
                                    <li>Jul - 09th, 2024</li>
                                    <li>Sep - 10th, 2024</li>
                                    <li>Oct - 08th, 2024*</li>
                                    <li>Nov - 14th, 2024</li>
                                    <li>Dec - 10th, 2024</li>

                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onPress={onClose}>
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

export default Meeting;