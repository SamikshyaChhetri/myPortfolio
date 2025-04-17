import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CoolMode } from "./ui/cool-mode";
const Header = () => {
  return (
    <div>
      <div className="flex gap-3 m-4">
        <CoolMode>
          <Button variant="outline">
            <Icon icon="solar:home-line-duotone" width="24" height="24" /> Home
          </Button>
        </CoolMode>

        <CoolMode>
          <Button variant="outline">
            <Icon icon="carbon:skill-level-basic" width="32" height="32" />
            Skills
          </Button>
        </CoolMode>
        <CoolMode>
          <Button variant="outline">
            <Icon icon="solar:laptop-3-linear" width="24" height="24" />
            Projects
          </Button>
        </CoolMode>
        <CoolMode>
          <a href="#about">
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
      {/* <div className="rounded-full h-5 w-5"></div> */}
    </div>
  );
};

export default Header;
