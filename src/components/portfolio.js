import React from 'react'; 
import ProjectTiles from './projects'
import portfolio from '../porfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  
    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">My Working Portfolio</h2>
            <hr></hr>
          </div>
          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectTiles key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
            ))}
          </Wrapper>
        </section>
    );
  }

export default Portfolio;