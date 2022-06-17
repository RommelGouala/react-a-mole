import { useEffect } from 'react'
import emptySlotPic from './molehill.png'

const EmptySlot = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)}, randSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width': '30vw'}} src={emptySlotPic} alt="empty_slot"/>
        </>
    )
}

export default EmptySlot