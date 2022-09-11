import NewEntryForm from "../Components/NewEntryForm";
import "./New.css";

function New() {
  return (
    <div className="New" style={{
      backgroundImage: `url("https://unsplash.com/photos/Uq3gTiPlqRo")`
    }}>
 
      <NewEntryForm />
    </div>
  );
}

export default New;