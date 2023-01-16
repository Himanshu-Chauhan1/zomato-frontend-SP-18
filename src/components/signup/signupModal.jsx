import React from 'react';
import SignUp from './signupForm';

const Modal = () => {
    return (
        <>
            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5.5 mb-3" id="signupModalLabel">Sign Up</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Modal;