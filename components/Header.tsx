import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="w-full h-16 px-4 flex items-center justify-center bg-sky-950">
      <h1 className="text-4xl text-sky-50">Rick and Morty</h1>
    </header>
  )
}

export default Header
