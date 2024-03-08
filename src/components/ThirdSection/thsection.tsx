
import Form from '../Form/form';
import ItemRadio from '../ItemRadio/itmradio';
import Select from '../Select/select';
import styles from './styles.module.css'

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerGroup}>
        <Select />
      </div>
      <div className={styles.containerRadio}>
        <ItemRadio id='option1' name='option' value='option1' label='Option 1' />
        <ItemRadio id='option2' name='option' value='option2' label='Option 2' />
        <ItemRadio id='option3' name='option' value='option3' label='Option 3' />
        <ItemRadio id='option4' name='option' value='option4' label='Option 4' />
      </div>
      <div className={styles.containerGroup}>
        <Form />
      </div>
    </div>
  )
}

export default ThirdSection;