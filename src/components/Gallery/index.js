import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

export default function Gallery({ currentGallery }) {
  const { name, description } = currentGallery;

  return (
    <section>
      <h1>{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      <PhotoList category={name} />
    </section>
  );
}
