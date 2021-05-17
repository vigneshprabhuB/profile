import {Component} from 'react';


class Projects extends Component{
    
 
    render(){
        return (
          <div>
              <hr />

              <center><h1>Projects</h1></center>
        <div className="projects">
            
            {this.props.projects.map((p)=>this.displayValue(p))}
            
        </div></div>  
        
        );
    }
    displayValue(p){
    
    return (
       <div className="projectCard" key={p.id}>
        <h2> {p.title}</h2>
        <p> {p.description}</p>
        <img src={p.image} alt='project'></img>
        </div>);
    }
}
export default Projects; 