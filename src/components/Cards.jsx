import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { useState,useEffect } from "react";
import axios from 'axios';

export default function Cards() {

  const [projects, setProjects] = useState([]);
  const backendUrl = import.meta.env.BACKEND_DEV || import.meta.env.BACKEND_DEPLOY;
  
  useEffect(() => {
    console.log("Backend URL:", backendUrl); // Debugging line
    if (!backendUrl) {
      console.error("Backend URL is not defined");
      return;
    }

    axios.get(backendUrl)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, [backendUrl]);




  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {projects.map((project) => (
        <Card key={project._id} className="mb-4 max-w-[400px]">
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
            >
              Visit project
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}