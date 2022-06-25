import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const {modal, handleModaleClick} = useBebidas()


    return (
        <Modal show={modal} onHide={handleModaleClick}>
            <Modal.Body>
                Cuerpo de modal
            </Modal.Body>
        </Modal>
    )
}

export default ModalBebida
