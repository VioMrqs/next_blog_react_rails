import { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import Cookies from "js-cookie"

const Home = () => {

  const [data, setData] = useState([]);

  const fetchPost = async () => {
    const data = await fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const result = await data.json();
    setData(result);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <h1>Tous les Posts</h1>
      <PostsList data={data} />
    </div>
  );
}

export default Home
