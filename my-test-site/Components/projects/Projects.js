import React from 'react'
import Card from './Card'
import list from './ProjectList'

function ProjectsCard() {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Projects</h1>
           {list.map((listItem) => (
                <Card
                    key={listItem.key}
                       name={listItem.name}
                    description={listItem.description}
                />
            ))}
        </div>
    )
}

export default ProjectsCard
