import React from 'react';

function ConditionalDisplay(props) {
  const { show } = props;

  if (show) {
    return <div>Hello, world!</div>;
  } else {
    return null;
  }
}

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <ConditionalDisplay show={true} /> {/* This will display "Hello, world!" */}
      <ConditionalDisplay show={false} /> {/* This won't display anything */}
    </div>
  );
}

export default App;
