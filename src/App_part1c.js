import { useState } from 'react'//文件导入了useState函数

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
//调用setTimeout函数并传递给它两个参数：一个用于增加计数器状态的函数和一个一秒钟的超时

//console.log('rendering...', counter)

const increaseByOne = () => setCounter(counter + 1)
const decreaseByOne = () => setCounter(counter - 1)
const setToZero = () => setCounter(0)

  return (
    <div>
    <Display counter={counter}/>
    <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}
//Event handler must be a function,函数引用，而不是调用
  

export default App