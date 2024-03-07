import styles from './styles.module.css'

interface Props {
  title: string
  image: string
  description: string
}

const Card: React.FC<Props> = ({title, image, description}) => {
  return (
    <article className={styles.container}>
      <div className={styles.containerImage}>
        <img className={styles.image} src={image} alt='imagenes para el componete card' />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{description}</p>
    </article>
  )
}

export default Card;