import NewEntryForm from "../Components/NewEntryForm";
import "./New.css";
import bootstrapBundleMin from "bootstrap/dist/js/bootstrap"

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