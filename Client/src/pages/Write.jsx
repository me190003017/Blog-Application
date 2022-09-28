import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  // console.log(state);
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(state?.img ||null);
  const [cat, setCat] = useState(state?.cat || "");
  const navigate = useNavigate()
  console.log(title,value,file,cat);
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log("This is upload err ",err);
    }
  };
  const handleClick=async (e)=>{
    e.preventDefault();
    const imgUrl = await upload();
    console.log(imgUrl);
    try {
      // console.log(title,value,file,cat);
      const res=state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          console.log("This is reponse ",res);
          // navigate(state?`/post/${state.id}` : "/");
          navigate("/");
    } catch (err) {
      console.log("This is catch ",err);
    }
  }
  return (
    <div className="add">
      <div className="content">
      <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
        <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button  onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
        <h1>Category</h1>
          <div className="cat">
            <input
            checked={cat === "art"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="art"
              id="art"
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "travel"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="travel"
              id="travel"
            />
            <label htmlFor="travel">Travel</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "science"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="science"
              id="science"
              
            />
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "technology"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="technology"
              id="technology"
              
            />
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "cinema"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="cinema"
              id="cinema"
              
            />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "design"}
              onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="design"
              id="design"
              
            />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input
            checked={cat === "food"}
            onChange={(e) => setCat(e.target.value)}
              type="radio"
              name="cat"
              value="food"
              id="food"
              
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write