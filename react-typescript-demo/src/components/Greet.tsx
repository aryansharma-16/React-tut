type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
  return (
    <div><h3>Greet!!!{props.name }</h3></div>
  )
}
