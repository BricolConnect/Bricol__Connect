import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const [nom,setNom] = useState('')
    const [mail,setMail] = useState('')
    const [message,setMessage] = useState('')
    return (
        <section id="contact-section" className="py-5 bg-light">
            <div className="container mt-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-dark">Contactez-Nous</h2>
                    <div className="bg-primary mx-auto" style={{ height: '3px', width: '60px' }}></div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="bg-white p-4 shadow-sm rounded-4 h-100">
                            <h5 className="fw-bold mb-4">Nos Coordonnées</h5>
                            
                            <div className="d-flex align-items-start mb-4">
                                <div className="icon-box bg-primary-subtle p-3 rounded-circle me-3 text-primary">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Adresse</h6>
                                    <p className="text-muted mb-0">Maroc, Marrakech, Rue El Nakhile</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="icon-box bg-success-subtle p-3 rounded-circle me-3 text-success">
                                    <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">Téléphone</h6>
                                    <p className="text-muted mb-0">+212 6 57 70 02 73</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start mb-4">
                                <div className="icon-box bg-info-subtle p-3 rounded-circle me-3 text-info">
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-1">E-mail</h6>
                                    <p className="text-muted mb-0">bricolconnect@gmail.com</p>
                                </div>
                            </div>

                            <div className="mt-5 pt-3 border-top">
                                <h6 className="fw-bold mb-3">Rejoignez la communauté</h6>
                                <div className="d-flex gap-2">
                                    <a href="#" className="btn btn-outline-primary rounded-circle shadow-sm">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                    <a href="#" className="btn btn-outline-danger rounded-circle shadow-sm">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a href="#" className="btn btn-outline-success rounded-circle shadow-sm">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="bg-white p-4 shadow-sm rounded-4">
                            <h5 className="fw-bold mb-4">Envoyez un message</h5>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-bold text-secondary">Nom Complet</label>
                                        <input type="text" className="form-control border-0 bg-light py-2" placeholder="Ex: Youssef" required value={nom} onChange={(e)=>setNom(e.target.value)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label small fw-bold text-secondary">Email</label>
                                        <input type="email" className="form-control border-0 bg-light py-2" placeholder="youssef@example.com" required value={mail} onChange={(e)=>setMail(e.target.value)} />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label small fw-bold text-secondary">Message</label>
                                    <textarea className="form-control border-0 bg-light" rows="5" placeholder="Votre message ici..." required value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary fw-bold shadow-sm">
                                    Envoyer le Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;