import { useState } from 'react';
import Button from '../Button';
import styles from './styles.module.css'

const Form = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:""
  })

  const [result, setResult] = useState('');

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleButtonClick = () => {
    const res = `Name: ${formData.name}\nEmail: ${formData.email}`;
    setResult(res);
  };

  return (
    <form className={styles.container}>
      <div className={styles.containerInput}>
        <label>Name:</label>
        <input type='text' name='name' value={formData.name} onChange={handleChangeInput} />
      </div>
      <div className={styles.containerInput}>
        <label>Email:</label>
        <input type='email' name='email' value={formData.email} onChange={handleChangeInput} />
      </div>
      <textarea disabled value={result}>texto</textarea>
      <div className={styles.containerButton}>
        <Button text='Submit' onPress={handleButtonClick} />
      </div>
    </form>
  )
}

export default Form;