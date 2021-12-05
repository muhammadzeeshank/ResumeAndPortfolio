import { Container, Grid } from "@material-ui/core";
// import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { MyContainer, ItemContainer } from "./App.styles";
function App() {
  return (
    <>
      <Container>
        <MyContainer>
          <Profile
            name="Muhammad Zeeshan"
            jobTitle="Computer Engineer"
            imgSrc="https://avatars.githubusercontent.com/u/69725464?v=4"
            imgAlt="Muhammad Zeeshan avatar"
          />
          <ItemContainer>
            <Header />
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </ItemContainer>
        </MyContainer>
      </Container>
    </>
  );
}

export default App;
