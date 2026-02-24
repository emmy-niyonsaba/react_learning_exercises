import useFetch from "../hooks/useFetch"
const GetData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const data = useFetch(url)
    console.log(data)
  return (
    // <div>
    //   {data&& data.map(item => (
    //     <div key={item.id}>
    //         <h2>{item.title}</h2>
    //         <p>{item.body}</p>
    //     </div>
    //   ))}
    // </div>
    <>
    <h1></h1>
    </>
  )
}

export default GetData
