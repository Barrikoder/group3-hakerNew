import { useEffect, useState } from "react";
import "./App.css";
import Article from "./Article.js";

function App() {
  const [articles, setArticles] = useState(false);
  const [query, setQuery] = useState("React");

  const url = "https://hn.algolia.com/api/v1/search_by_date?query=react";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setArticles(json.hits);
      })

      .catch((error) => console.log(error.message));
  }, [query]);

  console.log(articles);

  return (
    <div className="App">
      <h1>My Amazing Articles</h1>

      <div className="block">
        In this exercise you will have to fetch the data from an API
        <br />
        <br />
        Look at the instructions in <strong>index.js</strong>
        <br />
        <a
          className="link"
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
        >
          Help
        </a>
      </div>

      <div className="block">
        <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={() => setArticles(articles.slice(1))}>Search</button>
        <ul id="articles">
          {articles && articles.map((article) => <Article article={article} />)}
          if article a truthy value -> yes then map
        </ul>
      </div>
    </div>
  );
}

export default App;
