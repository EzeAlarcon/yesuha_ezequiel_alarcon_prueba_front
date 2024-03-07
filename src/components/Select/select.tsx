
import { useState } from 'react'
import Checkbox from '../Checkbox/checkbx'
import styles from './styles.module.css'



const Select = () => {
  const [showDropDown, setShowDropDown] = useState(false)
  const checks = [
    {
      id: 'opccion1',
      name: 'option1',
      value: 'option1',
      label: 'Option 1'
    }, 
    {
      id: 'opccion2',
      name: 'option2',
      value: 'option2',
      label: 'Option 2'
    }, 
    {
      id: 'opccion3',
      name: 'option3',
      value: 'option3',
      label: 'Option 3'
    }, 
    {
      id: 'opccion4',
      name: 'option4',
      value: 'option4',
      label: 'Option 4'
    }
  ]

  return (
    <div>
      <div className={styles.containerSelect} onClick={()=>setShowDropDown(!showDropDown)}>
        <p>Select</p>
        <div>
          {!showDropDown ? <i>v</i> : <i>A</i>}
          
        </div>
      </div>
      {showDropDown && (
        <div className={styles.containerDropdown}>
        {checks.map((check) => {
          return (
            <Checkbox
              id={check.id}
              name={check.name}
              value={check.value}
              label={check.label}
            />
          );
        })}
      </div>
      )}
    </div>
  );
}

export default Select;