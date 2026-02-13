import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarCon from '../components/NavbarCon';

const SignUpFournisseur = () => {
  const [role, setRole] = useState('Fournisseur');
  const roles = [
        { name: 'Client', path: '/inscritpionclient' },
        { name: 'Artisan', path: '/inscriptionartisans' },
        { name: 'Fournisseur', path: '/inscriptionfournisseur' }
    ];
  return (
    <>
    
        <div className="container-fluid p-0" id='heroSection'>
            <div className="row mb-5">
                <NavbarCon />
            </div>
            <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-flex "  id='heroSection1'>
                    <h1 className="display-3 fw-bold mb-4">Inscrivez-vous à votre compte</h1>
                    <p className="lead border-start border-4 border-warning ps-4 w-75">
                        Gérez vos commandes, votre wishlist et vos informations personnelles.
                    </p>
                </div>

                <div className="col-lg-6 bg-light bg-opacity-10 d-flex align-items-center justify-content-center p-4 p-md-5">
                <div className="card w-100 shadow" id='card'>
                    <div className="card-body p-4 p-md-5" id='for_m'>
                    <h2 className="text-center fw-bold mb-4" style={{fontSize: '2.5rem'}}>Sign up fournisseur</h2>

                    <div className="bg-light p-1 rounded-pill d-flex mb-4">
                        {roles.map((item) => (
                            <button key={item} onClick={() => setRole(item.name)} className={`btn flex-fill rounded-pill transition-all ${role === item.name ? 'bg-white shadow-sm text-dark fw-bold' : 'text-muted border-0'}`} >
                                <Link to={item.path} className='text-decoration-none text-dark' >{item.name}</Link>
                            </button>
                        ))}
                    </div>


                    <form id>
                        <div className="row g-3 mb-3">
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">Nom :</label>
                            <input type="text" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="nom" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">Prenom :</label>
                            <input type="text" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="Prenom" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">Ville :</label>
                            <select className="form-select border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe">
                            <option>Ville</option>
                            </select>
                        </div>
                        </div>

                        <div className="mb-3">
                        <label className="form-label small fw-bold text-secondary">Email :</label>
                        <input type="email" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="votre@email.com" />
                        </div>

                        <div className="row g-3 mb-3">
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">Tele</label>
                            <input type="text" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="+212 ..." />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">CIN</label>
                            <input type="text" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="EE123456" />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label small fw-bold text-secondary">Specialisation</label>
                            <select className="form-select border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe">
                            <option>Options</option>
                            </select>
                        </div>
                        </div>

                        <div className="mb-3">
                        <label className="form-label small fw-bold text-secondary">Photo</label>
                        <input type='file' className='form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe' />
                        </div>
                        <div className="mb-4">
                        <label className="form-label small fw-bold text-secondary">Photo CIN</label>
                        <input type='file' className='form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe' />
                        </div>

                        <div className="row g-3 mb-4">
                        <div className="col-6">
                            <label className="form-label small fw-bold text-secondary">Mot de passe</label>
                            <input type="password" placeholder="********" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" />
                        </div>
                        <div className="col-6">
                            <label className="form-label small fw-bold text-secondary">Confirmer</label>
                            <input type="password" placeholder="********" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" />
                        </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 text-white shadow-sm mb-3">
                        S'inscrire
                        </button>

                        <p className="text-center mb-0">
                            <Link to="/connexion" className='text-primary text-decoration-none small fw-bold' >
                                Vous avez déjà un compte ? connectez vous ?
                            </Link>
                        </p>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SignUpFournisseur;