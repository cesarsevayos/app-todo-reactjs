import { ReactComponent as CheckSvg } from '../resources/check.svg';
import { ReactComponent as DeleteSvg } from '../resources/delete.svg';
import './TodoIcon.css';

const iconsTypes = { 'check': (color) => <CheckSvg className="Icon-svg" fill={color} />, 'delete': (color) => <DeleteSvg className="Icon-svg" fill={color} /> };

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconsTypes[type](color)}
        </span>
    )
}

export { TodoIcon };