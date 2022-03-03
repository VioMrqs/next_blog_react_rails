import Button from "./Button";
import { useState } from "react";
import Cookies from "js-cookie";

const PostUpdateForm = (id) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    // console.log(id)
    // console.log(data)
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
  };

  return (
    <div className="form">
      <h3>Modifie ton post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="form__label">
            Titre
          </label>
        </div>
        <div>
          <input id="title" type="text" onChange={handleTitle} />
        </div>

        <div>
          <label htmlFor="content" className="form__label">
            Contenu
          </label>
        </div>
        <div>
          <input id="content" type="text" onChange={handleContent} />
        </div>

        <div>
          <Button type={"submit"} text={"Mettre à jour"} />
        </div>
      </form>
    </div>
  );
};

export default PostUpdateForm;
