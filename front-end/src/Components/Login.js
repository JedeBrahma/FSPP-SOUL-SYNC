import React, { useContext, useEffect } from "react";

import { Button, Card } from "react-bootstrap";
import { UserContext } from "../Providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut } from "../Services/Firebase";
// import New from "../Pages/New";

export const Login = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/loggedIn");
    }
  }, [user, navigate]);

  return (
    
      <Card className="shadow-lg"
          style={{
            color: "#C7ded6",
            backgroundColor: "transparent"
          }} >
        <Card.Body>
          <Card.Text className="fst-italic">Welcome and do sign in ..</Card.Text>
          <Button className="m-3" variant="info" onClick={signInWithGoogle}>
            Sign in With google
          </Button>

          <Button className="m-3" variant="warning" onClick={signOut}>
            {" "}
            sign out
          </Button>
        </Card.Body>
      </Card>
   
  );
};
