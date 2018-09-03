import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Navigation } from 'react-native-navigation';
 class AssetExample extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.clickItem}>
        <View style={styles.container}>
          <Image source={{ uri: this.props.image }} style={styles.logo} />
          <Text style={styles.paragraph}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  clickItem = () => {alert("Sdffsd");
   /*  this.props.navigator.push({
      screen: 'example.Product', 
    }); */
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 12,
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    height: 40,
    width: 40,
  },
});
export default AssetExample;
