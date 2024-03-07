
import Carousel from '../Carousel';
import styles from './styles.module.css'

const SecondSection = () => {


  const cards = [
    {
      id: 1,
      title: 'Lorem ipsum 1',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 4,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 5,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 6,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 7,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 8,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
    {
      id: 9,
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates enim, repudiandae quia, dignissimos dolore numquam inventore tenetur maxime eius animi minima a veritatis totam alias, laboriosam porro. Vero, illum ducimus.',
      image:''
    },
  ]


  return (
    <div className={styles.container}>
      <Carousel cards={cards} />
    </div>
  )
}

export default SecondSection;