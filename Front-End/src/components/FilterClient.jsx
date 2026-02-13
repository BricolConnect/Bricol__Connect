const FilterClient = () => {
    return(
        <>
            <section className="bg-white p-4 rounded-4 shadow-sm mb-4">
                            <h5 className="fw-bold mb-4">Filtres de recherche</h5>
                            <div className="row g-3 align-items-end">
                                <div className="col-md-3">
                                    <label className="form-label fw-bold small">Catégorie</label>
                                    <select className="form-select bg-light border-0 py-2">
                                        <option>Toutes Catégories</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label fw-bold small">Localisation</label>
                                    <input type="text" className="form-control bg-light border-0 py-2" placeholder="Ville..." />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label fw-bold small">Note minimale</label>
                                    <select className="form-select bg-light border-0 py-2">
                                        <option>Toutes Notes</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn w-100 py-2 fw-bold text-white" style={{ backgroundColor: '#EA580C', borderRadius: '10px' }}>
                                        Filtrer
                                    </button>
                                </div>
                            </div>
                        </section>
        </>
    )
}
export default FilterClient