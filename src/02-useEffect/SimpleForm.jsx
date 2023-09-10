import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formaState, setFormaState] = useState({
        username: 'ferney',
        email: 'ferney@gmail.com',
    });

    const { username, email } = formaState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormaState({
            ...formaState,
            [ name ]: value,
        });
    }

    useEffect(() => {
        // console.log('Form changed');
    }, [ formaState ]);

    useEffect(() => {
        // console.log('username changed');
    }, [ username ]);

    useEffect(() => {
        // console.log('email changed');
    }, [ email ]);
    

  return (
    <>
        <h1>SimpleForm</h1>

        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username" 
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="email" 
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {( username === 'ferney2') && <Message />}
    </>
  )
}
