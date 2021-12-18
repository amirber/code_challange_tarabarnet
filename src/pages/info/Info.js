import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Info.css'

export default function Info() {
  const { id } = useParams()
  const url = 'http://localhost:3000/data/' +id
  const { error, isPending, data: info } = useFetch(url)
  let history = useHistory();
  const handleDelete = () => [
    fetch('http://localhost:3000/data/' +id, {
      method:'DELETE'
    }).then(()=> {
      history.push('/')
    })
  ]
  return (
    <div className="info">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {info && (
        <>
          <h2 className="page-title">{info.title}</h2>
          <img className="image" src={info.img} alt="..."/>
          <p className="description">{info.description}</p>
          <button className='remove-btn' onClick={handleDelete}>حذف این شخص</button>
        </>
      )}
    </div>
  )
}