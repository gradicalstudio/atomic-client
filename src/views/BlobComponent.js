/*
This feature requires ACCESS-CONTROL-ALLOW-ORIGIN to work because it fetches images from a different origin.
Correspondingly, the server needs to be updated to allow CORS requests.
Use one of the many browser extensions that allows CORS requests for local development.
*/

import React, { useEffect } from "react";
import dataToBlob from "../scripts/blob";

export default function getBlobComponent(WrappedComponent) {
  return ({ loading, data }) => {
    useEffect(() => {
      if (!loading && data) dataToBlob(data);
    }, [loading, data]);

    return <WrappedComponent loading={loading} data={data} />;
  };
}
