import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

// I do miss everything. A part of me that I may have left and forgotten. Not forgotten but avoided. Intentionally but wanting otherwise. My heart years for it and the pain is  not subsiding. I want to go back, I really do; I know that's what I want. But is it the best for me? Is it the best choice? If I do go back, will there be anyone left to go back for? Either way, I will be restarting all over again. Whatever decision I might take, or events that may transpire.
