import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=" pt-5 pb-4" style={{ backgroundColor: '#111827', color: '#f3f4f6' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h5 className="text-uppercase fw-bold mb-4" id="par1">Bricol'Connect</h5>
                        <p>
                            Votre destination de référence pour trouver un <b>Artisan</b>, 
                            explorer des <b>magasins</b> ou dénicher le <b>produit parfait</b>.
                        </p>
                        <div className="d-flex gap-3 mt-4">
                            <a href="#" className="text-white fs-5"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#" className="text-white fs-5"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#" className="text-white fs-5"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        </div>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 border-bottom pb-2" style={{width: 'fit-content'}}>Liens</h6>
                        <p><HashLink smooth to="/#header-section" className="text-white text-decoration-none">Accueil</HashLink></p>
                        <p><HashLink smooth to="/#artisans-section" className="text-white text-decoration-none">Artisans</HashLink></p>
                        <p><HashLink smooth to="/#services-section" className="text-white text-decoration-none">Services</HashLink></p>
                        <p><HashLink smooth to="/#avis-section" className="text-white text-decoration-none">Avis</HashLink></p>
                        <p><HashLink smooth to="/#contact-section" className="text-white text-decoration-none">Contact</HashLink></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 border-bottom pb-2" style={{width: 'fit-content'}}>Contact</h6>
                        <p className="small"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-primary" /> Maroc, Marrakech, Rue El Nakhile</p>
                        <p className="small"><FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" /> bricolconnect@gmail.com</p>
                        <p className="small"><FontAwesomeIcon icon={faPhoneAlt} className="me-2 text-primary" /> +212 6 57 70 02 73</p>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4 border-bottom pb-2" style={{width: 'fit-content'}}>Newsletter</h6>
                        <p className="small">Inscrivez-vous pour recevoir nos offres exclusives.</p>
                        <div className="input-group">
                            <input type="email" className="form-control border-0" placeholder="Votre email" />
                            <button className="btn btn-primary" type="button">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-4 text-secondary" />

                <div className="row align-items-center ">
                    <div className="col-12 text-center">
                        <p className="small mb-0 ">
                            © 2026 Copyright: <span className="fw-bold">Bricol'Connect.com</span> | Tous droits réservés
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;