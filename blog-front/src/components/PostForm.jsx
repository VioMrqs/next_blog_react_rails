import Button from "./../components/Button";
import { useState } from "react";
import Cookies from "js-cookie"

const PostForm = () => {
  // States 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handling the title change
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // Handling the message change
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const fetchPostForm = async (data) => {
    const response = await fetch("http://localhost:3000/posts", {
      headers: {
        "Authorization": `${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      const result = await response.json();
      console.log(result);
  };

  const handleSubmit = () => {
    const data = {
      post: {
        title: title,
        content: content,
      },
    };
    fetchPostForm(data);
  };

  return (
    <>
      <form>
        <div>
          <div className="form__label">
            <label>Ton Post</label>
          </div>
          <label>Titre</label>
          <input
            onChange={handleTitle}
            className="post__input"
            value={title}
            type="string"
          />
          <label>Message</label>
          <input
            onChange={handleContent}
            className="post__input"
            value={content}
            type="text"
          />
          <label>Image</label>
          <input
            onChange={handleTitle}
            className="post__input"
            value={title}
            type="string"
          />
        </div>
        <div>
          <Button
            onClick={handleSubmit}
            type={"submit"}
            text={"Envoi dans la toile"}
          />
        </div>
      </form>
    </>
  );
};

export default PostForm;
