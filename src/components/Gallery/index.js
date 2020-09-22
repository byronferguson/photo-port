import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/small/commercial/0.jpg';

export default function Gallery(props) {
  const currentGallery = {
    name: 'commercial',
    description:
      'Photos of grocery stores, food trucks, and other commercial projects',
  };

  return (
    <section>
      <h1>{capitalizeFirstLetter(currentGallery.name)}</h1>
      <p>{currentGallery.description}</p>
      <div>
        <img
          src={photo}
          alt="Commercial Example"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}