import { faBolt, faHammer, faPaintRoller, faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceGrid = () => {
    const cardStyle = {
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };
    return(
        <>
        
        <div className="col-md-5 offset-md-1">
            <div className="row g-3">
                <div className="col-6">
                    <div className="p-4 text-center text-white service-card" style={cardStyle}>
                        <FontAwesomeIcon icon={faWrench} size="2x" className="mb-3 ca_rd1" />
                        <h6 className="fw-bold">Plomberie</h6>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-4 text-center text-white service-card" style={cardStyle}>
                        <FontAwesomeIcon icon={faBolt} size="2x" className="mb-3 ca_rd2" />
                        <h6 className="fw-bold">Électricité</h6>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-4 text-center text-white service-card" style={cardStyle}>
                        <FontAwesomeIcon icon={faPaintRoller} size="2x" className="mb-3 ca_rd3" />
                        <h6 className="fw-bold">Peinture</h6>
                    </div>
                </div>
                <div className="col-6">
                    <div className="p-4 text-center text-white service-card" style={cardStyle}>
                        <FontAwesomeIcon icon={faHammer} size="2x" className="mb-3 ca_rd4" />
                        <h6 className="fw-bold">Menuiserie</h6>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default ServiceGrid
