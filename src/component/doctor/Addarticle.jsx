import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API } from "../../config/api";
import { UserContext } from "../context/userContext";

const Addarticle = () => {
  const [state] = useContext(UserContext)

  const [form, setForm] = useState({
    title: "",
    thumbnailArticle: "",
    description: "",
  });

  const handleOnChange = (e) => {
    setForm({
        ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.set("title", form.title);
      formData.set('thumbnailArticle', form.thumbnailArticle[0], form.thumbnailArticle[0].name);
      formData.set("description", form.description);
      

      const response = await API.post("/buatarticle/"+state.user.id, formData, config);
      console.log("letsgoooo", response);
    } catch (error) {
        console.log(error)
        alert("SAD",error)
    }
  });

  return (
    <>
      <Form className="container mt-5" onSubmit={(e) => handleOnSubmit.mutate(e)}>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control className="bg-secondary text-light" type="text" name="title" value={form.title} onChange={handleOnChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control className="bg-secondary text-light" type="file" name="thumbnailArticle"  onChange={handleOnChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control className="bg-secondary text-light" as="textarea" name="description" rows={3} value={form.description} onChange={handleOnChange}/>
        </Form.Group>
        <div className="m-auto d-flex justify-content-center">
          <Button className="border-0 w-25 text-center" style={{ backgroundColor: "#FF6185" }} type="submit">
            Post
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Addarticle;
