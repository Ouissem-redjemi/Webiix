import React from "react";
import Data from "../../Data";
import './realisation.css'
const Realisations = () => {
    const realisation = Data.realisations.map((real) => {
        return (
            <div className="col-md-3">
                <img src={real.url} alt={real.title}/>
                <h5>{real.title}</h5>
                <p>{real.description}</p>
            </div>
        )
    })
    return (
        <section className="realisation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Nos Réalisations</h2>
                    </div>
                </div>
                <div className="row">
                    {realisation}
                </div>
            </div>
        </section>
    )
}

export default Realisations;