import React, {useState, useEffect}  from 'react'


function Immagini() {
    const [photos, setPhotos] = useState([]);
    

    const client_id = "J7TD571817VyjgGe0S-Z_LRDYxMPU-TqowqVxMN58p0";

   
    useEffect(() => {
      fetch(`https://api.unsplash.com/photos/?client_id=${client_id}`, {

        })
          .then(res => res.json())
          .then(
            (result) => {
              setPhotos(result);
            },
          )
      }, []);

    
        return (
            <div className="immagini page">
              <h1>Galleria immagini</h1>
<ul>
    {photos.map(photo => 
        <li key={photo.id}>
        <img src={photo.urls.regular} alt="" /></li>)}
</ul>
               
            </div>
        );
   
    }


export default Immagini
