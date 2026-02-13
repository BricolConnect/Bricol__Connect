import { Link } from "react-router-dom";
import ArtisantRecommender from "../components/ArtisantRecommender";
import FilterClient from "../components/FilterClient";
import NavbarClient from "../components/NavbarClient";
import SideBar from "../components/SideBar";
import FournisseurRecommande from "../components/FournisseurRecommande";
import ProduitPopulaire from "../components/ProduitPopulaire";

const Accueil_client = () => {
    return (
        <div className="min-vh-100">
            <NavbarClient />

            <div className="d-flex">
                <SideBar />

                <div className="flex-grow-1 " style={{ marginLeft: '280px' }}>
                    <main className="p-4">
                        <div className="rounded-4 p-5 text-white mb-4 shadow-sm" 
                             style={{ background: 'linear-gradient(90deg, #2b59ce 0%, #4a90e2 100%)' }}>
                            <h2 className="fw-bold">Bienvenue, Yacine ! 👋</h2>
                            <p className="mb-0 fs-5">Trouvez les meilleurs artisans et produits pour vos projets de bricolage</p>
                        </div>

                        <FilterClient />

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bold">Artisans recommandés</h5>
                            <Link to='/' className="text-decoration-none fw-bold" style={{ color: '#e65100' }}>Voir tout &rarr;</Link>
                        </div>
                        
                        <div className="row g-4">
                            <ArtisantRecommender />
                        </div>
                        <div className="row g-4">
                            <FournisseurRecommande />
                        </div>
                        <div className="row g-4">
                            <ProduitPopulaire />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}



export default Accueil_client;