import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavbarClient = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-2 sticky-top w-100" style={{ zIndex: 1100 }}>
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center w-100">
                    
                    <div className="d-flex align-items-center" style={{ width: '250px' }}>
                        <img src="/images/bricol'connect2.png" alt="Logo" style={{ height: '40px' }} className="me-2" />
                        <div className="lh-1">
                            <h4 className="fw-bold mb-0 text-primary">Bricol'Connect</h4>
                            <small className="text-muted fw-semibold" style={{ fontSize: '11px' }}>Votre espace client</small>
                        </div>
                    </div>

                    <div className="flex-grow-1 px-5">
                        <div className="input-group border rounded-3 bg-light px-2 py-1 mx-auto" style={{ maxWidth: '600px' }}>
                            <span className="input-group-text bg-transparent border-0 text-muted">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                            <input type="text" className="form-control border-0 bg-transparent shadow-none" 
                                   placeholder="Rechercher des artisans, produits, fournisseurs..." />
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                        <div className="position-relative cursor-pointer">
                            <FontAwesomeIcon icon={faBell} className="fs-5 text-dark" />
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                        </div>
                        <FontAwesomeIcon icon={faShoppingCart} className="fs-5 text-dark cursor-pointer" />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavbarClient;