import { render, RenderResult } from "@testing-library/react";
import React from "react";
import ListContainer, { ListContainerProps } from "../ListContainer";

describe("list container rendering", () => {
  let wrapper: RenderResult;
  let wrapperRef = React.createRef<HTMLDivElement>();
  const data = ["hello", "1", "2", "3"];
  const props: ListContainerProps<string> = {
    wrapperRef,
    data,
    isLoading: false,
    header: <div data-testid="header">This is header</div>,
    renderItem: (item, index) => (
      <div data-testid="item" key={index}>
        {item}
      </div>
    ),
    footer: <div data-testid="footer">This is footer</div>,
    suspense: <div data-testid="suspense"> This is suspense </div>,
  };

  beforeEach(() => {
    wrapper = render(
      <div ref={wrapperRef}>
        <ListContainer<string> {...props} />
      </div>
    );
  });

  it("should render all elements on screen", () => {
    const list = wrapper.queryAllByTestId("item");

    expect(list.length).toEqual(data.length);
  });
  it("should render header", () => {
    const header = wrapper.queryByTestId("header");

    expect(header).toBeInTheDocument();
  });
  it("should render footer", () => {
    const footer = wrapper.queryByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
  it("should not render suspense when is not loading", async () => {
    const suspense = wrapper.queryByTestId("suspense");

    expect(suspense).not.toBeInTheDocument();
  });
  it("should render suspense when is loading", async () => {
    wrapper = render(
      <div ref={wrapperRef}>
        <ListContainer<string> {...props} isLoading={true} />
      </div>
    );

    const suspense = wrapper.queryByTestId("suspense");

    expect(suspense).toBeInTheDocument();
  });
  it("should call onBottom once", async () => {
    const onBottom = jest.fn();

    wrapper = render(
      <div ref={wrapperRef}>
        <ListContainer<string>
          {...props}
          isLoading={true}
          onBottom={onBottom}
        />
      </div>
    );

    expect(onBottom).toBeCalledTimes(1);
  });
});
