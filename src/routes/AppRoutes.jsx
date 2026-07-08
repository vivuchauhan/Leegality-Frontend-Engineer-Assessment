import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import Loader from "@/components/common/Loader";

const ProductListing = lazy(() =>
  import("@/pages/ProductListing/ProductListing")
);

const ProductDetails = lazy(() =>
  import("@/pages/ProductDetails/ProductDetails")
);

const NotFound = lazy(() =>
  import("@/pages/NotFound/NotFound")
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ProductListing />
            </Layout>
          }
        />

        <Route
          path="/product/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;