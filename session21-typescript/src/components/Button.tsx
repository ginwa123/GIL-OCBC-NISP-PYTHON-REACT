import React, { useEffect, useState } from 'react'

interface Props {
    
}

export const Button = (props: Props) => {
    const [sCounter, setsCounter] = useState(0)

    useEffect(() => {
        console.log("onCreate Button");
    }, [])

    useEffect(() => {
        console.log("Button triggered " + sCounter);
    }, [sCounter])
    
    
    return (
        <>
            <button onClick={()=> setsCounter(sCounter + 1)}>Click me</button>
            <span>{sCounter}</span>
        </>
    )
}
