import React from "react";
import Data from "../../Data";
import OneService from "./OneService";
import './Services.css'
const Services = () => {
    const serv = Data.service.map((service) => {
        return (
            <div className="col-md-3">
                <OneService title ={service.title} icon = {service.icon} />
            </div>
        )
    })
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Nos services</h2>
                        <p>Une jeune équipe passionnée par le developpement web et les technologie de l'information<br/> À votre dispostion pour tous vos projets</p>

                    </div>
                </div>
                <div className="row">
                    {serv}
                </div>
            </div>
        </section>
    )
}

export default Services;