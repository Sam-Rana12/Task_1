import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState();
  const callSetFlag = (data) => {
    if (flag == data) {
      setFlag(-1);
      return;
    }
    setFlag(data);
  };
  useEffect(() => {
    const fetchTodos = async () => {
      await fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((d) => {
          setData(d);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchTodos();
  }, []);

  console.log(data);
  return (
    <div className="main">
      <h1 className="App">Home Page</h1>
      <div className="outerBox">
        {data.map((a, key) => {
          return (
            <div
              className="innerBox"
              key={key}
              onClick={() => callSetFlag(key)}
            >
              <div className="box1">
                <span>{a.name}</span>
                <span>{a.email}</span>
              </div>
              <div className="bodyBox">
                {flag == key ? <div>{a.body}</div> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;