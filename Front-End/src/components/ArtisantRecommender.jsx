const ArtisantRecommender = () => {
    const artisans = [
        { id: 1, name: "Sara Ghita", job: "Électricienne", city: "Maroc, Rabat", img: "images/avatar-2.jpg" },
        { id: 2, name: "Yacine Kamil", job: "Menuisier", city: "Maroc, Tanger", img: "images/avatar-8.jpg" },
        { id: 3, name: "Walid Hedraf", job: "Plombier", city: "Maroc, Marrakech", img: "images/avatar-4.jpg" }
    ];

    return (
        <div className="row g-4">
            {artisans.map((u) => (
                <div key={u.id} className="col-md-4">
                    <div className="card border-0 shadow-sm rounded-4 p-3 h-100 custom-card">
                        <div className="card-body p-0">
                            <div className="d-flex align-items-center mb-3">
                                <div className="rounded-circle overflow-hidden me-3 shadow-sm" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                    <img src={u.img} alt={u.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <h6 className="mb-0 fw-bold">{u.name}</h6>
                                    <small className="text-primary fw-medium">{u.job}</small>
                                </div>
                            </div>

                            <p className="small text-muted mb-2">
                                <i className="bi bi-geo-alt-fill me-1"></i> {u.city}
                            </p>
                            <div className="text-warning mb-3 small">
                                ⭐⭐⭐⭐⭐ <span className="text-muted ms-1">(5.0)</span>
                            </div>

                            <div className="d-flex gap-2">
                                <button className="btn btn-primary flex-grow-1 rounded-pill fw-bold" >
                                    Contacter
                                </button>
                                <button className="btn btn-light rounded-circle border shadow-sm">❤️</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ArtisantRecommender;