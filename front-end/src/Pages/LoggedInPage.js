import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signOut } from "../Services/Firebase";
import NewEntryForm from "../Components/NewEntryForm";
import { Button, Card } from "react-bootstrap";

export const LoggedInPage = () => {

  const navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      alert("you haven't signed in... ");
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    signOut();
    alert("you've been logged out");
  };
  if (user) {
    return (
      <Card style={{
        backgroundColor: "transparent",
      }}>
        <Card.Body className="shadow-lg"
          >
          <Card.Text     
          style={{
                color: "#65c9c3",
              }}>
                Welcome {user.displayName} to Today's sync !</Card.Text>
          
            <NewEntryForm />

         <div className="card-footer" 
         style={{
                color: "#65c9c3",
              }}>
          email: {user.email}
         
          <Button className="m-2" variant="outline-warning" onClick={handleLogout}>
            {" "}
            Sign Out
          </Button>
          </div>
        </Card.Body>
      </Card>
    );
  } else return <div> you have not Signed in: 🙀 </div>;
};
