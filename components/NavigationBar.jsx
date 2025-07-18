import { Button } from "./ui/button";

const NavigationBar = () => {
  const handleDirectory = (id, path) => {
    window.history.pushState(null, "", path);

    const component = document.getElementById(id);

    if (component) {
      component.scrollIntoView({ behaviour: "smooth" });
    }
  };

  return (
    <div className="">
      <Button variant="nav" onClick={() => handleDirectory("home", "/")}>
        Home
      </Button>
      <Button
        variant="nav"
        onClick={() => handleDirectory("skills", "/skills")}
      >
        Skills
      </Button>
      <Button
        variant="nav"
        onClick={() => handleDirectory("projects", "/projects")}
      >
        Projects
      </Button>
      <Button
        variant="nav"
        onClick={() => handleDirectory("contact", "/contact")}
      >
        Contact
      </Button>
    </div>
  );
};

export default NavigationBar;
