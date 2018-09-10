import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

class CategoriesListItem extends React.Component {
  
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate('Products', {
            title: this.props.name,
          })
        }>
        <View style={styles.container}>
          <Image source={{ uri: this.props.image }} style={styles.logo} />
          <Text style={styles.paragraph}>{this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:60,
    paddingLeft: 4,
    alignItems: 'center',
  },
  paragraph: {
    paddingTop:4,
    fontSize: 12,
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    height: 45,
    width: 45,
  },
});
export default CategoriesListItem;
