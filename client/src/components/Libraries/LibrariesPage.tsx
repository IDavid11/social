import React, { useState, useEffect } from "react";
import { ILibrary } from "../../interfaces/ILibrary";
import API from "services/api";
import CloseLibraries from "./components/CloseLibraries";
import LibrariesList from "./components/LibrariesList";
import PopularLibraries from "./components/PopularLibraries";

const LibrariesPage = () => {
  const [libraries, setLibraries]: [ILibrary[], (libraries: ILibrary[]) => void] = useState([]);

  const getLibraries = async () => {
    const res = await API.getLibraries();
    setLibraries(res.data);
  };

  useEffect(() => {
    getLibraries();
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt100">
        <LibrariesList libraries={libraries} />
      </div>
      <div className="container container-mt100">
        <CloseLibraries libraries={libraries} />
      </div>
      <div className="container container-mt100">
        <PopularLibraries libraries={libraries} />
      </div>
    </div>
  );
};

export default LibrariesPage;
