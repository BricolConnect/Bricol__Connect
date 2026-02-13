import { faBars, faBolt, faFaucet, faHammer, faPalette, faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ArtisanFilter = () => {
  const categories = [
  { id: 'all', label: 'Tous', icon: faBars },
  { id: 'plumber', label: 'Plomberie', icon: faFaucet },
  { id: 'electric', label: 'Électricité', icon: faBolt },
  { id: 'wood', label: 'Menuiserie', icon: faHammer },
  { id: 'ac', label: 'Climatisation', icon: faSnowflake },
  { id: 'paint', label: 'Peinture', icon: faPalette },
];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="container py-5" id='services-section'>
      <h2 className="fw-bold mb-4 position-relative d-inline-block">
        Filtrer par domaine d'artisanat
        <div style={{ height: '4px', background: '#007bff', width: '70%', marginTop: '5px' }}></div>
      </h2>

      <div className="d-flex flex-nowrap overflow-auto pb-3 gap-3 mb-5" style={{ scrollbarWidth: 'none' }}>
            {categories.map((cat) => (
                <button key={cat.id} onClick={() => setActiveTab(cat.id)} className={`btn d-flex align-items-center px-4 py-2 border-0 shadow-sm transition-all ${ activeTab === cat.id ? 'bg-orange text-white' : 'bg-white text-dark' }`}
                    style={{ borderRadius: '12px',minWidth: 'fit-content',backgroundColor: activeTab === cat.id ? '#e65100' : '#fff' }} >
                    <FontAwesomeIcon  icon= {cat.icon} className={`me-2 ${activeTab === cat.id ? 'text-white' : 'text-secondary'}`} />
                    <span className="fw-medium">{cat.label}</span>
                </button>
            ))}
      </div>

      <hr className='fw-bold'/>
      <div className="text-center mt-5">
            <h1 className="fw-bold display-5 mb-3">Nos artisans qualifiés</h1>
            <p className="text-primary fw-semibold fs-5">
                Découvrez des professionnels vérifiés et notés par la communauté
            </p>
      </div>
    </div>
  );
};

export default ArtisanFilter;