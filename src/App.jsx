import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singers from './Singers'
import User from './User'
import Friends from './Friends'


function App() {

  // const actor = ['Sakib khan', 'Salman shah', 'Amir Khan', 'Riaz', 'Manna'];

  // const singers = [
  //   {id:1, name: 'Mahfuzur Rahman', age: 63},
  //   {id: 2, name: 'Eva Rahman', age: 38},
  //   {id: 3, name: 'shuvro Dev', age: 55},
  //   {id: 4, name: 'Prithom Hasan', age: 28},
  //   {id: 5, name: 'Asif', age: 45},
  // ]

  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <User></User>
      {/* {
        singers.map(singer => <Singers singer={singer} ></Singers>)
      }

      <Actor name='Bappa Raj'></Actor>
      {
        actor.map(name => <Actor name={name} ></Actor>)
      } */}
      {/* <Todo 
        task='Learn React' 
        isDone={true}/>
      <Todo 
        task='Explore core concept' 
        isDone={false} />
      <Todo 
        task='Try JSX' 
        isDone={true} /> */}
      {/* <Person></Person>
      <Device name='Laptop' price='55k'></Device>
      <Device name='Mobile' price='17k'></Device>
      <Device name='Watch' price='29k'></Device>
      <Person></Person>
      <Student grade='7' score='99' />
      <Student grade={8} score='99' />
      <Student/>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  console.log(props);
  return <h3>This is Device: {props.name} </h3>
}

function Person () {
  const age = 25;
  const money = 13;
  const student = {name:'Sakib', age: 12};
  return (
    <h3>I am a {student.name} with age {money + student.age}.</h3>
  )
}

const Student = ({grade=1, score=0}) => {
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a Student.</h3>
    <p>Class: {grade}</p>
    <p>Score: {score} </p>
  </div>
  )
}

function Developer() {
  const devStyle = {
    border: "2px solid purple",
    padding: '6px',
    margin: '8px',
    color: 'blue',
    borderRadius: '30px'
  }
  return (
    <div style={devStyle}>
      <h5>This is a Dev</h5>
      <p>Name:</p>
      <p>Position</p>
    </div>
  )
}

export default App
