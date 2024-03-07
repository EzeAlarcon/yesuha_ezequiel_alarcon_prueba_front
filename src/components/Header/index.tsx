import ItemSubmenu from '../ItemSubmenu';
import styles from './styles.module.css'

const Header = () => {

  const subMenuItems = [
    {
      id:1,
      text: 'Page 1',
      subMenu:[]
    },
    {
      id:1,
      text: 'Page 2',
      subMenu:[]
    },
    {
      id:1,
      text: 'Page 3',
      subMenu:[
        {
          id:1,
          text:'Item 1'
        },
        {
          id:2,
          text:'Item 2'
        },
        {
          id:3,
          text:'Item 3'
        },
      ] 
    },
  ]

  return (
    <nav className={styles.containerMenu}>
      <ul className={styles.listMenu}>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Home</p>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Pages</p>
          <div className={styles.modalItemMenu}>
            {subMenuItems.map((item)=> {
              return <ItemSubmenu key={item.id} text={item.text} subMenu={item.subMenu} />
            })}
          </div>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>About</p>
        </li>
        <li className={styles.itemMenu}>
          <p className={styles.textItemMenu}>Contact</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header;