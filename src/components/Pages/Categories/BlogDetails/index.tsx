import React from "react";
import MainContentForBlog from "./MainContentForBlog";

function BlogDetails({data}:any) {
  return (
    <div>
      <MainContentForBlog data={data} />
    </div>
  );
}

export default BlogDetails;
