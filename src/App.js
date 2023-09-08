import React from 'react';
import './App.scss';
import Input from './common/Elements/Input';
import Button from './common/Elements/Button';
import Select from './common/Elements/Select';
import Section from './common/Elements/Section';
import StateDemo from './Demo/StateDemo';
import ClickEvent from './Demo/ClickEvent';
import ChangeEvent from './Demo/ChangeEvent';

class App extends React.Component {
  render() {
    return (
      <main className='wrapper flex-center column'>
        <ChangeEvent />
        {/* <ClickEvent /> */}
        {/* <StateDemo /> */}
        {/* <PrintDemo /> */}
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
