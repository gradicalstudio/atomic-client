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
