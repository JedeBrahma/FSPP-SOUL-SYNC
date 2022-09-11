

function Home() {
  const day = new Date();
    return (
      <div className="Home">    
        <h3>{day.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'})}</h3>
      </div>
    );
  }
  
  export default Home;