
import styles from './styles.module.css'

interface Props {
  id: string
  name: string
  value: string
  label: string
}

const ItemRadio: React.FC<Props> = ({id, name, value, label}) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="radio" id={id} name={name} value={value}/>
      <label htmlFor={id}>
        <span className={styles.radioButton} />
        {label}
      </label>
    </div>
  )
}

export default ItemRadio;