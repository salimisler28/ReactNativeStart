import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PostItem = (props) => {
  let post = props.post;

  return (
    <TouchableOpacity
      onPress={() => {
        props.onClick(post);
      }}>
      <View style={[style.container, {}]}>
        <View style={[style.header, {}]}>
          <View
            style={{ flexDirection: "column", flex: 1, borderWidth: 1, borderColor: "black", marginEnd: 10 }}>
            <Text>{post.id}</Text>
            <Text>{post.title}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              props.onFavClick(post);
            }}>
            <View style={{ justifyContent: "center", alignContent: "center" }}>
              <Text style={{ borderWidth: 1, borderColor: "black" }}>Favori</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 15,
    padding: 15,
    flexDirection: "column",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 10, height: 10 },
  },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default PostItem;
