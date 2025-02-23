import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../redux/modalSlice';

const ModalComponent = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.modal.isOpen);

    const handleOpen = () => {
        dispatch(openModal());
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <button
                onClick={handleOpen}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Modalni Ochish
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <p className="mb-4">Bu yerda modal oynada kerakli ma'lumotlar ko'rsatiladi!</p>
                        <button
                            onClick={handleClose}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Modalni Yopish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalComponent;
