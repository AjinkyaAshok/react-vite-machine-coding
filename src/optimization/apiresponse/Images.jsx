import React from "react";

const Images = React.memo(function Images({ url, title }) {
  return <img className="h-10 w-10" src={url} alt={title} />;
});
export default Images;
