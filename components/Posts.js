import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

const POSTS_DATA = [
  {
    id: 1,
    username: "lonellydreamer",
    userImg: "https://1tb.favim.com/preview/7/766/7663/76638/7663819.jpg",
    postImg:
      "https://www.brightful.me/content/images/2020/07/david-kovalenko-G85VuTpw6jg-unsplash.jpg",
    caption: "What a cool image!",
  },
  {
    id: 2,
    username: "monneygreeder",
    userImg:
      "http://pm1.narvii.com/6766/79cac6e80e120ef79cce3e84f041c0ac973beb97v2_00.jpg",
    postImg:
      "https://previews.123rf.com/images/tsikhan/tsikhan1906/tsikhan190600034/126033506-big-pile-of-us-money-lying-down-in-random-order.jpg",
    caption: "We need morre moneyy",
  },
];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          postImg={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
