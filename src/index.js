/* eslint-disable react/jsx-filename-extension */

import { render } from 'react-dom';
import React from 'react';

import Header from './Header';
import RequirementArea from './requirementArea';
// import CommentArea from './commentArea';
import AddButton from './addButton';
import './app.global.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [1, 2]
    };
  }
  addRow = () => {
    console.log('Hi');
    this.setState({
      rows: this.state.rows.concat([2])
    });
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className='requirement-area-header'>Requirements:</h1>
        {
          this.state.rows.map(row => <RequirementArea />)
        }
        <AddButton onClick={this.addRow} />
      </div>
    );
  }
}

const node = document.createElement('div');
document.body.appendChild(node);

render(
  <App />,
  node
);
