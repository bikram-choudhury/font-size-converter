import React from 'react';
import './App.scss';
import Input from './common/Elements/Input';
import Button from './common/Elements/Button';
import Select from './common/Elements/Select';
import Form from './common/Elements/Form';

const fontSizeTypes = ['px', 'em', 'rem'];

class App extends React.Component {
  
  render() {
    return (
      <main className='wrapper flex-center column'>
        <Form className="form-group flex-center column">
          <div className='input-group'>
            {/* <Input placeholder="Enter your email" type="email" />
            <Input placeholder="Enter password" type="password" /> */}
            <Input
              type="text"
              placeholder="Enter a value"
              numberOnly
            />
            <Select options={fontSizeTypes} />
          </div>
          <Button className="action-btn mt-2">Convert</Button>
        </Form>
      </main>
    )
  }
}

export default App;
