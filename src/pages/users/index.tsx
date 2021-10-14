interface IUsers {
  id: number,
  name: string
}

export default function Users(props: any){
  console.log(props);
  return (
    <>
      <h1>Users</h1>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

   return {
     props: {
       users: users
     }
   }
}