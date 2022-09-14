import OnePerfume from "./OnePerfume";

const Like = ({ perfumes }) => {
    return (
      <div className="liked-container">
      {perfumes.map((p) => (
          <OnePerfume perfume={p} key={p.id} inLikedPerfumes={0} />
        ))}
     
      </div>
    );
  };
  
  export default Like; 
  // 0 znaci da jeste u lajkovanim parfemima
  