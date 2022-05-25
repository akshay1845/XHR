import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isSSR, setIsSSR] = useState(true);
  const [apidata, setApidata] = useState("");

  var XMLHttpRequest = require("xhr2");
  const url = "https://jsonplaceholder.typicode.com/users";
  const obj = new XMLHttpRequest();

  //----XMLHttpRequest----
  obj.open("GET", url, true);

  const response = obj.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      return (obj.responseText); //eval() converts string in to json objects
    }
  };
  obj.send(); 

  console.log("check", response)

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <div className={styles.container}>
      <span>
        Api Testing --- <b>(XHR)</b>
      </span>
      <br />
      <br />
      {!isSSR && (
        <div className={styles.table}>
          <style jsx global>{`
          th,td{
           border: 1px solid black;
           border-collapse: collapse;
           padding:10px;
           width:100%;
         }
       `}</style> 
          <table>
            <tr>
              <thead>
                <th>UserId</th>
                <th>id</th>
                <th>title</th>
                <th>status</th>
              </thead>
            </tr>

            <tbody></tbody>
          </table>
        </div>
      )}

      <div>{apidata.length > 0 && apidata.map((val) => val.data)}</div>
    </div>
  );
}
