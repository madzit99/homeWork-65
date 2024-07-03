import { useEffect, useState } from "react";
import { PageType } from "../../types";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";

const Page = () => {
  const [page, setPage] = useState<PageType>({
    title: "",
    content: "",
  });

  const { pageName } = useParams();

  const fetchData = async () => {
    try {
      const response = await axiosApi.get(`pages/${pageName}.json`);
      setPage(response.data);
    } catch (error) {
      console.log("Eror", error);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [pageName]);

  return (
    <div>
      <h1 className="fw-bold text-center mt-3">{page.title}</h1>
      <p className="fs-3 text-center ">{page.content}</p>
    </div>
  );
};

export default Page;
