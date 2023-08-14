'use client'

import { api } from "@/lib/axios"
import { useState } from "react"

export default function Test() {
  const [data, setData] = useState()

  async function handleFetchData() {
    const response = await api.get('/hello')
    setData(response.data)
  }

  return (
    <div className="bg-white w-screen h-screen">
      <h1 className="text-black">Olá, mundo</h1>
      <button onClick={() => handleFetchData()}>Fetch data</button>
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}