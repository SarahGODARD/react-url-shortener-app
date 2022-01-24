import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [error, setError] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch("https://api.shrtco.de/v2/shorten?url=https://fr.reactjs.org/docs/faq-ajax.html")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setItems(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!items.result) {
    return <div>Chargement...</div>;
  } else {
    console.log("lol", items);
    return (
      <ul>
        {items.result.short_link}
      </ul>
    );
  }
}


export default MyComponent;
