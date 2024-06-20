import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='social-links'>
                <img src="images/fb.png" alt="Logo do Facebook" />
                <img src="images/tw.png" alt="Logo do Twitter" />
                <img src="images/ig.png" alt="Logo do Instagram" />
            </div>
            <img className='logo' src="images/logo.png" alt="Logo do Organo" />
            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer