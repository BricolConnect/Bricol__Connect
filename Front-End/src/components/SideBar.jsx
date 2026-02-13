import { useState } from "react"; 
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSearch, faUsers, faBox, faShoppingCart, faComment, faStar, faTools, faSignOutAlt, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { path: '/accueil_client', label: 'Tableau de board', icon: faThLarge },
        { path: '/rechercher', label: 'Rechercher', icon: faSearch },
        { path: '/artisans', label: 'Artisans', icon: faUsers },
        { path: '/fournisseurs', label: 'Fournisseurs', icon: faBox },
        { path: '/produits', label: 'Produits', icon: faBox },
        { path: '/panier', label: 'Mon Panier', icon: faShoppingCart },
        { path: '/messages', label: 'Messagerie', icon: faComment },
        { path: '/avis', label: 'Mes avis', icon: faStar },
        { path: '/bricoles', label: 'Mes Bricoles', icon: faTools },
    ];

    return (
        <div className="bg-white border-end position-fixed h-100 shadow-sm transition-all" style={{ width: isCollapsed ? '80px' : '280px', zIndex: 1050, transition: '0.3s' }} id="sideBar">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="btn btn-primary rounded-circle position-absolute d-flex align-items-center justify-content-center shadow" style={{  right: '-12px',  top: '30px', width: '25px', height: '25px',fontSize: '10px'}} >
                <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
            </button>
            <div className="px-3 pt-3 h-100 d-flex flex-column" id="scroll">
                <ul className="nav flex-column gap-2 flex-grow-1">
                    {menuItems.map((item) => (
                        <li className="nav-item" key={item.path}>
                            <Link to={item.path}  
                                className={`nav-link rounded-3 px-3 py-2 d-flex align-items-center mb-1 
                                ${isCollapsed ? 'justify-content-center' : 'gap-3'}
                                ${location.pathname === item.path ? 'bg-primary text-white border-primary shadow-sm' : 'text-dark bg-white border'}`}>
                                
                                <FontAwesomeIcon icon={item.icon} style={{ width: '18px' }} />
                                
                                {!isCollapsed && <span className="fw-semibold small text-nowrap">{item.label}</span>}
                            </Link>
                        </li>
                    ))}
                    
                    <li className="nav-item mt-3">
                        <Link to='/' className="text-decoration-none">
                            <button className={`btn btn-outline-danger rounded-3 py-2 d-flex align-items-center border shadow-sm border-2 w-100 
                                ${isCollapsed ? 'justify-content-center px-0' : 'px-4 gap-3'}`}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                                {!isCollapsed && <span className="fw-semibold small">Déconnexion</span>}
                            </button>
                        </Link>
                    </li>
                </ul>

                <div className="border-top py-3 d-flex align-items-center mt-auto" 
                     style={{ gap: isCollapsed ? '0' : '15px', justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                    <img src="images/avatar-8.jpg" className="rounded-circle border" alt="User" style={{ width: '40px' }}/>
                    {!isCollapsed && (
                        <div className="flex-grow-1 overflow-hidden">
                            <h6 className="mb-0 fw-bold small text-nowrap">Yacine Zahid</h6>
                            <small className="text-muted d-block text-truncate" style={{ fontSize: '10px' }}>yacine@gmail.com</small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;