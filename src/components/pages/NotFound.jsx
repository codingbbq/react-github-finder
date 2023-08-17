import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="hero">
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mg-8">
                        404
                    </h1>
                    <p className='text-4xl mb-8'>Page not found!</p>
                    <Link to='/' className='btn btn-ghost btn-sm'>
                        <FaHome />
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;