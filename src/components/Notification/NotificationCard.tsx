import React, { ReactNode } from 'react'

interface NotificationCardProps {
    children: ReactNode
}

export function NotificationCard({ children }: NotificationCardProps) {
    return (
        <div className='card gap-3'>
            {children}
        </div>
    )
}
