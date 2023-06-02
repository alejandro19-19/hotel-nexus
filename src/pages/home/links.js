import profile from "../../assets/profile.jpg";
import reservations from "../../assets/img3.png";
import rooms from "../../assets/img4.jpg";

const ADMIN = "admin";
const RECEPTIONIST = "receptionist";
const CLIENT = "client";

let linksManager = [];
let linksReceptionist = [];
let linksUser = [];

export function generateLinks(type, func) {
  switch (type) {
    case ADMIN:
      return (linksManager = [
        {
          title: func("profile"),
          description: func("profile_description"),
          image: profile,
          number: 1,
          color: "red",
          path: "/profile",
        },
        {
          title: func("rooms"),
          description: func("rooms_description"),
          image: rooms,
          number: 2,
          color: "purple",
          path: "/rooms",
        },
        {
          title: func("registerRecep"),
          description: func("registerRecep_description"),
          image: rooms,
          number: 3,
          color: "red",
          path: "/recepRegister",
        },
      ]);
    case RECEPTIONIST:
      return (linksUser = [
        {
          title: func("profile"),
          description: func("profile_description"),
          image: profile,
          number: 1,
          color: "red",
          path: "/profile",
        },
        {
          title: func("rooms"),
          description: func("rooms_description"),
          image: rooms,
          number: 2,
          color: "purple",
          path: "/clientRegister",
        },
      ]);

    case CLIENT:
      return (linksUser = [
        {
          title: func("profile"),
          description: func("profile_description"),
          image: profile,
          number: 1,
          color: "red",
          path: "/profile",
        },
        {
          title: func("reservations"),
          description: func("reservations_description"),
          image: reservations,
          number: 2,
          color: "purple",
          path: "/reservations",
        },
      ]);
  }
}
