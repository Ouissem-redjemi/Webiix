import React from "react";
import './Header.css'
import { Button } from "react-bootstrap";

const Header = () => {
    return (
        <header>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Nous vous aidons avec vos <br/>différents projets !</h2>
                            <p>Metuentes igitur idem latrones Lycaoniam magna parte campestrem cum se inpares nostris fore congressione stataria documentis frequentibus scirent, tramitibus deviis petivere Pamphyliam diu quidem intactam sed timore populationum et caedium, milite per omnia diffuso propinqua, magnis undique praesidiis conmunitam.</p>
                            <Button href="/#" variant="secondary" active> Details </Button> {' '}
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;