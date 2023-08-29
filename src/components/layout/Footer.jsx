function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer p-5 bg-gray-700 text-primary-content footer-center'>
            <p>Learning React - {year}</p>
            <p><a href='https://codingbbq.github.io'>&copy; codingbbq</a></p>
        </footer>
    )
}

export default Footer;