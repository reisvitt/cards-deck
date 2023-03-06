import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../presentation/contexts/auth-context/auth-context'
import Home from '../../../../presentation/pages/home'

function MakeHome(): JSX.Element {
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const submit = (name: string): void => {
    setUser({ name })
    navigate('/game')
  }

  return (
    <Home submit={submit} />
  )
}

export default MakeHome
