import React from 'react';
import './App.css';

function App() {

    const[nameValue, setNameValue] = React.useState('');
    const[ageValue, setAgeValue] = React.useState('');
    const[messageValue, setMessageValue] = React.useState('');
    const[checkBoxValue, setCheckBoxValue] = React.useState(false);


function handleSubmit(e) {
    e.preventDefault()
    console.log(nameValue, ageValue, messageValue)
}
    return (

        <>
            <div>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        name:
                        <input
                            type="text"
                            id="user name"
                            name="user name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="age">
                        Age:
                        <input
                            type="number"
                            id="user age"
                            name="user age"
                            min="18"
                            max="100"
                            value={ageValue}
                            onChange={(e)=> setAgeValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="message">
                        Leave us a message!
                        <input
                            type="textarea"
                            id="user message"
                            name="user message"
                            value={messageValue}
                            onChange={(e)=> setMessageValue(e.target.value)}
                        />
                    </label>

                    <label htmlFor="subscribe">
                        I wanna subscribe to the newsletter!
                        <input type="checkbox"
                               id="subscribe box"
                               name="subscribe box"
                               checked={checkBoxValue}
                               onClick={(event) => setCheckBoxValue (!checkBoxValue)}
                        />
                    </label>
                        <button type="submit">submit</button>
                </form>

            </div>

        </>
    );
}

export default App;
