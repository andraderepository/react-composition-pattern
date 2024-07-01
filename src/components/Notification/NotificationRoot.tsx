import React, { ReactNode } from 'react'

interface NotificationRootProps {
    children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
    return (
        <div className='card gap-3'>
            {children}
        </div>
    )
}
