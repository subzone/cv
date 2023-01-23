
const StarsRating = () => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star) => {        
          return (         
            <span key="star" className="star">&#9733;</span>        
          );
        })}
      </div>
    );
  };

export default StarsRating;