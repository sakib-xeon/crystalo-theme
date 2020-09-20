import Head from 'next/head'
import Slider1 from '../components/layout/components/slider/slider-1'
import Highlights from "../components/layout/components/home-section/home/highlights";
import Layout from "../components/layout/layout"
import About from '../components/layout/components/home-section/home/about';
import WorkingArea from '../components/layout/components/home-section/home/working-area';
import RecentProject from '../components/layout/components/home-section/home/recent-project';
import WorkingProcess from '../components/layout/components/home-section/home/working-process';
import Slogan from '../components/layout/components/home-section/home/slogan';
import TestimonialArea from '../components/layout/components/home-section/home/testimonial-area';
import AppointmentArea from '../components/layout/components/home-section/home/appointment-area';
import LatestBlog from '../components/layout/components/home-section/home/latest-blog';
import BrandArea from '../components/layout/components/home-section/home/brand-area';

export default function Home() {
  return (
    <div>
      <Slider1/>
      <Highlights/>
      <About/>
      <WorkingArea/>
      <RecentProject/>
      <WorkingProcess/>
      <Slogan/>
      <TestimonialArea/>
      <AppointmentArea/>
      <LatestBlog/>
      <BrandArea/>
    </div>
  )
}
