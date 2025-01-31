import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import lawyer1 from "../images/lawyer1.png";
import lawyer2 from "../images/lawyer2.png";
import lawyer3 from "../images/lawyer3.png";
import lawyer4 from "../images/lawyer4.png";

import { Box } from "@mui/material";

const laywers = [
    <CarouselCard img={lawyer1} />,
    <CarouselCard img={lawyer2} />,
    <CarouselCard img={lawyer3} />,
    <CarouselCard img={lawyer4} />,
    <CarouselCard img={lawyer1} />,
    <CarouselCard img={lawyer2} />,
    <CarouselCard img={lawyer3} />,
    <CarouselCard img={lawyer4} />,
];

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: "60px",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <Box sx={{ maxWidth: "100%", mx: "auto", mt: 4 }}>
            <Slider {...settings}>
                {/* {images.map((src, index) => (
                    <Card key={index} sx={{ borderRadius: 2, mx: 1 }}>
                        <CardMedia
                            component="img"
                            height="400"
                            image={src}
                            alt={`Slide ${index + 1}`}
                        />
                    </Card>
                ))} */}
                {laywers.map((lawyer, index) => (
                    <div key={index}>{lawyer}</div>
                ))}
            </Slider>
        </Box>
    );
}
