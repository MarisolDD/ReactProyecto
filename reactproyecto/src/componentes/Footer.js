import React from 'react'

export const Footer = () => {
    return (
        <div className="footer-container" style={{ position: 'absolute', padding: '10% 10%', bottom: 0, width: '100%', textAlign: 'center' }}>
            <footer className="py-3 my-4" style={{ position: 'absolute', padding: '10% 10%', bottom: 0, width: '100%', textAlign: 'center' }}>
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">DESTINO</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">GRUPALES</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">AUTOS</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">SEGUROS</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">NOSOTROS</a></li>
                </ul>
                <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
            </footer>
        </div>
    )
}

