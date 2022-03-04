import { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import { useUserContext } from "../UserContext";
import Button from "../components/Button";
import {Link} from "react-router-dom"

const Home = () => {
  const { user } = useUserContext();

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
    <>
      {!user && (
        <div className="form__container">
          <Link to="/sign_up">
            <Button text={"Inscription"} className={"button__normal"} />
          </Link>
          <Link to="/sign_in">
            <Button text={"Connexion"} className={"button__normal"} />
          </Link>
        </div>
      )}
      {user && <PostForm user={user} />}
      <PostsList data={data.sort((a, b) => b.created_at - a.created_at)} />
    </>
  );
};

export default Home;
