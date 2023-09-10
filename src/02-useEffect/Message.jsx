import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
        console.log('User exists');
        return () => {
            console.log('User no exists');
        }
    }, []);

    return (
        <>
            <h1>User already exists</h1>
        </>
    )
}
