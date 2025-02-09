import image from '../assets/newsImage.webp';

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"If you're looking for the latest news, I can fetch real-time updates for you. Let me know if you want news on a specific topic like technology, politics, sports, or entertainment!"}</p>
            <a href={url} className="btn btn-primary">Read More</a>
        </div>
    </div>
  )
}

export default NewsItem;