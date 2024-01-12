import { NextResponse } from "next/server"


export default async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()   
  // return Response.json({ data })
    console.log(data);
    return (
      <>
      {/* {data.map((item) => (
        <h1>{item.title}</h1>
      ))} */}
      <h1>Salom</h1>
      </>
    )
  }
  // export async function GET(request) {
  //   const { searchParams } = new URL(request.url)
  //   const id = searchParams.get('id')
  //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const product = await res.json()
   
  // }
