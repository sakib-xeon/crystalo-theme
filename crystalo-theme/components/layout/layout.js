import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer-section/footer/footer"
import TopBar from "./components/top-header/top-header";
import FooterBottom from "./components/footer-section/footer/footer-bottom-area";
import FooterContact from "./components/footer-section/footer-2/footer-contact";
import FooterBottomArea from "./components/footer-section/footer-2/footer-bottom-area";
import Footertwo from "./components/footer-section/footer-2/footer-two";
function Layout({children}){
    return(
        <div class="boxed_wrapper">
             <div class="preloader"></div>
            <TopBar/>
            <Header/>
            {children}
            <Footertwo/>
            <FooterContact/>
            <FooterBottomArea/>
            <div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"></span></div>
            
        </div>
    )
}
export default Layout;