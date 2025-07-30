import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const NavigationBarMobile = () => {
  const router = useRouter();

  const gotoSkills = () => {
    router.push("/Skills");
  };

  const gotoProjects = () => {
    router.push("/Projects");
  };

  const gotoContact = () => {
    router.push("/Contact");
  };

  return (
    <div className="relative flex flex-col gap-4 h-32 bg-red-400 w-full top-8 items-start">
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

export default NavigationBarMobile;
