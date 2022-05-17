window.addEventListener("load", function () {
  const comments = getAllComments();
  console.log(comments);
  comments.forEach(handleComment);
});

// Gets all styling comments in deck.
const getAllComments = () => {
  const slides = Array.from(document.querySelectorAll(".slides section"));
  const elements = slides.reduce(
    (elements, slide) => [...elements, ...slide.childNodes],
    []
  );

  return elements
    .filter((element) => element.nodeType === Node.COMMENT_NODE)
    .map((comment) => ({
      slide: comment.parentNode,
      comment: comment.nodeValue.trim(),
    }));
};

const handleComment = ({ slide, comment }) => {
  switch (comment) {
    case "incremental-list":
      makeListItemsIncremental(slide);
      break;

    case "splash-page":
      makeSplashPage(slide);

      break;

    default:
      break;
  }
};

const makeListItemsIncremental = (slide) =>
  slide
    .querySelectorAll("li")
    .forEach((listItem) => listItem.classList.add("fragment"));

const makeSplashPage = (slide) => {
  slide.classList.add("splash-page");
  // add splash-page class to background div as well
  document.querySelectorAll("section").forEach((slideCandidate, i) => {
    if (slideCandidate === slide) {
      document
        .querySelector(".backgrounds")
        .childNodes[i].classList.add("splash-page");
    }
  });
};
