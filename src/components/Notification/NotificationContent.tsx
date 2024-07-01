import React from "react"

interface NotificationContent {
    desc: string
    category: string
    timePublish: string
}

export function NotificationContent({ desc, category, timePublish}: NotificationContent) {
    return (
        <div className='d-flex flex-column card-content'>
            <p className=''>
                {desc}
            </p>
            <div className='d-flex gap-1'>
                <span>{category}</span>
                <span>Há {timePublish}</span>
            </div>
        </div>
    )
}
