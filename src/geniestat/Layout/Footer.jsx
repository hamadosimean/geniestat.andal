import React from "react";
import { NavLink } from "react-router-dom";
import {
  Facebook,
  WhatsApp,
  Instagram,
  Telegram,
  LinkedIn,
  X,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import logo from "../medias/IMG-20231129-WA0038.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-slate-800 text-white">
      <div className="flex flex-col md:flex-row justify-around py-6 px-4">
        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="GenieStat Logo" className="h-14 w-18" />
          </NavLink>
          <NavLink to="blog" className="hover:underline">
            Blog
          </NavLink>
          <NavLink to="product" className="hover:underline">
            Produits
          </NavLink>
          <NavLink to="galery" className="hover:underline">
            Galery
          </NavLink>
          <NavLink to="certificats" className="hover:underline">
            Certificats & Attestation
          </NavLink>
          <NavLink
            to="mailto:geniestat.andal@gmail.com"
            className="hover:underline"
          >
            geniestat.andal@gmail.com
          </NavLink>
          <p>(+226) 73439675 / 55674512 / 79143616</p>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Nos Services</p>
          <NavLink to="/data-service" className="hover:underline">
            Services de données
          </NavLink>
          <NavLink to="/technologies" className="hover:underline">
            Service de la technologie
          </NavLink>

          <NavLink to="/digital-marketing" className="hover:underline">
            Marketing digital
          </NavLink>
          <NavLink to="/english" className="hover:underline">
            Anglais
          </NavLink>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Liens Utiles</p>
          <NavLink to="/terms-of-use" className="hover:underline">
            Conditions d'utilisation
          </NavLink>
          <NavLink to="/help" className="hover:underline">
            Aide
          </NavLink>
          <NavLink to="/career" className="hover:underline">
            Carrière
          </NavLink>
          <NavLink to="/team" className="hover:underline">
            Équipe
          </NavLink>
          <NavLink
            to="https://chat.whatsapp.com/JM0GpLrx6yz2DTJWyRdmQa"
            className="hover:underline"
          >
            Communauté
          </NavLink>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Réseaux Sociaux</p>
          <NavLink
            to="https://chat.whatsapp.com/Fca2KdYNPgaBygUXoKuOie"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <IconButton aria-label="WhatsApp">
              <WhatsApp />
            </IconButton>
            <span className="ml-2">WhatsApp</span>
          </NavLink>
          <NavLink to="" className="flex items-center hover:underline">
            <IconButton aria-label="Facebook">
              <Facebook />
            </IconButton>
            <span className="ml-2">Facebook</span>
          </NavLink>
          <NavLink to="" className="flex items-center hover:underline">
            <IconButton aria-label="Instagram">
              <Instagram />
            </IconButton>
            <span className="ml-2">Instagram</span>
          </NavLink>
          <NavLink to="" className="flex items-center hover:underline">
            <IconButton aria-label="Telegram">
              <Telegram />
            </IconButton>
            <span className="ml-2">Telegram</span>
          </NavLink>
          <NavLink to="" className="flex items-center hover:underline">
            <IconButton aria-label="Linkedin">
              <LinkedIn />
            </IconButton>
            <span className="ml-2">LinkedIn</span>
          </NavLink>
          <NavLink to="" className="flex items-center hover:underline">
            <IconButton aria-label="X">
              <X />
            </IconButton>
            <span className="ml-2">X</span>
          </NavLink>
        </div>
      </div>

      <p className="text-center py-4 bg-black">
        Copyright &copy; {new Date().getFullYear()} GENIESTAT Andal . Design by{" "}
        <NavLink
          to="https://hamado-simean.netlify.app/"
          className="text-blue-400"
          target="_blank"
        >
          Hamado Simean
        </NavLink>
      </p>
    </div>
  );
};

export default Footer;
