import React from 'react';

class ButtonClicker extends React.Component {
  // Event handler function for the button click
  handleClick = () => {
    alert('Button clicked');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}


function App() {
  return (
    <div>
      <h1>App Component</h1>
      <ButtonClicker />
    </div>
  );
}

export default App;
