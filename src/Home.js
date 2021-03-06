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
      <div class="itservice">
        <h2>Software Development</h2>
        <p>
          With solutions developed primarily for finance sector, we provide
          services in analysis, design, development, testing and implementation
          of various applications with popular programming languages and
          technologies.
        </p>
      </div>
      <div class="itservice">
        <h2>Consultancy</h2>
        <p>
          Efficient use of Information Technologies is one of the most important
          elements for institutionsto ensure and maintain their competitive edge
          in domestic and international markets, act fast and quickly adapt to
          changing conditions. To achive this, we give Consultancy and education
          about popular programming languages such as C#, PLSql, Java and
          databases like Oracle 9i,10g,11g, MS Sql Server, MySql.
        </p>
      </div>
      <div class="itservice">
        <h2>Outsourcing</h2>
        <p>
          With our different service models we provide on your behalf
          operational efficiency for your information technology operations with
          our expert teams. We enable our clients to focus on fields with high
          professional competences.
        </p>
      </div>
    </div>
  );
};

export default Home;
