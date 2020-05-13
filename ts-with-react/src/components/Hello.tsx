import React from 'react'

interface HelloProps {
  message: string
}
// const Hello = (props: HelloProps) => {
//   return <h2>{ props.message }</h2>
// }
// const Hello: React.FunctionComponent<HelloProps> = (props) => {
//   console.log(props.children)
//   return <h2>{ props.message }</h2>
// }
// FC 为 FunctionComponent 的类型别名
const Hello: React.FC<HelloProps> = (props) => {
  return <h2>{ props.message }</h2>
}
Hello.defaultProps = {
  message: 'hello world'
}
export default Hello