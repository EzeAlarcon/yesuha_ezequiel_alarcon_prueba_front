import styles from './styles.module.css'

interface Props {
  text: string
  icon?: boolean
  onPress?: any
}

const Button: React.FC<Props> = ({text, icon = false, onPress}) => {
  const conditionalClass = icon ? styles.containerT : styles.containerF;
  return (
    <div className={`${styles.container} ${conditionalClass}`} onClick={()=>onPress()}  >
      <p className={`${styles.text}`}>{text}</p>
      {icon && <div className={styles.containerIcon}>****</div>}
    </div>
  )
}

export default Button;