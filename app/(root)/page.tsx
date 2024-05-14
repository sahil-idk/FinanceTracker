import React from 'react'
import Header from '@/components/Header'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { log } from 'console'
const Home = () => {

  const loggedIn = {
    firstName: 'Sahil',
    lastName: 'kun',
    email: 'sahil.sahil@research.iiit.ac.in'
  }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <Header
            type="greeting"
            title="Welcome to Finance App"
            user="Sahil"
            subtext="This is a finance app that helps you manage your finances."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={1000}
          />
        </header>
        </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:123.6},{currentBalance:100.9}]}
        />

     
    </section>
  )
}

export default Home
