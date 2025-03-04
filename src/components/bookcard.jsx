import React from "react";

const BookCard = ({ title, author, description }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <h4>by {author}</h4>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  }
};

export default BookCard;