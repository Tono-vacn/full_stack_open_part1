// import logo from './logo.svg';
// import './App.css';

const Hello = ({ name, age }) => {//终极解构，直接分配变量
  //const name = props.name
  //const age = props.age//赋值时从对象和数组中destructure解构取值
  //const { name, age } = props//更方便解构

  const bornYear = () => new Date().getFullYear() - age//如果一个箭头函数由一个表达式组成，那么函数体就不需要写在大括号里
  //{
    //const yearNow = new Date().getFullYear()
    //return yearNow - props.age

  //}

  return (
    <div>
    <p>
      Hello {name}, you are {age} years old
    </p>
    <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  // const name = 'Peter'
  // const age = 10
  const {counter} = props
  return (
    // <>
    //   <h1>Greetings</h1>
    //   <Hello name="Maya" age={26 + 10} />
    //   <Hello name={name} age={age} />
    // </>
    <div>{counter}</div>
  )
}
//另一个强制的惯例是在应用的组件树的顶端有一个叫做App的根组件
//可以有任意数量的prop，它们的值可以是 "硬编码 "的字符串或JavaScript表达式的结果。如果prop的值是用JavaScript实现的，它必须用大括号来包裹。

//还要记住，React组件名称必须大写。

//React组件的内容（通常）需要包含一个根元素。例如，如果我们试图定义组件App而不使用最外层的div元素。结果是返回一个错误信息。
//定义应用的根元素时，不是一个特别明智的做法，它使代码看起来有点难看。
//由于根元素被强制规定了，我们在DOM树中有 "额外的 "div-elements。这可以通过使用fragments来避免，即用一个空元素来包装组件要返回的元素

//在JavaScript中，在函数中定义函数是一种常规操作
export default App