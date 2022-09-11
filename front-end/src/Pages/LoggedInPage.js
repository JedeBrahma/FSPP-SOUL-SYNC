import React, { useContext, useEffect } from "react";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate} from "react-router-dom";
import { signOut } from "../Services/Firebase";
import NewEntryForm from "../Components/NewEntryForm";
import { Button, Card } from "react-bootstrap";


export const LoggedInPage = () => {
  const imgStyle = {
      width:'30vh',
      height:'30vh'
  }
  const navigate = useNavigate();
  const user = useContext(UserContext);
  
  useEffect(() => { 
    if(!user) {
        alert("you haven't signed in... ")
        navigate("/");
      }
    }, [user, navigate]);

  
  const handleLogout = async () => {
    signOut()
    alert("you've been logged out")
  };
  if ( user ){
    return (
      <Card>
        <Card.Body>
        <Card.Text>
        <h1>Welcome {user.displayName} to Today's sync !</h1>
        </Card.Text>
        <div>
         <NewEntryForm />
        </div>
        email: {user.email}
        <Button className="m-2" variant="warning" onClick={handleLogout}> Sign Out</Button>
        </Card.Body>
        </Card>
    );
  } else 
  return (
    <div> you have not Signed in: 🙀 </div>
  )
}
