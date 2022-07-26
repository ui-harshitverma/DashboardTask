import './App.css';
import Main from './Components/main/main';
import SideBar from './Components/SideBar/SideBar';
import { useState } from 'react';
import './custom.css'

function App() {
  const [isopen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isopen);
  const [val, setVal] = useState(false)
  const myFun = () => {
    setVal(!val)
  }
  return (
    <>
      <div className={val?`sideBar_container--none`:`sideBar_container` }>
        <SideBar funName={toggle} value1={val} />
      </div>
      <div className={val?`main_container`:`main_container--width` }>
        <Main toggleBar1={myFun} />
      </div>
    </>
  );
}

export default App;
