import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.scss'
import {settings} from "./sliderSettings";

const SimpleSlider = ({data}) => {
        return (
            <>
                <Slider {...settings}>
{/*                    <div>{data}</div>*/}
               {/*     <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                    <div><h3>7</h3></div>
                    <div><h3>8</h3></div>
                    <div><h3>9</h3></div>
                    <div><h3>10</h3></div>
                    <div><h3>9</h3></div>
                    <div><h3>10</h3></div>*/}
                </Slider>
            </>
        );
}

export default SimpleSlider;