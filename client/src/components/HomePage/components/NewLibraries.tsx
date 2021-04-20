import { ILibrary } from "interfaces/ILibrary";
import React, { useState, useEffect } from "react";
import API from "services/api";
import NewLibrary from "./NewLibrary";

const NewLibraries = () => {
  const [libraries, setLibraries] = useState<ILibrary[]>([]);
  const [data, setData] = useState<ILibrary[]>([]);

  // Mostra as librerías creadas ordeadas por data
  const getLibraries = async () => {
    const res = await API.getLibraries();
    const formatedLibraries = res.data
      .map((library) => {
        return {
          ...library,
          createdAt: library.createdAt ? new Date(library.createdAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setLibraries(formatedLibraries);
  };

  // Mostra as 3 últimas librerías creadas nos últimos 15 días ordeadas por data
  const getLibrariesByDate = async () => {
    const res = await API.getLibraries();
    const formatedData = res.data.map((library) => {
      const date = Math.abs(new Date(library.createdAt).getTime() - new Date().getTime());
      const days = 3; // librerías creadas nos últimos X días
      const range = days * 24 * 60 * 60 * 1000; // días * horas/día * segundos * 1000 NON MODIFICAR
      if (date < range) {
        return {
          ...library,
        };
      }
    });
    var realData = [];
    for (var i = 0; i < formatedData.length; i++) {
      if (formatedData[i] !== undefined) {
        realData.push(formatedData[i]);
      }
    }
    setData(realData);
  };

  useEffect(() => {
    getLibraries();
    getLibrariesByDate();
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt100 container-new-incorporations">
        <div className="title-n2 fw-600">Nuevas incorporaciones</div>

        <div className="container-flex items-container">
          {libraries.slice(0, 3).map((library) => {
            return <NewLibrary key={library._id} library={library} />;
          })}
        </div>
        <div className="c-button">
          <a className="button" href="">
            <span>Ver más</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewLibraries;
