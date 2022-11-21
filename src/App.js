import React from 'react';
import './App.css';

function App() {

    return (

        <>
            <div>

                <form>
                    <label htmlFor="name">
                        name:
                        <input
                            type="text"
                            id="user name"
                            name="user name"
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
                        />
                    </label>
                    <label htmlFor="message">
                        Leave us a message!
                        <input
                            type="textarea"
                            id="user message"
                            name="user message"
                        />
                    </label>

                    <label htmlFor="subscribe">
                        I wanna subscribe to the newsletter!
                        <input type="checkbox"
                               id="subscribe box"
                               name="subscribe box"
                        />
                    </label>
                    <label htmlFor="submit-button">
                        <input
                            type="submit"
                            id="submit-button"
                            name="submit-button"
                        />
                    </label>
                </form>

            </div>

        </>
    );
}

export default App;
