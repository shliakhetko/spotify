import React, { useState } from 'react'
import { IoIosCheckmarkCircle, IoIosAddCircleOutline } from "react-icons/io";
import ID from '../../models/ID';

export const LikeButton = (props: { id: ID }) => {
    const size = 32;
    const [isLiked, setIsLiked] = useState<boolean>(false);
    return (
        <button onClick={() => { setIsLiked(!isLiked) }}>{isLiked ? <IoIosCheckmarkCircle size={size} className='fill-green-500' color='#fff' /> : <IoIosAddCircleOutline size={size} color="#fff" />}</button>
    )
}
