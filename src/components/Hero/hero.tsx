import Button from '../Button/btn';
import styles from './styles.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hola Mi Nombre es Yesuha Ezequiel</h1>
      
      <p className={styles.description}>"Esta es la prueba tecnica para el puesto de Dev Frontend.."</p>
      
      <Button text='Go there' icon={true} onPress={()=>console.log('Go there...')} />
    </div>
  )
}

export default Hero;