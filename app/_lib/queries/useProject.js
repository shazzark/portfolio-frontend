import { useQuery } from "@tanstack/react-query";
import { projectsData } from "../projectData";

const getProjects = async () => {
  return projectsData
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 12);
};

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
