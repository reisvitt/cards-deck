import React, { useEffect, useState } from 'react'
import { RickMortyProps } from '../../../../domain/models/rick-morty-data'
import { ArrayHelper } from '../../../../presentation/helpers/array-helper/array-helper'
import Game from '../../../../presentation/pages/game'
import { getRandomIndex, randomNumber } from '../../../../presentation/utils/random-numbers'
import { makeRemoteRickMorty } from '../../usecases/rick-morty/remote-rick-morty'

function MakeGame(): JSX.Element {
  const [list, setList] = useState<RickMortyProps.ResponseList>({} as RickMortyProps.ResponseList)
  const [loading, setLoading] = useState<boolean>(true)
  const [loadingMore, setLoadingMore] = useState<boolean>(false)
  const [min, setMin] = useState<number>(5)
  const [max, setMax] = useState<number>(8)

  const loadList = (): void => {
    setLoading(false)
    makeRemoteRickMorty()
      .list()
      .then((res) => {
        // slice the array -> only 5
        const aux = res.results
          .slice(0, min)
          .map((card) => { // random number -> points
            const random = randomNumber(0, 10)
            return ({
              ...card,
              points: random,
            })
          })

        setList({
          info: res.info,
          results: aux,
        })
      }).catch((error) => {
        alert(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const getOneMore = async (): Promise<void> => {
    if (list.results.length >= max) {
      return
    }

    // to get one more, i will generate a random id that do not used yet
    // i need to list the ids
    // to generate the random id excluding the useds

    const allIds = list.results.map((card) => card.id)
    const newID = getRandomIndex(allIds, 0, list?.info?.count || 820)

    setLoadingMore(true)

    makeRemoteRickMorty()
      .get(newID)
      .then((res) => {
        const random = randomNumber(0, 10)
        const aux = {
          ...res,
          points: random,
        }

        setList((prev) => ({
          ...prev,
          results: [
            ...prev.results,
            aux,
          ],
        }))
      }).catch((error) => {
        alert(error.message)
      })
      .finally(() => {
        setLoadingMore(false)
      })
  }

  const reorder = (): void => {
    const reorderedList = new ArrayHelper([...list.results]).shuffle().build()
    setList((prev) => ({
      info: prev.info,
      results: reorderedList,
    }))
  }

  const changeMin = (newMin: number): void => {
    if (newMin > max || newMin > 20) {
      return
    }
    if (newMin <= 1) {
      setMin(1)
    } else {
      setMin(newMin)
    }
  }

  const changeMax = (newMax: number): void => {
    if (newMax < min || newMax > list.info.count) {
      return
    }
    setMax(newMax)

    if (newMax < list.results.length) {
      setList((prev) => ({
        info: prev.info,
        results: prev.results.slice(0, newMax),
      }))
    }
  }

  useEffect(() => {
    loadList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Game
      list={list.results}
      loading={loading}
      loadingMore={loadingMore}
      oneMore={getOneMore}
      reorder={reorder}
      setMin={changeMin}
      setMax={changeMax}
      min={min}
      max={max}
      reload={loadList}
    />
  )
}

export default MakeGame
