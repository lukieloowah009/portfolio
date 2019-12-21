import React from 'react';
import './App.css';
import { Header, Layout, Navigation, Drawer,Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="My Portfolio" scroll>
              <Navigation>
                    <Link to="/portfolio">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
              </Navigation>
          </Header>
          <Drawer title="Navigation" className="landingpage-drawer">
              <Navigation>
                    <Link to="/portfolio">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
  </div>
  );
}

export default App;
