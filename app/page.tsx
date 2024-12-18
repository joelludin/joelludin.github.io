'use client'

import dynamic from 'next/dynamic'
import Info from './components/Info'

const Scene = dynamic(() => import('./components/Scene'), { ssr: false })

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 opacity-60">
        <Scene />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Info />
      </div>
    </main>
  )
}

