export default function Page() {

    const nome = 'João'
    const idade = 30

  return(
    <div>
        <div>{nome} tem {idade} anos.</div>
        <div>{idade + 15}</div>
        <div>{Math.random()}</div>
    </div>    
  )
}

