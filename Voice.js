import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {
    Player,
    Recorder,
    MediaStates
} from 'react-native-audio-toolkit';


export default class VoiceTest extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
     disabled: false
   };
  }
  _handlePress() {
    console.log('Record!');
    // Disable button while recording and playing back
    this.setState({disabled: true});

    // Start recording
    let rec = new Recorder("filename.mp4").record();

    // Stop recording after approximately 3 seconds
    setTimeout(() => {
      rec.stop((err) => {
        // NOTE: In a real situation, handle possible errors here

        // Play the file after recording has stopped
        new Player("filename.mp4")
        .play()
        .on('ended', () => {
          // Enable button again after playback finishes
          this.setState({disabled: false});
        });
      });
    }, 3000);
  }
  render() {
    return (
      <Button
        containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'blue'}}
        style={{fontSize: 20, color: 'yellow'}}
        styleDisabled={{color: 'red'}}
        disabled={this.state.disabled}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>
    );
  }
}
