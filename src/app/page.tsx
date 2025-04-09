'use client'

import HomeProducts from '../app/_components/HomeProducts';
import Inicio from './_components/Inicio';
import Proposito from './_components/proposito';



export default function Home() {
  return (
    <main>
      <Inicio />
      <HomeProducts />
      <Proposito />
    </main>
  )
}
