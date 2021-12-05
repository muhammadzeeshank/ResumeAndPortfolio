import { Container, Grid } from "@material-ui/core";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Container className="top_60">
        <Grid container spacing="10">
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile
              name="Muhammad Zeeshan"
              jobTitle="Computer Engineer"
              imgSrc="https://avatars.githubusercontent.com/u/69725464?v=4"
              imgAlt="Muhammad Zeeshan avatar"
            />
          </Grid>
          <Grid item xs>
            <Header />
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
