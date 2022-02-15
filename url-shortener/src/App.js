import React, { useState, useEffect } from 'react';

function getShortenUrl() {
  const [urls, setUrls] = useState([])
  const [error, setError] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
    fetch("https://api.shrtco.de/v2/shorten?url=https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array")
      .then(res => res.json())
      .then(
        (result) => {
          setUrls([urls, result]);
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
    // return <div>Chargement...</div>;
    console.log("rip");
    return "lol";
  } else {
    console.log("lol", items);
    setItems(["lol",urls, items]);
    console.log("urls", urls);
    return <ul> {items.result.short_link}</ul>
    ;
  }
}


export default getShortenUrl;
