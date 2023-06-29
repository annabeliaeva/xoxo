// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header/Header'
import Navbar from '@/components/Navbar/Navbar'

export const AppLayout = ({ children }) => {
  return (
    <div className='container-fluid flex-col bg-primary'>
      <Header />
      <section className='container flex-row'>
        <Navbar/>
        <div className='col app-wrapper-content'>
          {children}
        </div>
      </section>
    </div>
  )
}