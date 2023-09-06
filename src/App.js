import React from 'react';
import './App.scss';
import Input from './common/Elements/Input';
import Button from './common/Elements/Button';
import Select from './common/Elements/Select';
import Section from './common/Elements/Section';
import PrintDemo from './PrintDemo';

class App extends React.Component {
  render() {
    return (
      <main className='wrapper flex-center column'>
        <PrintDemo />
        {/* <Section
          type="html"
          className="form-group flex-center column"
        />
        <section className='form-group flex-center column'>
          <div className='input-group'>
            <Input />
            <Select />
          </div>
          <Button />
        </section> */}
      </main>
    )
  }
}

export default App;
