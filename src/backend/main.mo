import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Project = {
    title : Text;
    description : Text;
    category : Text;
    imageUrl : Text;
  };

  module Project {
    public func compare(project1 : Project, project2 : Project) : Order.Order {
      Text.compare(project1.title, project2.title);
    };
  };

  type ContactForm = {
    id : Text;
    name : Text;
    email : Text;
    projectDetails : Text;
    message : Text;
    submissionTime : Time.Time;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      if (form1.submissionTime < form2.submissionTime) { #less } else {
        if (form1.submissionTime == form2.submissionTime) { #equal } else {
          #greater;
        };
      };
    };
  };

  type CompleteContactForm = {
    id : Text;
    name : Text;
    email : Text;
    projectDetails : Text;
    message : Text;
    submissionTime : Time.Time;
  };

  type ContactFormData = {
    id : Text;
    name : Text;
    email : Text;
    projectDetails : Text;
    message : Text;
  };

  let projects = Map.empty<Text, Project>();
  let contactForms = Map.empty<Text, ContactForm>();

  public shared ({ caller }) func addProject(project : Project) : async () {
    if (projects.containsKey(project.title)) { Runtime.trap("This project already exists.") };
    projects.add(project.title, project);
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray().sort();
  };

  public shared ({ caller }) func submitContactForm(formData : ContactFormData) : async () {
    if (contactForms.containsKey(formData.id)) { Runtime.trap("This contact form already exists.") };
    let form : ContactForm = {
      id = formData.id;
      name = formData.name;
      email = formData.email;
      projectDetails = formData.projectDetails;
      message = formData.message;
      submissionTime = Time.now();
    };
    contactForms.add(formData.id, form);
  };

  public shared ({ caller }) func getAllContactForms(adminId : Principal) : async [ContactForm] {
    // TODO: Add proper authorization
    if (adminId.toText() != "2vxsx-fae") { Runtime.trap("Unauthorized access") };

    contactForms.values().toArray().sort();
  };
};
