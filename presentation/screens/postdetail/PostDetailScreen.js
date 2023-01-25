import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class PostDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  render() {
    return (
      <View style={[styles.container, {}]}>
        <Text>
          {this.props.route.params.post.id}
        </Text>
      </View>
    );
  }

  componentDidMount() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
