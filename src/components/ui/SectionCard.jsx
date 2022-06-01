import PropTypes from 'prop-types';
import styles from './SectionCard.module.css';

const propTypes = {
    children: PropTypes.node.isRequired,
}
const defaultPropTypes = {};

const SectionCard = ({children}) => {
    return(
        <div className={styles.sectionCard}>{children}</div>
    );
}
SectionCard.propTypes = propTypes;
SectionCard.defaultPropTypes = defaultPropTypes;

export default SectionCard;