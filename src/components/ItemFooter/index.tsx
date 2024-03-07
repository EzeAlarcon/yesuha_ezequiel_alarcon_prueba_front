
import styles from './styles.module.css'

interface Props {
  title: string
  description: string
}

const ItemFooter: React.FC<Props> = ({title, description}) => {
  return (
    <div className={styles.container}>
     <p className={styles.title}>{title}</p>
     <p className={styles.description}>{description}</p>
    </div>
  )
}

export default ItemFooter;