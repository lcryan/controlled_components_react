import React from 'react';
import './App.css';

function App() {

  return (

      <>
    <div>
      <label htmlFor="form">
          <form id="user form">

         <label htmlFor="first name">Name:</label>
          <input
              type="text"
              id="user name"
              name="user name"
              />
          <label htmlFor="age">Age:</label>
              <input
                  type="number"
                  id="user age"
                  name="user age"
                  min="18"
                  max="100"
                  />
              <label htmlFor="message">
                  <input
                  type="textarea"
                  id="user message"
                  name="user message"
                  />
              </label>







          </form>


      </label>
    </div>
    </>
  );
}

export default App;
