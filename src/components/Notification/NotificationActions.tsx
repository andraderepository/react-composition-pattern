import React, { ReactNode } from "react"

interface NotificationActions {
    children: ReactNode
}

export function NotificationActions({ children }: NotificationActions) {
    return (
        <div className='d-flex gap-2'>
            {children}
        </div>
    )
}