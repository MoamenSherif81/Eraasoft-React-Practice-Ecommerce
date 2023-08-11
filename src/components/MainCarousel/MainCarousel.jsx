import { Carousel, Container } from 'react-bootstrap'
import './MainCarousel.css'

export default function MainCarousel() {
  return (
    <Container className='mt-5'>
      <Carousel indicators={false} className='main-carousel'>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src="/images/1.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src="/images/2.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item className='main-carousel__item'>
          <img className='h-100 w-100' src="/images/3.jpg" alt="" />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}
