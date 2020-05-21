import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

import CollectionContext from "../../contexts/collections/collections.context";

const CollectionsOverview = ({ match }) => {
  const collectionsObject = useContext(CollectionContext);
  const collections = Object.keys(collectionsObject).map(
    (collection) => collectionsObject[collection]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} {...match} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
