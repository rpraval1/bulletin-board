import React, { Component } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
import './css/Board.css';

class Board extends Component {
  // getInitialState() {
  //     return {editing: false}
  // }

  createNote(){
    alert("Compose Note is in Progress")

  }

  removeNote(){
    alert("Remove Note is in Progress")
  }

  renderNote(){
    const {colorList} = this.props

    return colorList.map(color => (
      <Grid.Column>
        <Button.Group size='small'>
          <Button attached='left' icon='compose' onClick={this.createNote}/>
          <Button attached='right' icon='close' onClick={this.removeNote}/>
        </Button.Group>
        <Segment raised attached inverted color={color} padded='very' className='myNote'>
        </Segment>
      </Grid.Column>
  ))
}
//{this.renderNote()}
  render(){
    return(
      <Container fluid className="board-bg">
        <Grid columns={6}>
          {this.renderNote()}
        </Grid>
      </Container>
    )
  }
}

export default Board;
