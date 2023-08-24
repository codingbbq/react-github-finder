import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';
function Alert() {

    const { alert } = useContext(AlertContext);
    return alert !== null && (
        <div className='container mx-auto'>
            <p className="flex-1 text-base font-semibold leading-7">
                {alert.msg}
            </p>
        </div>
    )
}

export default Alert;