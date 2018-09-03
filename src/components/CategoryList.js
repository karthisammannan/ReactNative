import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CategoryListItem from "./CategoryListItem";

const CategoryList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.categories}
      renderItem={(info) => (
        <CategoryListItem
          categoryName={info.item.title}
          categoryDesc={info.item.description}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default CategoryList;
