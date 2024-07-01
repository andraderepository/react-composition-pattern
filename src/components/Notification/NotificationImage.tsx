import React, { ElementType } from 'react'

import ImageFile from '@assets/img/sampling.png'

interface NotificationImage {
    image: ElementType
}

export function NotificationImage({ image: Image }: NotificationImage) {
    return (
        <Image src={ImageFile} className="t-image" />
    )
}
