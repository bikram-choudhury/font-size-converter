import React from 'react';
import './App.scss';

function App() {
  return (
    <main className='wrapper flex-center'>
      <section className='form-group flex-center column'>
        <div className='input-group'>
          <input type='text' placeholder='Enter value' />
          <select>
            <option value="">Choose...</option>
            <option value="px">px</option>
            <option value="em">em</option>
            <option value="rem">rem</option>
          </select>
        </div>
        <div className='action-btn mt-2'>
          <button className='btn'>Convert</button>
        </div>
      </section>
    </main>
  )
}

export default App;
