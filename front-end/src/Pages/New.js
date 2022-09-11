import NewEntryForm from "../Components/NewEntryForm";
import "./New.css";


function New() {
  return (
    <div className="New" style={{
      backgroundColor: "#cce7e8",
          color: "#1979a9",
      backgroundImage: `url("https://unsplash.com/photos/Uq3gTiPlqRo")`
    }}>
 
      <NewEntryForm />
    </div>
  );
}

export default New;