import { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
// import { useAppContext } from "../SessionContext";
import { useUserContext } from "../UserContext";

const Home = () => {
  // const { isAuthenticated } = useAppContext();
const { user } = useUserContext()

  const [data, setData] = useState([])

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
      {user && <PostForm />}
      <h1>Tous les Posts</h1>
      <PostsList data={data.sort((a, b) => b.created_at - a.created_at)} />
    </div>
  );
}

export default Home
