import { Header } from 'src/components/Header'
import { BuildWork } from 'src/components/BuildWork'
import { Sidebar } from 'src/components/Sidebar'
import './App.style.scss'

export function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <main className='main'>
          <BuildWork />
        </main>
      </div>
    </>
  )
}
