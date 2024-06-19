import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chat Application",
  description = "This is a chat Application with functionalities similar to WhatsApp",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
