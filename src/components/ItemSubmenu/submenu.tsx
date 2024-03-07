

import { useState } from 'react';
import styles from './styles.module.css'
import { TypeItemSubmenu } from '../../types';

interface Props {
  text: string
  subMenu: TypeItemSubmenu[]
}

const ItemSubmenu: React.FC<Props> = ({text, subMenu}) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const hasSubmenu = subMenu?.length > 0;
  return (
    <div onClick={()=>setShowSubMenu(!showSubMenu)} className={styles.container}>
     <div className={styles.secondaryContainer}>
      <p>{text}</p>
        {hasSubmenu && (
          <div className={styles.containerIcon}>
          {!showSubMenu ? <i>V</i> : <i>A</i>}
        </div>
        )}
     </div>
      {showSubMenu && (
        <div className={styles.containerSubItems}>
          {subMenu?.map((item)=> {
            return <p key={item.id} className={styles.itemSubmenu}>{item.text}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default ItemSubmenu;