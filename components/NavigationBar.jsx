import { Button } from "./ui/button";

const NavigationBar = () => {
  return (
    <div className="">
      <Button variant="nav">Home</Button>
      <Button variant="nav">Skills</Button>
      <Button variant="nav">Projects</Button>
      <Button variant="nav">Contact</Button>
    </div>
  );
};

export default NavigationBar;
