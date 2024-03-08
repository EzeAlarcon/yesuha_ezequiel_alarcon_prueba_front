
import styles from './styles.module.css'

interface Props {
  id: string
  name: string
  value: string
  label: string
}

const Checkbox: React.FC<Props> = ({id, name, value, label}) => {
  return (
    <div className={styles.checkboxContainer}>
      <input className={styles.input} type="checkbox" id={id} name={name} value={value}/>
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox;