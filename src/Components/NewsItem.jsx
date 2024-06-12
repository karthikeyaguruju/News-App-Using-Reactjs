const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block mx-3 px-2 py-2 animate-card" style={{ maxWidth: "345px", height: "100%" }}>
        <img src={src ? src : "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
        <div className="card-body" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : " The variety of breaking news stories in real-time news coverage as needed to better context of your news app."}</p>
        <a href={url} target="_blank" className="btn btn-primary animate-button">🚀 See Full Story ✨</a>
    </div>

      </div>
    );
  };
  
  export default NewsItem;
  