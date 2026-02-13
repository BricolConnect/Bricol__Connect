import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AvisClient = () => {
    const avis = [
        {
            id: 1,
            nom: "Karim Bennani",
            role: "Client",
            commentaire: "J'ai trouvé un électricien en moins de 30 minutes. Service impeccable et artisan très professionnel !",
            note: 5,
            image: "images/avatar1.jpg"
        },
        {
            id: 2,
            nom: "Sanaa Merrouch",
            role: "Utilisateur",
            commentaire: "La section magasin m'a permis de comparer les prix des matériaux de peinture facilement. Un gain de temps énorme.",
            note: 4,
            image: "images/avatar-2.jpg"
        },
        {
            id: 3,
            nom: "Youssef Idrisi",
            role: "Artisan",
            commentaire: "En tant qu'artisan, cette plateforme m'a apporté plus de clients que n'importe quelle autre publicité.",
            note: 5,
            image: "images/avatar-3.jpg"
        }
    ];

    return (
        <section id="avis-section" className="py-5 bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Ce que disent nos clients</h2>
                    <div className="mx-auto bg-primary rounded" style={{ width: '50px', height: '4px' }}></div>
                </div>

                <div className="row mt-3">
                    {avis.map((item) => (
                        <div className="col-md-4 mb-4" key={item.id}>
                            <div className="card border-0 shadow-sm rounded-4 p-4 h-100 position-relative">
                                <FontAwesomeIcon icon={faQuoteLeft} className="position-absolute text-primary opacity-10" style={{ fontSize: '3rem', top: '20px', right: '20px' }} 
                                />
                                
                                <div className="card-body p-0">
                                    <div className="text-warning mb-3 small">
                                        {[...Array(item.note)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} />
                                        ))}
                                    </div>

                                    <p className="text-muted fst-italic mb-4" style={{ fontSize: '0.95rem' }}>
                                        "{item.commentaire}"
                                    </p>

                                    <div className="d-flex align-items-center mt-auto">
                                        <img src={item.image} alt={item.nom} className="rounded-circle me-3 border border-2 border-white shadow-sm"style={{ width: '50px', height: '50px', objectFit: 'cover' }}/>
                                        <div>
                                            <h6 className="mb-0 fw-bold">{item.nom}</h6>
                                            <small className="text-primary fw-medium">{item.role}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvisClient;