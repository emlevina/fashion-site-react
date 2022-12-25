import React from 'react';
import AppDownload from './AppDownload';
import GallerySection from './GallerySection';
import LogosCarusel from './LogosCarusel';
import MainBanner from './MainBanner';
import SaleBanner from './SaleBanner';
import Subscription from './Subscription';

const Main = () => {
    return (
        <main>
            <MainBanner />
            <LogosCarusel />
            <GallerySection header="New Arrivals"/>
            <SaleBanner />
            <GallerySection header="Young's Favourite" />
            <AppDownload />
            <Subscription />
        </main>
    );
};

export default Main;