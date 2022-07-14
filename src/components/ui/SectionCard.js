import styles from './SectionCard.module.css';

function SectionCard(props){
    return(
        <div className={styles.sectionCard}>{props.children}</div>
    );
}
export default SectionCard;