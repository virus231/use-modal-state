import React from 'react'

export const Modal = ({open}: any) => {
    return (
        <div>
            {
                open ? "Open Modal Dialog, example" : "Close modal dialog"
            }

        </div>
    )
}
