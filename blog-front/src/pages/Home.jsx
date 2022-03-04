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

  // const Button = ({ onClick, text, type }) => {
  //   return (
  //     <button className="button" onClick={onClick} type={type}>
  //       {text}
  //     </button>
  //   );
  // };

  return (
    <>
      {!user && (
        <div className="form__container">
        <Link to="/sign_up">
          <Button text={"Inscription"} />
        </Link>
        <Link to="/sign_in">
          <Button text={"Connexion"} />
        </Link>
        </div>
      )}
      {user && <PostForm user={user} />}
      <PostsList data={data.sort((a, b) => b.created_at - a.created_at)} />
    </>
  );
};

export default Home;
