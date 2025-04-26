import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CoolMode } from "./ui/cool-mode";
const Header = () => {
  return (
    <div id="home">
      <div className="flex gap-3 m-4">
        <CoolMode>
          <a href="#home">
            <Button variant="outline">
              <Icon icon="solar:home-line-duotone" width="24" height="24" />{" "}
              Home
            </Button>
          </a>
        </CoolMode>
        <CoolMode>
          <a href="#skills">
            <Button variant="outline">
              <Icon icon="carbon:skill-level-basic" width="32" height="32" />
              Skills
            </Button>
          </a>
        </CoolMode>
        <CoolMode>
          <a href="#projects">
            <Button variant="outline">
              <Icon icon="solar:laptop-3-linear" width="24" height="24" />
              Projects
            </Button>
          </a>
        </CoolMode>
        <CoolMode>
          <a href="#contact">
            <Button variant="outline">
              <Icon
                icon="solar:phone-calling-rounded-linear"
                width="24"
                height="24"
              />
              Contact
            </Button>
          </a>
        </CoolMode>
      </div>
    </div>
  );
};
export default Header;
