import { Button, Form } from "react-bootstrap";
import Preloader from "../../Components/Preloader/Preloader";
import { useEffect, useState } from "react";
import { PageType } from "../../types";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [page, setPage] = useState<PageType>({
    title: "",
    content: "",
  });

  const [selectedPage, setSelectedPage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [pages, setPages] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosApi.get("pages.json");
      const pageKeys = Object.keys(response.data);
      setPages(pageKeys);
    };

    fetchData();
  }, []);

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setPage((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.put(`pages/${selectedPage}.json`, page);
      navigate(`/pages/${selectedPage}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchPage = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get(`pages/${selectedPage}.json`);
      setPage(response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedPage) {
      void fetchPage();
    }
  }, [selectedPage]);

  return (
    <>
      <div className="container w-75">
        {loading && <Preloader />}
        <h1 className="text-center mt-3">Редактировать страницу</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="select" className="mt-3 fs-3">
            <Form.Label>Выберите страницу:</Form.Label>
            <Form.Select
              name="pages"
              required
              onChange={(e) => setSelectedPage(e.target.value)}
              value={selectedPage}
            >
              <option>Выберите страницу</option>
              {pages.map((page, index) => (
                <option key={index} value={page}>
                  {page}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="title" className="fs-3">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Введите новый заголовок"
              onChange={onChange}
              value={page.title}
            />
          </Form.Group>
          <Form.Group className="mt-4 fs-3" controlId="textArea">
            <Form.Label>Контент</Form.Label>
            <Form.Control
              required
              as="textarea"
              placeholder="Введите новый контент"
              rows={4}
              name="content"
              onChange={onChange}
              value={page.content}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="mt-3">
            Редактировать
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Edit;
