import React from 'react';
import { Container, Navbar, Nav } from 'bootstrap-4-react';
import Icons from '../svg/icons.jsx';

export const SocialLinks = () =>
    <div>
        <a href="#"><img alt="facebook" src={Icons.facebook} /></a>
        <a href="#"><img alt="twitter" src={Icons.twitter} /></a>
        <a href="#"><img alt="instagram" src={Icons.instagram} /></a>
    </div>
