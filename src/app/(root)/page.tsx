import { Contact } from "@/components/contact";
import { Home } from "@/components/home";
import { Video, Work, Services, Testimonials } from "./_components";

export default function MainPage() {
  return (
    <div className="">
      <Home
        text="Shadebyte"
        description={[
          "We create products that serves both users",
          "and businesses and drive real results.",
        ]}
        connectBtn={true}
      />
      <Video />
      <Work />
      <Services />
      <Testimonials />
      <Contact
        text="contact"
        link="/contact"
        description="Contact us and let's bring your vision to life"
      />
    </div>
  );
}
