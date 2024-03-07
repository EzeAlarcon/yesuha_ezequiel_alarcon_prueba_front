
import ItemFooter from '../ItemFooter/itemfot';
import styles from './styles.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerSecond}>
        <ItemFooter title='Cumple con los estandares  relacionados a la prueba tecnica' description='Totalmente REsposive ' />
      </div>
      <p className={styles.text}>Lorem ipsum dolor sit ame <a href="https://www.linkedin.com/in/ezequiel-alarc%C3%B3n-mej%C3%ADa-520580255/" className={styles.textLink}>YESUHA EZEQUIEL ALARCON</a> eaque aliquid ut molestias libero iste corrupti sapiente incidunt obcaecati? © 2024</p>


    </div>
  )
}

export default Footer;