import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarClient from "../components/NavbarClient";
import SideBar from "../components/SideBar";
import FilterClient from "../components/FilterClient";
import ArtisantRecommender from "../components/ArtisantRecommender";
import FournisseurRecommande from "../components/FournisseurRecommande";
import ProduitPopulaire from "../components/ProduitPopulaire";

const Accueil_client = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [marginLeft, setMarginLeft] = useState("280px");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setMarginLeft("0px");
            } else {
                setMarginLeft(isCollapsed ? "80px" : "280px");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isCollapsed]);

    return (
        <div className="min-vh-100 bg-light">
            <NavbarClient />

            <div className="d-flex">
                <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

                <div className="flex-grow-1" style={{ marginLeft, transition: "0.3s" }}>
                    <main className="p-3 p-md-4">
                        <div className="rounded-4 p-4 p-md-5 text-white mb-4 shadow-sm" style={{ background: 'linear-gradient(90deg, #2b59ce 0%, #4a90e2 100%)' }}>
                            <h2 className="fw-bold">Bienvenue, Yacine ! 👋</h2>
                            <p className="mb-0 opacity-75 d-none d-sm-block">Trouvez les meilleurs artisans et produits pour vos projets.</p>
                        </div>

                        <FilterClient />

                        <section className="mt-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0 text-dark">Artisans recommandés</h5>
                                <Link to='/artisans' className="text-decoration-none fw-bold small text-orange" style={{ color: '#EA580C' }}>Voir tout</Link>
                            </div>
                            <ArtisantRecommender />
                        </section>

                        <section className="mt-5">
                            <h5 className="fw-bold mb-3">Fournisseurs</h5>
                            <FournisseurRecommande />
                        </section>

                        <section className="mt-5 mb-5">
                            <h5 className="fw-bold mb-3">Produits populaires</h5>
                            <ProduitPopulaire />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Accueil_client;