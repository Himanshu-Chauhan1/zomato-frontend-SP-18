import React from 'react';
import LogIn from './loginForm';

const Modal = () => {
    return (
        <>
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5.5 mb-3" id="loginModalLabel">Log In</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <LogIn />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal;