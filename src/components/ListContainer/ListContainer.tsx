import { Box, CircularProgress } from "@material-ui/core";
import React, { Fragment, ReactNode, useEffect, useState } from "react";

export interface ListContainerProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  onBottom?: () => void;
  footer?: ReactNode;
  header?: ReactNode;
  wrapperRef: React.MutableRefObject<HTMLElement | null>;
  isLoading?: boolean;
  suspense?: ReactNode;
}

function ListContainer<T>({
  renderItem,
  data,
  onBottom,
  footer,
  header,
  wrapperRef,
  isLoading,
  suspense,
}: ListContainerProps<T>) {
  const [wasBottomCalled, setWasBottomCalled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (wrapperRef?.current) {
        if (
          wrapperRef.current.getBoundingClientRect()?.bottom <=
          window.innerHeight
        ) {
          if (onBottom && !wasBottomCalled) {
            setWasBottomCalled(true);
            onBottom();
          }
        } else setWasBottomCalled(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, false);
    return () => window.removeEventListener("scroll", onScroll, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBottom, wasBottomCalled]);

  return (
    <Fragment>
      {header}
      {Array.isArray(data) &&
        typeof renderItem === "function" &&
        data.map((item, index) => (
          <Fragment key={index}>{renderItem(item, index)}</Fragment>
        ))}
      {isLoading
        ? suspense || (
            <Box
              width="100%"
              display="flex"
              justifyContent="flex"
              alignItems="flex"
            >
              <CircularProgress />
            </Box>
          )
        : null}
      {footer}
    </Fragment>
  );
}

export default ListContainer;
