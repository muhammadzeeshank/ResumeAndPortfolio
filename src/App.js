import { Container, Grid } from "@material-ui/core";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Components/Profile/Profile";
function App() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile
              name="Muhammad Zeeshan"
              jobTitle="Computer Engineer"
              imgSrc="https://avatars.githubusercontent.com/u/69725464?v=4"
              imgAlt="Muhammad Zeeshan avatar"
            />
          </Grid>
          <Grid item xs style={{ backgroundColor: "white" }}>
            <Switch>
              <Route exact path="/" component={Resume} />
              <Route exact path="/portfolio" component={Portfolio} />
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
