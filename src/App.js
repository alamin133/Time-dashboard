
import classes from './App.module.css';
import image from './images/brad.jpg'
import Card from './components/Card';

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.left}>
        <div className={classes.left_up}>
          <img className={classes.img}src={image} alt=""/>
          <h3>anything</h3>
          <h1>Al-amin ahmed</h1>
        </div>
        <div className={classes.left_down}>
          <ul>
            <li>Daily</li>
            <li className={classes.weekly}>Weekly</li>
            <li>Monthly</li>
          </ul>

        </div>

      </div>
      <div className={classes.right}>
          <Card work="Work"time="32 Hours" Duration ="Last Week-32 Hours"/>
          <Card work="Play"time="10 Hours" Duration="Last Week-8 hours"/>
          <Card work="Study"time="4 Hours" Duration ="Last Week-4 hours"/>
          <Card work="Exercise"time="4 Hours" Duration="Last Week-4 hours"/>
          <Card work="Self Care"time="6 Hours" Duration="Last Week-6 hours"/>
          <Card work="Social"time="5 Hours" Duration="Last Week-5 hours"/>
          

      </div>
    </div>
  );
}

export default App;
