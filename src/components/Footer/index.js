import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';


function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="Logo Spockfy" style={{height: "40px"}} />
    </FooterBase>
  );
}

export default Footer;
