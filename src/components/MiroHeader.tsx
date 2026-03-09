import { styled } from "../lib/stitches.config";
import {
  Toolbar,
  Tag,
  Button,
  IconButton,
} from "@mirohq/design-system";
import {
  IconLinesThreeHorizontal,
  IconDotsThreeVertical,
  IconActivity,
  IconVideoCamera,
  IconChevronDown,
  IconPlay,
  IconFactoryHouse,
} from "@mirohq/design-system-icons";
import svgPaths from "../imports/svg-7pps5er6tr";
import img1 from "figma:asset/42b840303bc990e8ffa8c8f461770f5a53c4416d.png";
import img2 from "figma:asset/be90637410231c99908e1d893d93a7bed56b3ea6.png";
import img3 from "figma:asset/68c78e662005a13896ed6dd6f9447761ad1f8c0f.png";

const BoardHeaderWrapper = styled("div", {
  position: "absolute",
  top: "8px",
  left: "8px",
  zIndex: 100,
});

const StyledToolbar = styled(Toolbar, {
  backgroundColor: "var(--card)",
  padding: "4px",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--elevation-sm)",
});

const CollaborationHeaderWrapper = styled("div", {
  position: "absolute",
  top: "8px",
  right: "8px",
  zIndex: 100,
});

const MenuButton = styled("button", {
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  borderRadius: "var(--radius)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "var(--secondary)",
  },
});

const LogoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const Logo = styled("span", {
  width: "56px",
  height: "20px",
  position: "relative",
  display: "inline-block",
});

const BoardNameContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const BoardIcon = styled("span", {
  width: "20px",
  height: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const BoardName = styled("span", {
  fontFamily: "var(--font-noto)",
  fontSize: "var(--text-base)",
  color: "var(--foreground)",
});

const Badge = styled("div", {
  backgroundColor: "#ffed7b",
  padding: "2px 4px",
  borderRadius: "4px",
  fontFamily: "var(--font-noto)",
  fontSize: "var(--text-sm)",
  fontWeight: "var(--font-weight-semibold)",
  color: "#503a03",
});

const MenusSection = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const StyledIconButton = styled("button", {
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  borderRadius: "var(--radius)",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    backgroundColor: "var(--secondary)",
  },
});

const FacilitationButton = styled("button", {
  height: "32px",
  padding: "0 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  borderRadius: "var(--radius)",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "var(--secondary)",
  },
});

const NotificationDot = styled("div", {
  position: "absolute",
  top: "8px",
  right: "8px",
  width: "8px",
  height: "8px",
  backgroundColor: "var(--primary)",
  borderRadius: "50%",
  border: "1.5px solid white",
});

const IconWithNotification = styled("div", {
  position: "relative",
});

const AvatarGroup = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: "-8px",
});

const Avatar = styled("div", {
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  overflow: "hidden",
  border: "2px solid white",
  marginRight: "-8px",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const UserMenuButton = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "2px 8px 2px 2px",
  backgroundColor: "var(--secondary)",
  border: "none",
  borderRadius: "16px",
  cursor: "pointer",
  "&:hover": {
    opacity: 0.9,
  },
});

const UserAvatar = styled("div", {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  overflow: "hidden",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ActionsSection = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export function MiroHeader() {
  return (
    <>
      {/* Board Header - Top Left */}
      <BoardHeaderWrapper>
        <Toolbar>
          <Toolbar.Icon>
            <IconLinesThreeHorizontal />
          </Toolbar.Icon>
          <Toolbar.Item>
            <Logo>
              <svg
                width="56"
                height="20"
                fill="none"
                viewBox="0 0 56 20"
              >
                <path d={svgPaths.p1e551700} fill="#222428" />
              </svg>
            </Logo>
          </Toolbar.Item>
          <Toolbar.Icon>
            <BoardIcon>
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 17 17"
              >
                <path
                  d={svgPaths.p3323a800}
                  fill="url(#paint0_linear)"
                  stroke="#22883F"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="8.33333"
                    x2="8.33333"
                    y1="0"
                    y2="16.6667"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4EBE6C" />
                    <stop offset="1" stopColor="#6BD98B" />
                  </linearGradient>
                </defs>
              </svg>
            </BoardIcon>
          </Toolbar.Icon>
          <Toolbar.Item>
            <BoardName>Roadmap brainstorm</BoardName>
          </Toolbar.Item>
          <Toolbar.Item>
            <Tag variant="sunshine">Internal</Tag>
          </Toolbar.Item>
          <Toolbar.Icon>
            <IconDotsThreeVertical />
          </Toolbar.Icon>
        </Toolbar>
      </BoardHeaderWrapper>

      {/* Collaboration Header - Top Right */}
      <CollaborationHeaderWrapper>
        <Toolbar>
          {/* Facilitation Tools Icon */}
          <Toolbar.Icon>
            <svg
              width="48"
              height="24"
              fill="none"
              viewBox="0 0 44 20"
            >
              <path
                d={svgPaths.p334fb980}
                fill="currentColor"
              />
              <path
                d={svgPaths.p19abcc00}
                fill="currentColor"
              />
              <path
                d={svgPaths.p1499a400}
                fill="currentColor"
                fillRule="evenodd"
              />
              <path
                d={svgPaths.p317af900}
                fill="currentColor"
              />
            </svg>
          </Toolbar.Icon>

          {/* Bell Icon with Notification */}
          <Toolbar.Icon>
            <IconWithNotification>
              <IconActivity />
            </IconWithNotification>
          </Toolbar.Icon>

          {/* Video Camera Icon */}
          <Toolbar.Icon>
            <IconVideoCamera />
          </Toolbar.Icon>

          {/* Avatar Group */}
          <Toolbar.Item asChild>
            <AvatarGroup>
              <Avatar>
                <img src={img2} alt="" />
              </Avatar>
              <Avatar>
                <img src={img3} alt="" />
              </Avatar>
            </AvatarGroup>
          </Toolbar.Item>

          {/* User Menu */}
          <Toolbar.Item asChild>
            <UserMenuButton>
              <UserAvatar>
                <img src={img1} alt="" />
              </UserAvatar>
              <span>7</span>
              <IconChevronDown />
            </UserMenuButton>
          </Toolbar.Item>
          {/* Present Button */}
          <Toolbar.Item asChild>
            <Button size="medium" variant="secondary">
              <Button.IconSlot>
                <IconPlay />
              </Button.IconSlot>
              <Button.Label>Present</Button.Label>
            </Button>
          </Toolbar.Item>

          {/* Share Button */}
          <Toolbar.Item asChild>
            <Button size="medium" variant="primary">
              <Button.IconSlot>
                <IconFactoryHouse />
              </Button.IconSlot>
              <Button.Label>Share</Button.Label>
            </Button>
          </Toolbar.Item>
        </Toolbar>
      </CollaborationHeaderWrapper>
    </>
  );
}