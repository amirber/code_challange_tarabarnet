import { Link } from 'react-router-dom'

// styles
import './InfoList.css'

export default function InfoList({ info }) {
  return (
    <div className="info-list">
      {info.map(info => (
        <div key={info.id} className="card">
          <img className="image" src={info.img} alt="..."/>
          <h3>{info.title}</h3>
          <div>{info.description.substring(0, 100)}...</div>
          <Link to={`/info/${info.id}`}>ادامه مطلب</Link>
        </div>
      ))}
    </div>
  )
}
