import { useEffect, useState } from "react";
import "./App.css";

function Article(data) {
  return (JSON.stringify(data)
    // <li key={user.id}>
    //   <img src={user.picture.medium} />
    //   <p>
    //     {user.name.first} {user.name.last}
    //   </p>
    //   <div>{user.email}</div>
    //   <div>{user.phone}</div>
    // </li>
  );
}

function App() {

  const [articles, setArticles] = useState(false);

  useEffect(() => {
    const url = "https://hn.algolia.com/api/v1/search?query=react";

    // This takes the raw response from the server and returns just the json.
    const responseHandler = (response) => {
      return response.json();
    };

    fetch(url)
      .then(responseHandler)
      .then((json) => {
        console.log(json)
        setArticles(json.hits)
      }
      )
  },
    []);

  return (
    <div className="App">
      <h1>My Amazing Users</h1>

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
        <button onClick={() => setArticles(articles.slice(1))}>Remove first</button>
        <ul id="users">
          {articles && articles.map(Article)}
        </ul>
      </div>
    </div>
  );
}

export default App;