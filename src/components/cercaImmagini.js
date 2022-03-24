import React, { useState, useEffect } from "react";

function Cercaimmagini() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");

  const client_id = "J7TD571817VyjgGe0S-Z_LRDYxMPU-TqowqVxMN58p0";

  const test = console.log(query);

  useEffect(() => {
    query &&
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=${query}`,
        {}
      )
        .then((res) => res.json())
        .then((result) => {
          setPhotos(result.results);
        });
  }, [query]);

  console.log(photos.results);

  return (
    <main className="immagini page">
      <h1>Ricerca immagini</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {photos.length > 0 &&
          photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.urls.regular} alt="" />
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Cercaimmagini;
