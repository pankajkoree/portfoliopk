import { Button } from "./ui/button";

const NavigationBar = () => {
  const gotoHome = () => {
    handleDirectory("home", "/");
  };

  const gotoSkills = () => {
    handleDirectory("skills", "/skills");
  };

  const gotoProjects = () => {
    handleDirectory("projects", "/projects");
  };

  const gotoContact = () => {
    handleDirectory("contact", "/contact");
  };

  const handleDirectory = (id, path) => {
    window.history.pushState(null, "", path);

    const component = document.getElementById(id);

    if (component) {
      component.scrollIntoView({ behaviour: "smooth" });
    }
  };

  return (
    <div>
      <Button variant="nav" onClick={gotoHome}>
        Home
      </Button>
      <Button variant="nav" onClick={gotoSkills}>
        Skills
      </Button>
      <Button variant="nav" onClick={gotoProjects}>
        Projects
      </Button>
      <Button variant="nav" onClick={gotoContact}>
        Contact
      </Button>
    </div>
  );
};

export default NavigationBar;
