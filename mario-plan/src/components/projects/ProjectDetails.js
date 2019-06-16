import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container project-details">  
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Dolor cillum amet incididunt est. Culpa qui ad adipisicing nisi culpa esse. Aute labore aliquip pariatur in in deserunt ut quis ipsum. Eiusmod et tempor sit amet. Labore excepteur id amet adipisicing culpa minim reprehenderit duis elit. Enim proident excepteur velit excepteur voluptate do reprehenderit ex exercitation officia reprehenderit magna tempor anim.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by E Ronae'</div>
                    <div>16th June, 11am</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;