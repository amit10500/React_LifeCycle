import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './LifeCycle_Components/Constructor';
import Header1 from './LifeCycle_Components/GetDerivedStateFromProps';
import Header3 from './LifeCycle_Components/Render';
import Header4 from './LifeCycle_Components/ComponentDidMount';
import Header5 from './LifeCycle_Components/ComponentDidUpdate';
import Container from './LifeCycle_Components/ComponentWillUnmount';

function App() {
  return (
    <div className="App">
      LifeCycle Components will be mounted Here
      <Header />
      <Header1 />
      <Header3 />
      <Header4 />
      <Header5 />
      <Container />
    </div>
  );
}

export default App;
