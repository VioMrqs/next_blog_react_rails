import Button from "./Button";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const PostUpdateForm = ({ id }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useNavigate();

  const post_id = id;

  const userToken = Cookies.get("token");

  // Handling the name change
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // Handling the description change
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const data = {};

  if (title) {
    data.title = title;
  }

  if (content) {
    data.content = content;
  }

  const updateForm = async (data, id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: `PUT`,
      headers: {
        Authorization: `${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: data }),
    });
    const result = await response.json();
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateForm(data, post_id);
    history(0);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <h3>Modification</h3>
        <label htmlFor="title">
          Titre
        </label>
        <input id="title" type="text" onChange={handleTitle} />

        <label htmlFor="content">
          Contenu
        </label>
        <input id="content" type="text" onChange={handleContent} />

        <Button type={"submit"} text={"Mettre à jour"} />
      </form>
    </div>
  );
};

export default PostUpdateForm;
