import React, { Component } from 'react';
import ContactCard from "./ContactCard"
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <ContactCard 
          name="John Smith"
          mobile="1234567890"
          work="8001234567"
          email="test@example.com"
        />
        <ContactCard
          name="James Jones"
          mobile="0987654321"
          work="8007654321"
          email="google@example.com"
        />
        <ContactCard
          name="John Doe"
          mobile="1236540987"
          work="8003217654"
          email="yahoo@example.com"
        />
      </>
    );
  }
}

export default App;