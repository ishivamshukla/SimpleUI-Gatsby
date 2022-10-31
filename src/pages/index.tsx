import React from "react"
import type { HeadFC } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import OffCanvasMenu from "../components/OffCanvasMenu";
import BarChart from "../components/BarChart"
import Content from "../components/Accordion";
import Slider from "../components/Slider";



const IndexPage = () => {
  return (
    <>
    <OffCanvasMenu></OffCanvasMenu>
    <Slider></Slider>
    <BarChart></BarChart>
    {/* <Content></Content> */}
    
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
