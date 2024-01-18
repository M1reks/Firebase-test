import { useNavigate } from "react-router-dom";
import React, {useEffect} from "react";


const HomePage = () => {

    const navigate = useNavigate()


    useEffect(() => {
        navigate("/login")
    }, []);

  return (
      <>
          <form>
              <input type="text"/>
              <input type="text"/>
              <button>LogIn</button>
          </form>
      </>
  )
};


export default HomePage;
