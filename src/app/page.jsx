import Image from 'next/image'
import styles from './page.module.css'
import Part1 from './components/home/part1'
import Part2 from './components/home/part2'
import Part3 from './components/home/part3'

export default function Home() {
  return (
    <>
    <Part1/>
    <Part2 url="/images/seats.jpg" text="Feels like home"/>
    <Part3 url="/images/camera.jpg" text="Quality is the Key of all"/>
    <Part2 url="/images/popcorn.jpg" text="Stick to your snacks and wafers"/>
    </>
  )
}
