import { useFetch } from '../../hooks/useFetch'
import InfoList from '../../components/InfoList'

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/data')

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <InfoList info={data} />}
    </div>
  )
}
