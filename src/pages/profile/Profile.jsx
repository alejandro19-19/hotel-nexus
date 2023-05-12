import "./profile.scss";
import { Settings } from "../../components/settings/Settings";
import Header from "../../components/header/Header";
import { Box} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import home_icon from "../../assets/home2.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState({
    nombre: "Diego",
    apellido: "Chaverra",
    email: "diego@diego.com",
    direccion: "por ahí",
    fecha_nacimiento: "2023-02-02",
  });
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  function submit(e) {
    console.log(enviado);
  }
  return (
    <div className="Profile">
      <div
        className="home_profile"
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src={home_icon} alt="home" />
      </div>
      <div className="settings_profile">
        <Settings />
      </div>
      <Header title={"Profile"} subtitle={"Manage yuor information"} />
      <div className="formulario">
        <p>Datos personales</p>
        <Formik onSubmit={submit} initialValues={data}>
          {({
            values,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Box className="input_form" sx={{gridColumn: "span 2"}}>
                  <p className="title">Nombre</p>
                  <p className="data">{values.nombre}</p>
                </Box>
                <Box className="input_form" sx={{gridColumn: "span 2"}}>
                  <p className="title">Apellido</p>
                  <p className="data">{values.apellido}</p>
                </Box>
                <Box className="input_form" sx={{gridColumn: "span 4"}}>
                  <p className="title">Email</p>
                  <p className="data">{values.email}</p>
                </Box>
                <Box className="input_form" sx={{gridColumn: "span 4"}}>
                  <p className="title">Dirección de residencia</p>
                  <p className="data">{values.direccion}</p>
                </Box>
                <Box className="input_form" sx={{gridColumn: "span 2"}}>
                  <p className="title">Fecha de nacimiento</p>
                  <p className="data">{values.fecha_nacimiento}</p>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
