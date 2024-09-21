import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { MessageForm } from "./_components/message-form";

export default function ContactPage() {
  return (
    <div className="">
      <Home
        text="Contact"
        description={["Reach out to us and share your vision.", "Together, we'll turn your ideas into reality."]}
        connectBtn={false}
      />
      <MessageForm />
      <Contact
        text="projects"
        link="/project"
        description="Explore the impact of our innovative solutions."
      />
    </div>
  );
}
