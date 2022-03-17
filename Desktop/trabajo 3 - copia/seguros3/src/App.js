import logo from "./logo.svg";
import maleta from "./maleta.svg";
import flecha from "./flecha.svg";
import fle from "./fle.svg";
import lupa from "./lupa.svg";

import escudo from "./escudo.svg";
import cedula from "./cedula.svg";
import IconUser from "./IconUser.svg";
import car from "./car.svg";

import mira from "./mira.svg";
import iconoPerfil from "./iconoPerfil.svg";
import perfil from "./perfil.svg";
import "./App.css";
import {
  Select,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import React from "react";

function App() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <body>
      <div class="App">
        <div className="App-header">
          <img src={logo} className="App-header-logo" alt="logo" />

          <table className="App-header-tabla-datos-perfil">
            <tbody>
              <tr>
                <td>
                  <img
                    src={flecha}
                    className="App-header-datos-flecha"
                    alt="flecha"
                  />
                </td>
                <td>
                  <span className="App-header-datos-usuario">
                    Andres Salamanca
                  </span>
                </td>
                <td>
                  <img
                    src={iconoPerfil}
                    className="App-header-datos-icono-perfil"
                    alt="iconoPerfil"
                  />
                </td>
                <td>
                  <button className="App-header-datos-boton-cerrar-sesion">
                    Cerrar sesión{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="App-body">
          <div className="App-body-migas-pan">
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Oficina en línea</p>
                  </td>
                  <td>
                    <img src={fle} className="App-logo" alt="fle.svg" />
                  </td>
                  <td>
                    <p className="App-body-Gestion">Gestión de pólizas</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="App-body-consulta">
            <table className="App-body-table">
              <tbody>
                <tr>
                  <td colSpan={3} className="App-body-consulta-maleta">
                    <img
                      src={maleta}
                      className="App-body-consulta-maleta"
                      alt="maleta.svg"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} className="App-body-table-titulos">
                    <span>
                      <h1>Gestión de pólizas de autos colectivo</h1>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="App-body-table-titulos-texto-2">
                      Para buscar una póliza, selecciona el criterio de búsqueda
                      e ingresa la información en el buscador
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="App-body-table-titulos-texto">
                    <td>
                  <select className="registroHora1">
                    <option value="Identificación Tomador">Identificación Tomador</option>
                    <option value="ortodoncia">Identificación Asegurado</option>
                    <option value="protesis">Número Póliza</option>
                    <option value="protesis">Placa</option>
                  </select>
                </td>
                    <td>
                      <input
                        id="registroHora2"
                        style={{ border: "none" }}
                        label="Direcciones vigentes"
                        defaultValue=""
                        variant="filled"
                      />
                    </td>
                  </td>
                  <td className="App-body-table-titulos-buscador">
                    <Button variant="text">
                      {" "}
                      <img
                        src={lupa}
                        className="App-body-table-titulos-buscador-lupa"
                        alt="lupa"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <br></br>
          <div className="App-body-table-titulos-buscador-contenedor2">
            <table style={{'width':'1200px'}}>
              <tr>
                <td>
                  <img
                    src={cedula}
                    className="App-body-table-titulos-cedula"
                    alt="cedula"
                  />
                </td>
                <td>
                  <p className="App-body-tablaX2-tablilla1-identidad">Identificacion</p>
                  <h4 className="App-body-tablaX2-tablilla1-numero">79724626</h4>
                  <h6 className="App-body-tablaX2-tablilla1-CCiudadania">cedula  <br></br>ciudadania</h6>
                </td>
                <td rowSpan={2}>
                  <img
                    src={IconUser}
                    className="App-body-table-titulos-IconUser"
                    alt="IconUser"
                  />
                </td>
                <td>
                  <p className="App-body-tablaX2-tablilla2-Tomador">Tomador</p>
                  <h3 className="App-body-tablaX2-tablilla2-PST">PST PAPER <br></br> SUPPLIES TRADER S.A.S</h3>
                </td>
              <td rowSpan={2}>
                <img
                    src={car}
                    className="App-body-table-titulos-car"
                    alt="car"
                  />
              </td>

              <td>
                <p className="App-body-tablaX2-tablilla3-No_riesgos"> No. Riesgos </p>
                <h5 className="App-body-tablaX2-tablilla3-Vigentes"> Vigentes 10 </h5>
                <h5 className="App-body-tablaX2-tablilla3-Anulados"> Anulados 3 </h5>
              </td>

              <td>
              <img
                    src={escudo}
                    className="App-body-table-titulos-escudo"
                    alt="escudo"
                  />
              </td>
              <td>
                <p className="App-body-tablaX2-tablilla4-No_poliza"> No. Póliza </p>
                <h4 className="App-body-tablaX2-tablilla4-57322"> 57322 </h4>
              </td>

              <td>
                <p className="App-body-tablaX2-tablilla5-Estado"> No. Póliza </p>
                <p className="App-body-tablaX2-tablilla5-vigente"> vigente </p>
              </td>

              <td> 
                <button className="App-body-tablaX2-tablilla5-boton"> Consultar y Gestionar </button>
              </td>



              </tr>
            </table>
          </div>

          <br></br>
          <br></br>
          <div className="App-body-resultados">
            <h2 className="App-body-resultados-titulo">
              Próximas a vencer, tienes
            </h2>
            <table className="App-body-table-resultados">
              <tbody>
                <tr>
                  <td>
                    <img
                      src={mira}
                      className="App-body-table-titulos-mira"
                      alt="mira"
                    />
                  </td>
                  <td>
                    <h1 className="App-body-resultados-numero">12</h1>
                  </td>
                  <td>
                    <h4 className="App-body-resultados-texto">
                      Negocios por renovar
                    </h4>
                  </td>
                  <td>
                    <button className="App-body-resultados-ver-polizas">
                      Ver pólizas
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="App-body-resultados-ver-polizas-hr"></hr>
          <p className="App-body-resultados-ver-polizas-hr-liberty">
            Liberty 2022. Todos los derechos reservados
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
