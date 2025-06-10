import React from 'react';

import CardHeader from './components/CardHeader.jsx';
import CardBody from './components/CardBody.jsx';
import CardFooter from './components/CardFooter.jsx';

const App = () => {
  return (
    <div className='app'>
     <CardHeader />
     <CardBody />
     <CardFooter />
    </div>
  );
};

export default App;
