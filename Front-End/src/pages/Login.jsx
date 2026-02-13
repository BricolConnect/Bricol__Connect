import { Link, useNavigate } from "react-router-dom";
import NavbarCon from "../components/NavbarCon";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [psw, setPsw] = useState("");
    const navigate = useNavigate()

    const handelConexion = (e) =>{
        e.preventDefault();
        if(email==='admin@gmail.com' && psw === "123456"){
            navigate('/accueil_client')

        }else{
            console.log('les input inccorect !!')
        }
    }
    return (
        <>
            <div className="vh-100 overflow-hidden"id="backG">
                <NavbarCon />
                <div className="container-fluid p-0 h-100">
                    <div className="row g-0 h-100">
                        
                        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-5 position-relative">
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
                            
                            <div className="position-relative text-white" style={{ zIndex: 2 }}>
                                <h2 className="display-4 fw-bold mb-4">Connectez-vous à <br/> votre compte</h2>
                                <p className="fs-5 opacity-75">
                                    Gérez vos commandes, votre wishlist et vos informations personnelles.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 col-12 d-flex align-items-center justify-content-center bg-light bg-opacity-25" >
                            
                            <div className="w-100 p-4 p-md-5" style={{ maxWidth: '450px' }}>
                                <div className="card border-0 bg-white shadow-lg p-4" id="for_m" style={{ borderRadius: '20px' } }>
                                    <h2 className="text-center fw-bold mb-4 text-dark">Login</h2>
                                    <form className="shadow-lg p-4" onSubmit={handelConexion}>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Email</label>
                                            <input type="email" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" value={email} placeholder="user@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label small fw-bold text-muted">Password</label>
                                            <input type="password" className="form-control border rounded-3 p-2 text-start text-muted small bg-white cursor-pointe" placeholder="********" value={psw} onChange={(e)=>setPsw(e.target.value)}/>
                                        </div>
                                        <div className="mb-4">
                                            <Link to="/" className="d-block small text-decoration-none mb-1">Mot de passe oublié ?</Link>
                                            <Link to="/inscritpionclient" className="d-block small text-decoration-none">Inscription ?</Link>
                                        </div>
                                        <button type='submit' className="btn btn-warning w-100 fw-bold py-2 text-white" id="btn_con">
                                            Connexion
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;