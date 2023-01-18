import React from 'react';
import Modal from '../common/modal';
import LogIn from './loginForm';

const LoginModal = () => {
    return (
        <Modal id={"login"}>
            <LogIn />
        </Modal>
    );
};
export default LoginModal;