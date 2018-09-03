import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryListItem = props => (
    <View style={styles.listItem}>
      <Text resizeMode="cover" source={props.title}  />
      <Text>{props.description}</Text>
    </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
      marginRight: 8,
      height: 30,
      width: 30
  }
});

export default CategoryListItem;
