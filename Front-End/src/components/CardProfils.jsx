import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardProfils = () => {
    const dat_a = [
    { id: 1, name: "Mahdi Ashref", job: "Plombier", rating: "5.0", reviews: 12, location: "Settat", image: "images/acuel_v1.jpg", desc:"Expert en installation et réparation. 15 ans d'expérience." },
    { id: 2, name: "Sara Grite", job: "Électricienne", rating: "4.8", reviews: 8, location: "Rabat", image: "images/acuel_v2.jpg", desc:"Spécialiste en installations électriques et domotique." },
    { id: 3, name: "Fatima Kamli", job: "Menuisière", rating: "4.9", reviews: 15, location: "Tanger", image: "images/acuel_v1.jpg", desc:"Création sur mesure de meubles et aménagements." },
  ];
    return(
        <>
            <div className="container" id="artisans-section">
                <div className="row">
                    {
                        dat_a.map((art)=>(

                            <div className="col-md-4 mb-4" key={art.id}>
                                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                                    <div className="position-relative">
                                        <img src={art.image} className="card-img-top" id="img_card" alt="job" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="bg-secondary rounded-circle me-2 overflow-hidden shadow-sm" id="div_img">
                                                <img src={art.image} alt="acuel1" className="w-100 h-100 object-fit-cover" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0 fw-bold">{art.name}</h6>
                                                <small className="text-muted">{art.job}</small>
                                            </div>
                                        </div>
                                    <div className="d-flex align-items-center">
                                        <div className="text-warning small me-2">
                                            {
                                                [...Array(5)].map((_,i)=>(
                                                    <FontAwesomeIcon key={i} icon={faStar} />
                                                ))
                                            }
                                        </div>
                                        <span className="fw-bold small">{art.rating}</span>
                                        <span className="text-muted small ms-1">{art.reviews} Avis</span>
                                    </div>
                                    <p className="text-muted">{art.desc}</p>
                                <div className="d-flex justify-content-between align-items-center mt-auto">
                                    <div className="text-muted small">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-secondary" /> Maroc, Rabat
                                    </div>
                                    <button className="btn btn-primary px-4 py-2 rounded-pill fw-bold btn-sm shadow-sm">Contacter</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                        ))
                    }
                </div>
                    <div className="text-center mt-3">
                        <button className="btn btn-primary rounded-pill px-5 py-2 fw-bold shadow-sm">
                            Voir Tous Les Artisans
                        </button>
                    </div>
            </div>
        </>
    )
}
export default CardProfils