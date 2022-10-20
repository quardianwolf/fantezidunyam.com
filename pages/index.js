import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Hero, SocialDot, Banner, Last} from '../sections';

export default function Home() {
  return (
   <div>
    <Hero/>
    <SocialDot/>
    <Banner/>
    <Last/>
   </div>
  )
}
