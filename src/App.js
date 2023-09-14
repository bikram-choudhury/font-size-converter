import React from 'react';
import './App.scss';
import Input from './common/Elements/Input';
import Button from './common/Elements/Button';
import Select from './common/Elements/Select';
import Form from './common/Elements/Form';
import Lifecycles from './Demo/Lifecycles';
import ErrorHandling from './Demo/ErrorHandling';

const sameBehaviourType = ['em', 'rem'];
const fontSizeTypes = ['px', ...sameBehaviourType];
const compute = ({ sourceType, destType, input }) => {
  const number = Number(input);
  if (sourceType === destType) return number;
  if (sourceType === 'px') {
    if (sameBehaviourType.includes(destType)) {
      return (1 / 16) * number;
    }
  } else if (sameBehaviourType.includes(sourceType)) {
    if (sameBehaviourType.includes(destType)) {
      return number;
    } else {
      return 16 * number;
    }
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      sourceType: '',
      destType: '',
      result: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleInput(value) {
    this.setState({ input: value });
  }
  handleSelect = (type) => (value) => {
    if (type == 'source') {
      this.setState({ sourceType: value });
    } else {
      this.setState({ destType: value });
    }
  }
  onSubmit() {
    const result = compute(this.state);
    this.setState({ result });
  }
  render() {
    const str = {};
    return (
      <main className='wrapper flex-center column'>
        <ErrorHandling string={str} />
        <Lifecycles value={10} />
        <Form className="form-group flex-center column">
          <div className='input-group'>
            {/* <Input placeholder="Enter your email" type="email" />
            <Input placeholder="Enter password" type="password" /> */}
            <Select
              options={fontSizeTypes}
              selected={this.state.selectedType}
              onSelect={this.handleSelect('source')}
            />
            <Input
              type="text"
              placeholder="Enter a value"
              numberOnly
              value={this.state.input}
              onInput={this.handleInput}
            />
            <Select
              options={fontSizeTypes}
              selected={this.state.selectedType}
              onSelect={this.handleSelect('dest')}
            />
          </div>
          <Button
            onClick={this.onSubmit}
            className="action-btn mt-2"
          >Convert</Button>
        </Form>
        {
          this.state.result ? (
            <strong>Result: {this.state.result} {this.state.destType}</strong>
          ): null
        }
      </main>
    )
  }
}

export default App;
