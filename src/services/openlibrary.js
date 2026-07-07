const BASE_URL = "https://openlibrary.org/search.json";

export const fetchBooks = async ({ page = 1, limit = 15, sort = "title" }) => {
  const offset = (page - 1) * limit;

  let queryParts = [];
  queryParts.push("first_publish_year:[1440 TO 1929]");
  queryParts.push("has_fulltext=true");

  let sortParam = "";
  switch (sort) {
    case "title":
      sortParam = "sort=title";
      break;
    case "new":
      sortParam = "sort=new";
      break;
    case "old":
      sortParam = "sort=old";
      break;
    default:
      sortParam = "sort=title";
  }

  queryParts.push(sortParam);

  const query = queryParts.join("&");

  const url = `${BASE_URL}?q=${query}&limit=${limit}&offset=${offset}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await response.json();

  return {
    books: data.docs,
    totalItems: data.numFound,
    cover: data.cover_i,
    bookKey: data.cover_edition_key,
    currentPage: page,
    totalPages: Math.ceil(data.numFound / limit),
  };
};
