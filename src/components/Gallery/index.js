import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/landscape/2.jpg";

function Gallery(props) {
    const currentCategory = {
        name: "projects",
        description:
          "Links to projects I've created",
      };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <div>
          <img
            src={photo}
            alt="Project Example"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Gallery;