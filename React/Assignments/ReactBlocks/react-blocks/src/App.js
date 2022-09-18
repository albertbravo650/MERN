import React from 'react';
import './App.css';
import styles from './Components/Styles.module.css'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className={styles.app}>
        <Header />
        <div className={styles.bottom}>
          <Navigation />
          <Main>
            <div className={styles.subcont}>
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}

export default App;
