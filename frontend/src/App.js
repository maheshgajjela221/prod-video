import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://54.152.180.73:8081/api")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>myhub-automatiom</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
