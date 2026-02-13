import { faEye, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProduitPopulaire = () => {
    const produits = [
        {
            id: 1,
            store: "Plumbing store",
            title: "Coupe-tube & ébavureur",
            description: "Pour couper et préparer les tuyaux (cuivre, multicouche).",
            price: "89.99",
            img: "images/Coupe-tube & ébavureur.jpg"
        },
        {
            id: 2,
            store: "Menuis store",
            title: "le Bois",
            description: "naturel, esthétique, traditionnel",
            price: "150.00",
            img: "images/le Bois.jpeg"
        },
        {
            id: 3,
            store: "Electricity",
            title: "Disjoncteur",
            description: "Un dispositif électrique qui protège les installations électriques contre les surintensités et les courts-circuits.",
            price: "50.00",
            img: "images/Disjoncteur.jpeg"
        }
    ];

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold">Artisans recommandés</h5>
                <Link to='/' className="text-decoration-none fw-bold" style={{ color: '#EA580C' }}>Voir tout &rarr;</Link>
            </div>
            <div className="row g-4">
                {produits.map((p) => (
                    <div key={p.id} className="col-12 col-md-6 col-lg-4">
                        <div className="card product-card h-100 border-0 shadow-sm transition-hover">
                            
                            <div className="position-relative overflow-hidden img-container" style={{ height: '220px' }}>
                                <span className="badge-category position-absolute top-0 end-0 m-3 shadow-sm">
                                    {p.store}
                                </span>
                                <img 
                                    src={p.img} 
                                    className="card-img-top w-100 h-100" 
                                    alt={p.title} 
                                    style={{ objectFit: 'cover' }} 
                                />
                                <div className="overlay-cart d-flex align-items-center justify-content-center">
                                    <button className="btn btn-light btn-sm rounded-circle shadow-sm" title="Voir détails">
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </div>
                            </div>

                            <div className="card-body p-4 d-flex flex-column">
                                <h5 className="fw-bold mb-1 text-dark text-truncate">{p.title}</h5>
                                <p className="text-muted mb-3 flex-grow-1" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                    {p.description}
                                </p>
                                
                                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
                                    <div className="d-flex flex-column">
                                        <span className="text-muted small mb-0" style={{ fontSize: '0.7rem' }}>À partir de</span>
                                        <span className="fw-bold text-primary fs-5">{p.price} <small className="fs-6">MAD</small></span>
                                    </div>
                                    <button className="btn btn-primary btn-add rounded-3 px-3 fw-bold"onClick={() => console.log(`Ajout de ${p.title} au panier`)}>
                                        <FontAwesomeIcon icon={faCartPlus} className="mx-2" />Ajouter
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProduitPopulaire;