import "./Blog.css";
import { projectFirestore } from "../../firebase/config";
import React, { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

export default function Blog() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("blog")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No data to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);
  return (
    <div>
      <div>
        {error && <p className="error">{error}</p>}
        {isPending && <p>Loading...</p>}
        {data && <BlogList articles={data} />}
      </div>
    </div>
  );
}
