import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./AppSearchBar.scss";

function AppSearchBar({ rounded, onSubmit, value }) {
  return (
    <div className={`AppSearchBar ${rounded ? "AppSearchBar__Rounded" : null}`}>
      <InputGroup className={`${rounded ? null : "mb-3"}`}>
        <InputGroup.Text>
          <FontAwesomeIcon icon={faSearch} size={`${rounded ? "sm" : "lg"}`} />
        </InputGroup.Text>
        <FormControl
          placeholder="Search free high-resolution photos"
          defaultValue={value}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit(e);
            }
          }}
        />
        <InputGroup.Text>
          <svg
            width={`${rounded ? "20" : "32"}`}
            height={`${rounded ? "20" : "32"}`}
            viewBox="0 0 32 32"
            version="1.1"
            aria-hidden="false"
          >
            <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
          </svg>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default AppSearchBar;
