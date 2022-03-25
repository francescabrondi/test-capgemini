import React, { useContext} from "react";
import { ImagesContext } from '../contexts/ImmaginiContext';

function Immagini() {
/*  const [photos, setPhotos] = useState([]);

  const client_id = process.env.REACT_APP_CLIENT_ID; */

  /* useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`, {})
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
  }, []); */

  const {photos} = useContext(ImagesContext);

  return (
    <main className="immagini page">
      <h1>Galleria immagini</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.urls.regular} alt="" />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Immagini;
