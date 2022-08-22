import React from "react";
import Gasto from "./Gasto";

export const ListadoGastos = ({
  gastos,
  setGastosEditar,
  eliminarGasto,
  filtros,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtros ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Gastos"
              : "No hay Gastos en esta categoría"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay Gastos aún"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};
