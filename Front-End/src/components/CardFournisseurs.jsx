import { faMapMarkerAlt, faStar, faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFournisseurs = () => {
    const dat_a = [
        { id: 1, name: "Electricity Store", desc: "Matériel électrique pro", nomFour: "Soufiane", rating: "5.0", reviews: 12, location: "Settat", image: "images/storeelectri.png", imageFour:"images/avatar-4.jpg" },
        { id: 2, name: "Plumbing store", desc: "Magasin de matériel de plombier", nomFour: "Amine", rating: "4.8", reviews: 8, location: "Casablanca", image: "images/storeplomb.png", imageFour:"images/avatar-6.jpg" },
        { id: 3, name: "Paint store", desc: "Magasin de matériel de Peinture", nomFour: "Yassine", rating: "4.9", reviews: 15, location: "Rabat", image: "images/storepeinture.jpeg", imageFour:"images/avatar-3.jpg" },
    ];

    return (
        <div className="container py-5">
            <hr className='fw-bold'/>
            <div className="text-center mt-5">
                    <h1 className="fw-bold display-5 mb-3">Nos magasins qualifiés</h1>
                    <p className="text-primary fw-semibold fs-5">
                        Découvrez des professionnels vérifiés et notés par la communauté
                    </p>
            </div>
            <div className="row">
                {dat_a.map((art) => (
                    <div className="col-md-4 mb-4" key={art.id}>
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
                            <div className="position-relative">
                                <img src={art.image} className="card-img-top" style={{ height: '180px', objectFit: 'cover' }} alt={art.name} />
                                <span className="position-absolute top-0 end-0 m-3 badge rounded-pill bg-white text-dark shadow-sm py-2 px-3">
                                    <FontAwesomeIcon icon={faStore} className="me-1 text-primary" /> Magasin
                                </span>
                            </div>

                            <div className="card-body p-4 d-flex flex-column">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="rounded-circle me-3 overflow-hidden border border-2 border-light shadow-sm" style={{ width: '52px', height: '52px', minWidth: '52px' }}>
                                        <img src={art.imageFour} alt={art.nomFour} className="w-100 h-100 object-fit-cover" />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 fw-bold">{art.name}</h6>
                                        <div className="text-primary fw-medium small">Gérant: {art.nomFour}</div>
                                    </div>
                                </div>

                                <p className="text-muted small mb-3">{art.desc}</p>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="text-warning small me-2">
                                        {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                                    </div>
                                    <span className="fw-bold small">{art.rating}</span>
                                    <span className="text-muted small ms-1">({art.reviews} Avis)</span>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                                    <div className="text-muted small">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-danger" /> {art.location}
                                    </div>
                                    <button className="btn btn-primary btn-sm rounded-pill px-3 fw-bold shadow-sm" id="btn_for">
                                        Voir Produits
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <p className="fw-bold text-end" id="par1">voir tous</p>
            </div>
        </div>
    );
};

export default CardFournisseurs;