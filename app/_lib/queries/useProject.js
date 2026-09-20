import { useQuery } from "@tanstack/react-query";
import { projectsData } from "../projectData";

const getProjects = async () => {
  return [...projectsData].sort((a, b) => a.order - b.order);
};

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
}
