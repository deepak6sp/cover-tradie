import React from 'react';
import { TopBar } from '../UI/topBar';
import { Navigation } from '../UI/navigation';
import { Banner } from '../UI/banner';

export const Header = () => 
    <div>
        <TopBar />
        <Navigation />
        <Banner />
    </div>;