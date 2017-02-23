import React, { Component } from 'react';
import { Button, Container, Grid, Segment } from 'semantic-ui-react'
import './css/Note.css';

class Note extends Component {

  handleNoteColor(color){
    this.props.noteColorValue(color)
  }

  render() {
    const colors = ['pink', 'teal', 'olive', 'yellow']
    return (
      <Container fluid className="App-header">
        <Container>
          <Grid relaxed columns={4} className="Note">
            {colors.map(color => (
              <Grid.Column key={color}>
                <Segment inverted color={color} padded='very'>
                  <Button icon='plus' size='mini' onClick={this.handleNoteColor.bind(this,color)}/>
                </Segment>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
      </Container>

    );
  }
}

export default Note;
