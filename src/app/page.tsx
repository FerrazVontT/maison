'use client';

import GucciContainer from './_components/GucciContainer';
import ConteudoHome from './_components/home';
import Inicio from './_components/Inicio';
import Proposito from './_components/proposito';

export default function Page() {
  return (
    <main>
      <Inicio />
      <GucciContainer />
      <ConteudoHome />
      <Proposito />
    </main>
  );
}