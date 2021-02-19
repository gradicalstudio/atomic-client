import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingSkeleton() {
  return (
    <div>
      <SkeletonTheme color="#dedede">
        <Skeleton />
      </SkeletonTheme>
    </div>
  );
}
