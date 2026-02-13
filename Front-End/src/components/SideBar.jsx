import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSearch, faUsers, faBox, faShoppingCart, faComment, faStar, faTools, faChevronLeft, faChevronRight, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ isCollapsed, setIsCollapsed }) => {
    const location = useLocation();
    
    const menuItems = [
        { path: '/accueil_client', label: 'Dashboard', icon: faThLarge },
        { path: '/rechercher', label: 'Rechercher', icon: faSearch },
        { path: '/artisans', label: 'Artisans', icon: faUsers },
        { path: '/fournisseurs', label: 'Fournisseurs', icon: faBox },
        { path: '/produits', label: 'Produits', icon: faBox },
        { path: '/panier', label: 'Mon Panier', icon: faShoppingCart },
        { path: '/messages', label: 'Messagerie', icon: faComment },
        { path: '/avis', label: 'Mes avis', icon: faStar },
        { path: '/bricoles', label: 'Mes Bricoles', icon: faTools },
    ];

    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            const menu = document.getElementById('sidebarMenu');
            if (menu && menu.classList.contains('show')) {
                menu.classList.remove('show');
            }
        }
    };

    return (
        <div className="offcanvas-lg offcanvas-start bg-white border-end position-fixed shadow-sm d-flex flex-column" id="sidebarMenu" data-bs-backdrop="false" style={{ width: isCollapsed ? '80px' : '280px', zIndex: 1040, transition: 'width 0.3s ease-in-out',left: 0, top: '72px', height: 'calc(100vh - 72px)'}}>
            <div className="offcanvas-header d-lg-none border-bottom">
                <h5 className="fw-bold mb-0 text-primary">Bricol'Connect</h5>
                <button type="button"  className="btn-close shadow-none" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"></button>
            </div>

            <div className="offcanvas-body p-3 d-flex flex-column h-100 overflow-y-auto overflow-x-hidden" id="scroll">
                
                <button onClick={() => setIsCollapsed(!isCollapsed)}className="btn btn-primary rounded-circle position-absolute d-none d-lg-flex align-items-center justify-content-center shadow"style={{right: '-12px', top: '15px', width: '24px', height: '24px', zIndex: 1100, border: '2px solid white'}}>
                    <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} style={{ fontSize: '10px' }} />
                </button>

                <ul className="nav flex-column gap-1 flex-grow-1">
                    {menuItems.map((item) => (
                        <li className="nav-item" key={item.path}>
                            <Link to={item.path} onClick={handleLinkClick} className={`nav-link rounded-3 px-3 py-2 d-flex align-items-center mb-1 transition-all ${isCollapsed ? 'justify-content-center px-0' : 'gap-3'}${location.pathname === item.path ? 'bg-primary text-white shadow-sm' : 'text-dark bg-light-hover border border-transparent'}`}>
                                <FontAwesomeIcon icon={item.icon} style={{ width: '18px', minWidth: '18px' }} />
                                {!isCollapsed && <span className="fw-semibold small text-nowrap">{item.label}</span>}
                            </Link>
                        </li>
                    ))}

                    <hr className="text-muted opacity-25 my-2" />

                    <li className="nav-item">
                        <Link to="/" onClick={handleLinkClick} className="nav-link rounded-3 px-3 py-2 d-flex align-items-center text-danger border border-danger border-opacity-10 bg-danger bg-opacity-10">
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ width: '18px', minWidth: '18px' }} />
                            {!isCollapsed && <span className="fw-bold small ms-3">Déconnexion</span>}
                        </Link>
                    </li>
                </ul>

                <div className="border-top pt-3 mt-auto d-flex align-items-center">
                    <img src="images/avatar-8.jpg" className="rounded-circle border border-2 flex-shrink-0" alt="User" style={{ width: '38px', height: '38px', objectFit: 'cover' }}/>
                    {!isCollapsed && (
                        <div className="ms-2 overflow-hidden d-flex flex-column">
                            <span className="fw-bold small text-nowrap text-dark">Yacine Zahid</span>
                            <small className="text-muted text-truncate" style={{ fontSize: '10px' }}>yacine@gmail.com</small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;