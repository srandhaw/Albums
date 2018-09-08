import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import axios from 'axios';
class AlbumList extends Component {

  state = { albums: [] };

  componentWillMount() {
        
 fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));

    }

    

renderAlbums() {
  return this.state.albums.map(album => <Text>{album.title}</Text>);
} 

render() {
console.log(this.state);
  return (
     <View>
       {this.renderAlbums()}
     </View>  
    );
  }
}
export default AlbumList;
