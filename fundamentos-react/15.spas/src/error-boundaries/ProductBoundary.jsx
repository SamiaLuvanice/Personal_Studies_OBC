import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 400:
        return <h2>Bad Request (400)</h2>;
      case 401:
        return <h2>Unauthorized Access (401)</h2>;
      case 404:
        return <h2>Product Not Found (404)</h2>;
      case 500:
        return <h2>Internal Server Error (500)</h2>;

    }
  }

  return (
    <section>
      <h2>Product Not Found</h2>
      <p>Sorry, we couldn't find the product you're looking for.</p>
    </section>
  );
}
