"use client";
import styles from './styles.css'
import React from 'react'
import Title from './components/title-bar';
import About from './components/About-me';
import Week1 from './components/week1';
import Week2 from './components/week2';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Title />
            <About />
            <Week1 />
            <Week2 />
          </div>
        </div>
      </div>
    </main>
  )
}
