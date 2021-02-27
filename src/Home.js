import { useState } from "react";
const Home = () => {
  const [name, setName] = useState("mesut");
  const [age, setAge] = useState(30);
  //first parameter is event. event.target.value
  const handleClick = (e) => {
    console.log("Hello ...", e);
    setName("new name " + Math.random() * 10);
    console.log(name);
  };

  const handleClickAgain = (name, e) => {
    console.log("Click again name:" + name, e);
  };
  return (
    <div>
      <h1>Home</h1>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={
          //first parameter is event.
          (e) => {
            //console.log("Click me Again");
            handleClickAgain("mesut", e);
          }
        }
      >
        Click me Again
      </button>
    </div>
  );
};

export default Home;
