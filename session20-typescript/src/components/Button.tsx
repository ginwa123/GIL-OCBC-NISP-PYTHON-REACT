import { useState } from "react"

interface Props {
    pName? : string
}

export const Button = (props: Props)     => {
    const [sCounter, setSCounter] = useState(0)
    return (
        <>
            <span>{props.pName}</span>
            <button onClick={() => setSCounter(sCounter + 1)} >Click me</button>
            <span>   {sCounter}</span>
        </>
    )
}
