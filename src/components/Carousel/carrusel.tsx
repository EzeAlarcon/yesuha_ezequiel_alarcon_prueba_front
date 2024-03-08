import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../Card/card';
import { Navigation } from 'swiper/modules';
import { TypeCard } from '../../types';


interface Props {
  cards: TypeCard[]
}


const Carousel: React.FC<Props> = ({cards}) => {

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => {}}
      onSwiper={() => {}}

      breakpoints={{
        200: {
          width: 300,
          slidesPerView: 1,
        },
        350: {
          width: 350,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      {cards.map((card) => (
        <SwiperSlide>
          <Card
            key={card?.id}
            title={card?.title}
            description={card?.description}
            image={card?.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;