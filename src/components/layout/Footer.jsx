function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
            <p>Learning React - {year}</p>
        </footer>
    )
}

export default Footer;