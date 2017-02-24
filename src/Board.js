import React, { Component } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
import './css/Board.css';

class Board extends Component {
  constructor(props) {
    super(props)
      this.state = {
        editing: false
      }
  }


  componentDidUpdate() {
      if (this.state.editing) {
          this.refs.newText.focus()
          this.refs.newText.select()
      }
  }

  saveNote() {

      this.setState({editing: false})
  }

  createNote(color){
    //alert("Compose Note is in Progress")
    return(
      <Container>
        <textarea ref="newText" defaultValue='Composing is in Process' className='noteText'></textarea>
        <Button icon='save'size='mini' color='blue' onClick={this.saveNote.bind(this)}></Button>
      </Container>
    )
  }

  editNote() {
    this.setState({editing: true})
  }

  removeNote(){
    alert("Remove Note is in Progress ")
      this.setState({editing: false})
  }

  //<Button attached='left' icon='compose' onClick={this.editNote.bind(this)}/>

  renderNote(){
    const {colorList} = this.props

    return colorList.map(color => (
      <Grid.Column>
        <Button.Group className='noteButton'>
          <Button attached='left' icon='edit' size='mini' color={color} onClick={this.editNote.bind(this)}/>
          <Button attached='right' icon='close' size='mini' onClick={this.removeNote.bind(this)}/>
        </Button.Group>
        <Segment raised attached inverted color={color} padded='very' className='myNote'>
          {(this.state.editing) ? this.createNote(color) : <p>Start Writing</p>}
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
