import React from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatsNew = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };

    return (
        <div className ="no-print">
            <br /><br />
            <h1>What is New</h1>
            <hr className="red-line" />
            <p><h2>Migrated hosting</h2></p>
            <p>
                <ul>
                    <li>From Azure Storage account moved to AWS Cloud Front because "I can"</li>
                    <li>Played with creating extensions for Azure DevOps. <a href="https://marketplace.visualstudio.com/items?itemName=subzone.terraform-drift">Terraform Drift</a> Do not expect miracles, since this is a piece of code created within two coffee breaks. Who wants to check out more and contribute please try <a href="https://github.com/subzone/TerraformDrifter">GitHub Repository.</a></li>
                    <li>Planned to present at CodeCamp. <a href="https://codecamp.ro/codecamp-festival-2024/">Event details.</a></li>
                    <li> Besides other refactoring, migration etc, decided to dedicate some time to my self, and here are some pics to prove it </li>
                </ul>
            </p>
            <h2>Gallery</h2>
            <Slider {...settings} className="gallery">
                <div>
                    <img src="/images/pic4.jpg" alt="Pic 4" className="gallery-img" />
                </div>
                <div>
                    <img src="/images/pic5.jpg" alt="Pic 5" className="gallery-img" />
                </div>
                <div>
                    <img src="/images/pic6.jpg" alt="Pic 6" className="gallery-img" />
                </div>
                <div>
                    <img src="/images/pic1.jpg" alt="Pic 1" className="gallery-img" />
                </div>
                <div>
                    <img src="/images/pic2.jpg" alt="Pic 2" className="gallery-img" />
                </div>
            </Slider>
        </div>
    );
}

export default WhatsNew;