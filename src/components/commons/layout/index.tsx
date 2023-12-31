import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MenuLeft from "./navigation/menu";
import { css, styled } from "styled-components";
import { light, dark } from "../../../commons/styles/themes"; // Update the path accordingly
import { useSession } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { ThemeModeButton } from "../../units/darkButton/DarkButton";

const HIDDEN_MENUS = [""];
const HIDDEN_LMENUS = ["/", "/register"];

const StyledLayout = styled.div<{ layoutheight: number }>`
  // layoutHeight prop을 받도록 타입 정의 수정
  height: calc(100vh - ${({ layoutheight }) => layoutheight}px);
  display: flex;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow: auto;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.ContentContainer};
    `;
  }}

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [waitingForSession, setWaitingForSession] = useState(true);
  const { data: session } = useSession();

  let localThemeMode = "lightTheme"; // 기본값을 "lightTheme"로 설정
  // 브라우저 환경에서만 window 객체에 접근하는 코드를 조건문으로 감싸줍니다.
  if (typeof window !== "undefined") {
    localThemeMode = window.localStorage.getItem("theme") || "lightTheme";
  }

  const [themeMode, setThemeMode] = useState<"lightTheme" | "darkTheme">(
    "lightTheme"
  );

  const theme = themeMode === "lightTheme" ? light : dark;

  const toggleTheme = () => {
    if (themeMode === "lightTheme") {
      setThemeMode("darkTheme");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", "darkTheme");
      }
    } else {
      setThemeMode("lightTheme");
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", "lightTheme");
      }
    }
  };

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobileView);
    checkMobileView();

    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!session) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      setWaitingForSession(false);
    };

    fetchData();
  }, [session]);

  const isHiddenMenu = HIDDEN_MENUS.includes(router.asPath);
  const isHiddenLMENUS = HIDDEN_LMENUS.includes(router.asPath);

  const layoutHeight = isHiddenMenu && !isMobile ? 50 : 0;

  if (waitingForSession) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      {!isHiddenLMENUS && !isMobile && (
        <ThemeModeButton toggleTheme={toggleTheme} themeMode={themeMode} />
      )}
      <StyledLayout layoutheight={layoutHeight}>
        {!isHiddenLMENUS && !isMobile && <MenuLeft />}
        <ContentContainer>{props.children}</ContentContainer>
      </StyledLayout>
    </ThemeProvider>
  );
}
