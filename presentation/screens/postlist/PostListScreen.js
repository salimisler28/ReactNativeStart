import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import favReducer from "../../redux/FavReducer";

function PostListScreen({ navigation }) {
  const [idle, setIdle] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const favs = useSelector((state) => state.favs.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("calisti");
    setIdle(false);
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(favs);
  }, [favs])

  if (loading) {
    return (
      <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Text>PostList</Text>

        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return <PostItem post={item} onClick={(post) => {
              navigation.navigate("PostDetail", { post: post });
            }} onFavClick={(post) => {
              dispatch(favReducer.actions.add(post.id));
            }} />;
          }} />
      </View>
    );
  }
}

export default PostListScreen;
