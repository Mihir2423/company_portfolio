import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Projects } from "./_components/projects";

export default function ProjectPage() {
  return (
    <div className="">
      <Home
        text="Project"
        description={[
          "Explore our platform and discover",
          "how we empower innovation in education.",
        ]}
        connectBtn={true}
      />
      <Projects />
      <Contact
        text="contact"
        link="/contact"
        description="Contact us and let's bring your vision to life"
      />
    </div>
  );
}
