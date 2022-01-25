import React, { useState, useEffect } from 'react';

function getShortenUrl() {
  const [urls, setUrls] = useState([])
  const [error, setError] = useState(null);
  const [items, setItems] = useState({});

  setUrls ((newUrl) => 
    [...urls, newUrl]
  )

  useEffect(() => {
    fetch("https://api.shrtco.de/v2/shorten?url=https://fr.reactjs.org/docs/faq-ajax.html")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setUrls(result.result.short_link);
          setItems(result);
          console.log(urls);
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


export default getShortenUrl;
