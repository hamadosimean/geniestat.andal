import React from "react";
import { Link } from "react-router-dom";
import contactUsImage from "../medias/3d-fluency-support-female.png";
import { IconButton } from "@mui/material";
import {
  Email,
  Telegram,
  Facebook,
  LinkedIn,
  WhatsApp,
  Instagram,
  X,
  Phone,
} from "@mui/icons-material";
import GoToTopButton from "./goToTop";

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-white pb-6">
      <div className="mb-6">
        <img src={contactUsImage} alt="Contact Us" className="size-32" />
      </div>

      <div className="flex flex-col items-start space-y-4 ml-4">
        <Link
          to="mailto:geniestat.andal@gmail.com"
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="Email">
            <Email />
          </IconButton>
          <span className="ml-2">geniestat.andal@gmail.com</span>
        </Link>

        <Link
          to="tel:22655674512"
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="Phone">
            <Phone />
          </IconButton>
          <span className="ml-2">(+226) 55674512 / 73439675</span>
        </Link>

        <p className="text-blue-600 font-bold mt-4 mb-2">Réseaux sociaux</p>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="WhatsApp">
            <WhatsApp />
          </IconButton>
          <span className="ml-2">WhatsApp</span>
        </Link>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="Facebook">
            <Facebook />
          </IconButton>
          <span className="ml-2">Facebook</span>
        </Link>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="Instagram">
            <Instagram />
          </IconButton>
          <span className="ml-2">Instagram</span>
        </Link>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="Telegram">
            <Telegram />
          </IconButton>
          <span className="ml-2">Telegram</span>
        </Link>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="LinkedIn">
            <LinkedIn />
          </IconButton>
          <span className="ml-2">LinkedIn</span>
        </Link>

        <Link
          to=""
          className="text-black flex items-center hover:underline"
          target="_blank"
        >
          <IconButton aria-label="X">
            <X />
          </IconButton>
          <span className="ml-2">X</span>
        </Link>
      </div>

      <div className="mt-4">
        <Link
          to="https://chat.whatsapp.com/JM0GpLrx6yz2DTJWyRdmQa"
          className="text-blue-500 underline"
        >
          Rejoignez notre communauté
        </Link>
      </div>

      <GoToTopButton />
    </div>
  );
};

export default Contact;
