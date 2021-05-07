import React, { useState } from 'react';

export const useModalState = ({ initialOpen = false } = {}) => {
    const [isOpen, setIsOpen] = useState(initialOpen)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return {onClose, onOpen, onToggle, isOpen}
}