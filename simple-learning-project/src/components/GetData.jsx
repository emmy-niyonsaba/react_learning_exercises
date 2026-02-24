import {ClipLoader,BeatLoader} from 'react-spinners';
import useFetch from "../hooks/useFetch"
const GetData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
  
    const { data, loading, error } = useFetch(url)

  return (
    <div>
        {loading && <BeatLoader size={200} color={"#123abc"} />}
        {error && <p>Error: {error.message}</p>}
      {data&& data.map(item => (
        <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
        </div>
      ))}
    </div>
   
  )
}

export default GetData
