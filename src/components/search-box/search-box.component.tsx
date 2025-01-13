import { ChangeEvent, ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  className: "string";
  placeHolder?: "string";
  onChangeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
};
const SearchBox = ({
  className,
  placeHolder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeHolder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
