import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SocialIconsContainer } from "./SocialIcons.style";

const SocialIcons = () => {
  return (
    <SocialIconsContainer>
      <Link>
        <FacebookIcon />
      </Link>
      <Link>
        <InstagramIcon />
      </Link>
      <Link>
        <TwitterIcon />
      </Link>
    </SocialIconsContainer>
  );
};

export default SocialIcons;
