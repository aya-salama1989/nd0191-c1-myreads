import { useParams } from "react-router-dom";

const BookDetails = ({ bookObject }) => {
  const { bookId } = useParams();

  console.log(bookId);

  let imagePath;
  if (bookObject.imageLinks === undefined) {
    imagePath = "";
  } else {
    imagePath = bookObject.imageLinks.smallThumbnail;
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${imagePath}")`,
          }}
        ></div>
      </div>
      <div className="book-title">{bookObject.title}</div>
      <div className="book-authors">{bookObject.authors?.join(", ")}</div>
    </div>
  );
};

export default BookDetails;
