'use client'

import { useEffect } from 'react'

export default function Home() {

  // redirect to /todos
  useEffect(() => {
    window.location.href = "/todos"
  });

  return (
    <div>
      <a href="/todos">Todo App</a>
    </div>
  )
}

