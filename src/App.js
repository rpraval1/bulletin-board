import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'
import Note from './Note'
import Board from './Board'
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      colorValue: '',
      colorList: []
    }
  }

  noteColorValue(colorInputValue) {
    var colorList = this.state.colorList
    this.setState({
      colorValue : colorInputValue,
      colorList: colorList.concat([colorInputValue])
    })

  }
  render() {
    const {colorValue, colorList} = this.state
    return (
      <Container fluid>
        <Note colorValue={colorValue} noteColorValue={this.noteColorValue.bind(this)}/>
        <Divider />
        <Board colorValue={colorValue} colorList={colorList}/>
      </Container>
    );
  }
}

export default App;
