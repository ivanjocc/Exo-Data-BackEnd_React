import React, { Fragment } from "react";
import parse from "html-react-parser";

const Accueil = ({ accueil, handleDecouvrir }) => {
  const { image, description } = accueil;
  return (
    <Fragment>
      <ImageAccueil image={image} />
      <DescriptionAccueil
        description={description}
        handleDecouvrir={handleDecouvrir}
      />
    </Fragment>
  );
};

export const ImageAccueil = ({ image }) => {
  const { url, alt } = image;
  return (
    <div className="image_accueil">
      <img src={url} alt={alt} />
    </div>
  );
};

export const DescriptionAccueil = ({ description, handleDecouvrir }) => {
  const { titre, texte, bouton } = description;
  return (
    <div className="text_accueil m-20 p-20">
      <div>
        <h1>{titre}</h1>
        {parse(texte)}
        <a
          onClick={handleDecouvrir}
          className="hover_opacity decouvrir"
          href={bouton.url}
        >
          {bouton.texte}
        </a>
      </div>
    </div>
  );
};

export default Accueil;
