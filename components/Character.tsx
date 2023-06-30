import { CharacterType } from '@/types'
import Image from 'next/image'
import React from 'react'

type Props = {
  character: CharacterType
}

const Character = (props: Props) => {
  const { character } = props
  return (
    <section className="bg-slate-200 col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 rounded-2xl p-2 shadow-sm shadow-gray-300 hover:scale-105 hover:bg-slate-50 transition-all duration-200">
      <p>{character.name}</p>
      <Image
        src={character.image}
        alt={character.name}
        width={100}
        height={100}
        className="rounded-2xl"
      />
    </section>
  )
}

export default Character
