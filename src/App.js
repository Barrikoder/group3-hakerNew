import { useEffect, useState } from "react";
import "./App.css";

function Article(data) {
  return (
    <div>
    {data.title}
    </div>

 // rewrite following up html

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
  const url = "https://hn.algolia.com/api/v1/search?query=react";
  const [articles, setArticles] = useState(false);
  const [input, setInput] = useState(url);
  const handleChange = (event) => setInput(event.target.value);

  useEffect(() => {
    // This takes the raw response from the server and returns just the json.
    const responseHandler = (response) => {
      return response.json();
    };

    fetch(input)
      .then(responseHandler)
      .then((json) => {
        console.log(json)
        setArticles(json.hits)
      }
      )
  },
    [input]);

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
        <input 
        type="text" 
        value={input}
        onChange={handleChange}
        >

        </input>

        <ul id="articles">
          {articles && articles.map(Article)}
        </ul>
      </div>
    </div>
  );
}

export default App;