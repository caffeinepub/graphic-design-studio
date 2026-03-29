import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormData {
    id: string;
    name: string;
    email: string;
    message: string;
    projectDetails: string;
}
export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}
export type Time = bigint;
export interface ContactForm {
    id: string;
    name: string;
    email: string;
    message: string;
    submissionTime: Time;
    projectDetails: string;
}
export interface backendInterface {
    addProject(project: Project): Promise<void>;
    getAllContactForms(adminId: Principal): Promise<Array<ContactForm>>;
    getAllProjects(): Promise<Array<Project>>;
    submitContactForm(formData: ContactFormData): Promise<void>;
}
