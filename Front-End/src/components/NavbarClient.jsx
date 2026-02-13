import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarClient = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom py-2 sticky-top w-100" style={{ zIndex: 1100 }}>
            <div className="container-fluid px-2 px-md-4">
                <div className="d-flex align-items-center justify-content-between w-100">
                    
                    <div className="d-flex align-items-center">
                        <button className="btn btn-white border d-lg-none me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu">
                            <FontAwesomeIcon icon={faBars} className="text-primary" />
                        </button>
                        
                        <img src="/images/bricol'connect2.png" alt="Logo" style={{ height: '35px' }} />
                        <div className="lh-1 ms-2 d-none d-sm-block">
                            <h5 className="fw-bold mb-0 text-primary">Bricol'Connect</h5>
                            <small className="text-muted fw-semibold" style={{ fontSize: '10px' }}>Espace client</small>
                        </div>
                    </div>

                    <div className="flex-grow-1 px-2 px-md-5">
                        <div className="input-group border rounded-pill bg-light px-3 py-1 mx-auto" style={{ maxWidth: '500px' }}>
                            <span className="input-group-text bg-transparent border-0 text-muted">
                                <FontAwesomeIcon icon={faSearch} size="sm" />
                            </span>
                            <input type="text" className="form-control border-0 bg-transparent shadow-none" placeholder="Rechercher..." style={{ fontSize: '14px' }} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center gap-2 gap-md-4">
                        <div className="position-relative cursor-pointer">
                            <FontAwesomeIcon icon={faBell} className="fs-5 text-dark" />
                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle"></span>
                        </div>
                        <FontAwesomeIcon icon={faShoppingCart} className="fs-5 text-dark cursor-pointer" />
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavbarClient;