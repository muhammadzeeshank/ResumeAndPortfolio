import { Container } from "@material-ui/core";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { MyContainer, ItemContainer, MainContent } from "./App.styles";
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
            <MainContent>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </MainContent>
            <Footer />
          </ItemContainer>
        </MyContainer>
      </Container>
    </>
  );
}

export default App;
