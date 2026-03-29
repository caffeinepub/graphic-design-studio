import { useMutation, useQuery } from "@tanstack/react-query";
import type { Project } from "../backend.d";
import { useActor } from "./useActor";

export function useGetProjects() {
  const { actor, isFetching } = useActor();
  return useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      id: string;
      name: string;
      email: string;
      projectDetails: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContactForm(data);
    },
  });
}
