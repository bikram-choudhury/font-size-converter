import React from 'react';
import './App.scss';
import Input from './common/Elements/Input';
import Button from './common/Elements/Button';

class App extends React.Component {
  render() {
    return (
      <main className='wrapper flex-center'>
        <section className='form-group flex-center column'>
          <div className='input-group'>
            <Input />
            <select>
              <option value="">Choose...</option>
              <option value="px">px</option>
              <option value="em">em</option>
              <option value="rem">rem</option>
            </select>
          </div>
          <div className='action-btn mt-2'>
            <Button />
          </div>
        </section>
      </main>
    )
  }
}

export default App;
