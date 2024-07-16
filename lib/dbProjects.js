import axios from 'axios';

const backend = import.meta.env.BACKEND_DEV 
const getAllProjects = async () => {
    try {
      const { data } = await axios.get(`${backend}/projects`);
      console.log("🟢🐰 All projects fetched!");
      return data;
    } catch (error) {
      console.error(`🛑🐰 Failed to fetch project`, error);
    }
  };
  
export {getAllProjects} 


