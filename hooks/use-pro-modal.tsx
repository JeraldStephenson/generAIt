import { create  } from 'zustand'

//global state controls to open/close modal from anywhere

interface useProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useProModal = create<useProModalStore>((set) => ({
    isOpen: true,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))