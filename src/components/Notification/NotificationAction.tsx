import React, { ButtonHTMLAttributes, ElementType } from "react"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ElementType
}

export function NotificationAction({ icon: Icon, ...rest}: NotificationActionProps ) {
    return (
        <button {...rest} className='btn btn-light'>
            <Icon />
        </button>
    )
}
