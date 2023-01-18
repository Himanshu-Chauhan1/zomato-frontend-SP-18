import React from 'react';
import SignUp from './signupForm';
import Modal from '../common/modal';


const SignUpModal = () => {
    return (
        <Modal id={"signup"}>
            <SignUp />
        </Modal>
    );
};

export default SignUpModal;