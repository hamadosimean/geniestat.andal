import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="flex items-center">
            <img src={logo} alt="GenieStat Logo" className="h-14 w-18" />
          </Link>
          <Link to="blog" className="hover:underline">
            Blog
          </Link>
          <Link to="product" className="hover:underline">
            Produits
          </Link>
          <Link to="galery" className="hover:underline">
            Galery
          </Link>
          <Link to="certificats" className="hover:underline">
            Certificats & Attestation
          </Link>
          <Link
            to="mailto:geniestat.andal@gmail.com"
            className="hover:underline"
          >
            geniestat.andal@gmail.com
          </Link>
          <p>(+226) 73439675 / 55674512 / 79143616</p>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Nos Services</p>
          <Link to="/data-service" className="hover:underline">
            Services de données
          </Link>
          <Link to="/technologies" className="hover:underline">
            Service de la technologie
          </Link>

          <Link to="/digital-marketing" className="hover:underline">
            Marketing digital
          </Link>
          <Link to="/english" className="hover:underline">
            Anglais
          </Link>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Liens Utiles</p>
          <Link to="/terms-of-use" className="hover:underline">
            Conditions d'utilisation
          </Link>
          <Link to="/help" className="hover:underline">
            Aide
          </Link>
          <Link to="/career" className="hover:underline">
            Carrière
          </Link>
          <Link to="/team" className="hover:underline">
            Équipe
          </Link>
          <Link
            to="https://chat.whatsapp.com/JM0GpLrx6yz2DTJWyRdmQa"
            className="hover:underline"
          >
            Communauté
          </Link>
        </div>

        <div className="flex flex-col ml-4 mt-4 space-y-2">
          <p className="text-blue-600 font-bold">Réseaux Sociaux</p>
          <Link
            to="https://chat.whatsapp.com/Fca2KdYNPgaBygUXoKuOie"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <IconButton aria-label="WhatsApp">
              <WhatsApp />
            </IconButton>
            <span className="ml-2">WhatsApp</span>
          </Link>
          <Link to="" className="flex items-center hover:underline">
            <IconButton aria-label="Facebook">
              <Facebook />
            </IconButton>
            <span className="ml-2">Facebook</span>
          </Link>
          <Link to="" className="flex items-center hover:underline">
            <IconButton aria-label="Instagram">
              <Instagram />
            </IconButton>
            <span className="ml-2">Instagram</span>
          </Link>
          <Link to="" className="flex items-center hover:underline">
            <IconButton aria-label="Telegram">
              <Telegram />
            </IconButton>
            <span className="ml-2">Telegram</span>
          </Link>
          <Link to="" className="flex items-center hover:underline">
            <IconButton aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <span className="ml-2">LinkedIn</span>
          </Link>
          <Link to="" className="flex items-center hover:underline">
            <IconButton aria-label="X">
              <X />
            </IconButton>
            <span className="ml-2">X</span>
          </Link>
        </div>
      </div>

      <p className="text-center py-4 bg-black">
        Copyright &copy; {new Date().getFullYear()} GENIESTAT Andal . Design by{" "}
        <Link
          to="https://hamado-simean.netlify.app/"
          className="text-blue-400"
          target="_blank"
        >
          Hamado Simean
        </Link>
      </p>
    </div>
  );
};

export default Footer;
