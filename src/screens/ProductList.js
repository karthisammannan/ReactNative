import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StatusBar,
} from 'react-native';
// You can import from local files
import ProductListItem from '../components/ProductListItem';
import productsJson from '../api/products.json';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    //  console.log(productsJson);
  }
  static navigationOptions = ({ navigation }) => ({
    title:
      typeof navigation.state.params === 'undefined' ||
      typeof navigation.state.params.title === 'undefined'
        ? 'find'
        : navigation.state.params.title,
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
    },
    
  });

  render() {
    /* Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const title = params ? params.title : null;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <FlatList
          data={productsJson[title]}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ProductListItem
                name={item.name}
                image={item.img}
                offer={item.offer}
                rating={item.rating}
                old_price={item.old_price}
                offered_price={item.offered_price}
                feature={item.feature}
                navigation={this.props.navigation}
              />
            );
          }}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
export default ProductList;
