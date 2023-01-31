
const Modal = ({ children, id, heading }) => {
    return (
        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5.5 mb-3" id="ModalLabel">{heading}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
