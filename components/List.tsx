'use client'
import React, { useEffect, useState } from 'react'
import Character from './Character'
import { ApiResponseType, CharacterType } from '@/types'

type Props = {}

const List = (props: Props) => {
  const [response, setResponse] = useState<ApiResponseType>()
  const [page, setPage] = useState(1)
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(apiUrl)
      const data = await response.json()
      if (response.ok) {
        setResponse(data)
      }
    }
    fetchCharacters()
  }, [apiUrl])

  const prevHandler = () => {
    if (response?.info.prev) {
      setPage((prev) => prev - 1)
    }
  }

  const nextHandler = () => {
    if (response?.info.next) {
      setPage((prev) => prev + 1)
    }
  }

  return (
    <div>
      <h2>Characters</h2>
      <div className="grid grid-cols-12 gap-4 my-4">
        {response?.results.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </div>
      <button
        className={`rounded-lg py-1 px-2 ${
          response?.info.prev
            ? 'bg-orange-400 hover:scale-105 transition-all duration-200 hover:bg-orange-300 hover:text-slate-50'
            : 'bg-slate-400'
        }`}
        onClick={prevHandler}
        disabled={!response?.info.prev}
      >
        Prev
      </button>

      <button
        className={`rounded-lg py-1 px-2 ${
          response?.info.next
            ? 'bg-orange-400 hover:scale-105 transition-all duration-200 hover:bg-orange-300 hover:text-slate-50'
            : 'bg-slate-400'
        }`}
        onClick={nextHandler}
        disabled={!response?.info.next}
      >
        Next
      </button>
    </div>
  )
}

export default List
