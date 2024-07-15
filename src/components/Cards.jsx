import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { useState,useEffect } from "react";

export default function Cards() {

  const [projects, setProjects] = useState([]);
  const backendUrl = process.env.BACKEND_DEV || process.env.BACKEND_DEPLOY ;

  useEffect(() => {
    fetch(`${backendUrl}/projects`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, [backendUrl]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {projects.map((project) => (
        <Card key={project.id} className="mb-4 max-w-[400px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">{project.name}</p>
              <p className="text-small text-default-500">{project.description}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Price: ${project.price}</p> 
            
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href='https://hkeportfolio.netlify.app/'
            >
              Visit project
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}