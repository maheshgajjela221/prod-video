import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>my viideeo mahesh</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
