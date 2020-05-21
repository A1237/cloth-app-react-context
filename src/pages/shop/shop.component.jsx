import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";

const CollectionPage = lazy(() => import("../collection/collection.component"));

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Suspense fallback={<div>...loading</div>}>
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Suspense>
  </div>
);

export default ShopPage;
