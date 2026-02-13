import Navbar from "../components/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSearch, faStar, faUsers  } from '@fortawesome/free-solid-svg-icons';
import ServiceGrid from "../components/ServiceGrid";
import ArtisanFilter from "../components/ArtisanFilter";
import CardProfils from "../components/CardProfils";
import CardFournisseurs from "../components/CardFournisseurs";
import Footer from "../components/Footer";
import AvisClient from "../components/AvisClient";
import Contact from "../components/Contact";

const Accueil_visiteur = () => {



    return (
        <>
            <Navbar/>
            <header className="position-relative w-100" id="header-section">
                <div className="home-container-fluid p-0">
                    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                        
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="4000">
                                <img src="images/acuel_v2.jpg" className="d-block w-100" alt="Bricolage 1" id="im_g" />
                                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
                                <div className="carousel-caption d-none d-md-flex align-items-center h-100 w-100 text-start ps-5 position-absolute top-0 start-0">
                                    <div className="row w-100 align-items-center">
                                        <div className="col-md-6">
                                            <h2 className="display-4 fw-bold text-white mb-3">Trouvez l'artisan parfait pour vos projets</h2>
                                            <p className="lead text-white mb-4">Connectez-vous avec des artisans qualifiés et vérifiés.</p>
                                            <div className="input-group mb-3 shadow-lg bg-white rounded-pill p-1 border-0" style={{ maxWidth: '550px' }}>
                                                <span className="input-group-text bg-transparent border-0 ps-4"><FontAwesomeIcon icon={faSearch} className="text-muted" /></span>
                                                <input type="text" className="form-control shadow-none border-0" placeholder="Rechercher un service..." />
                                                <button className="btn btn-warning px-4 fw-bold rounded-pill py-2" id="bntRech">Rechercher</button>
                                            </div>
                                            <div className="d-flex align-items-center text-white mt-4 gap-4">
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faUsers} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">2,500+</span>
                                                    </div>
                                                    <small className="text-white-50">Artisans</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faStar} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">4.8/5</span>
                                                    </div>
                                                    <small className="text-white-50">Satisfaction</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">15,000+</span>
                                                    </div>
                                                    <small className="text-white-50">Projets réalisés</small>
                                                </div>
                                            </div>
                                        </div>
                                        <ServiceGrid />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="4000">
                                <img src="images/acuel_v1.jpg" className="d-block w-100" alt="Bricolage 2" id="im_g" />
                                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
                                <div className="carousel-caption d-none d-md-flex align-items-center h-100 w-100 text-start ps-5 position-absolute top-0 start-0">
                                    <div className="row w-100 align-items-center">
                                        <div className="col-md-6 mt-5">
                                            <h2 className="display-4 fw-bold text-white mb-3">Des experts pour chaque besoin</h2>
                                            <p className="lead text-white mb-4">Une solution rapide pour tous vos travaux de maison.</p>
                                            <div className="input-group mb-3 shadow-lg bg-white rounded-pill p-1 border-0" style={{ maxWidth: '550px' }}>
                                                <span className="input-group-text bg-transparent border-0 ps-4"><FontAwesomeIcon icon={faSearch} className="text-muted" /></span>
                                                <input type="text" className="form-control shadow-none border-0" placeholder="Ex: Électricien à Paris..." />
                                                <button className="btn btn-warning px-4 fw-bold rounded-pill py-2" id="bntRech">Rechercher</button>
                                            </div>
                                            <div className="d-flex align-items-center text-white mt-4 gap-4">
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faUsers} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">2,500+</span>
                                                    </div>
                                                    <small className="text-white-50">Artisans</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faStar} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">4.8/5</span>
                                                    </div>
                                                    <small className="text-white-50">Satisfaction</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">15,000+</span>
                                                    </div>
                                                    <small className="text-white-50">Projets réalisés</small>
                                                </div>
                                            </div>
                                        </div>
                                        <ServiceGrid />
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item" data-bs-interval="4000">
                                <img src="images/login_bri.avif" className="d-block w-100" alt="Bricolage 3" id="im_g" />
                                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
                                <div className="carousel-caption d-none d-md-flex align-items-center h-100 w-100 text-start ps-5 position-absolute top-0 start-0">
                                    <div className="row w-100 align-items-center">
                                        <div className="col-md-6">
                                            <h2 className="display-4 fw-bold text-white mb-3">La qualité au meilleur prix</h2>
                                            <p className="lead text-white mb-4">Réservez un professionnel certifié en quelques secondes.</p>
                                            <div className="input-group mb-3 shadow-lg bg-white rounded-pill p-1 border-0" style={{ maxWidth: '550px' }}>
                                                <span className="input-group-text bg-transparent border-0 ps-4"><FontAwesomeIcon icon={faSearch} className="text-muted" /></span>
                                                <input type="text" className="form-control shadow-none border-0" placeholder="Quel artisan cherchez-vous ?" />
                                                <button className="btn btn-warning px-4 fw-bold rounded-pill py-2" id="bntRech">Rechercher</button>
                                            </div>
                                            <div className="d-flex align-items-center text-white mt-4 gap-4">
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faUsers} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">2,500+</span>
                                                    </div>
                                                    <small className="text-white-50">Artisans</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faStar} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">4.8/5</span>
                                                    </div>
                                                    <small className="text-white-50">Satisfaction</small>
                                                </div>
                                                <div className="text-center">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-warning fw-bold me-2" />
                                                        <span className="fw-bold fs-4">15,000+</span>
                                                    </div>
                                                    <small className="text-white-50">Projets réalisés</small>
                                                </div>
                                            </div>
                                        </div>
                                        <ServiceGrid />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ArtisanFilter />
                <CardProfils />
                <CardFournisseurs />
                <Contact />
                <AvisClient />
                <Footer />
            </header>
        </>
    )
}

export default Accueil_visiteur;