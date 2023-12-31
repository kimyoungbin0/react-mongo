import { css, styled } from "styled-components";
import { signOut } from "next-auth/react";
import { Avatar, Space } from "antd";
import Link from "next/link";

import {
  ClusterOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MessageOutlined,
  ProjectOutlined,
  SettingOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ApiOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  ApartmentOutlined,
  TableOutlined,
} from "@ant-design/icons";

import { Menu, Button, MenuProps } from "antd";
import { useRef, useState } from "react";

const StyledMenu = styled(Menu)`
  .ant-menu-item {
    font-size: 18px; // 글씨 크기를 18px로 조절

    display: flex; // Flexbox를 사용하여 내용을 정렬
    align-items: center; // 수직 중앙 정렬
    justify-content: center; // 수평 중앙 정렬
  }

  .ant-menu-item:hover,
  .ant-menu-item-selected {
    background-color: #e6e7eb !important; // 메뉴 아이템 호버 혹은 선택 시의 배경색
  }

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.leftStyledMenu}!important;
      color: ${(props) => props.theme.leftStyledMenuText}!important;
      .ant-menu-item {
        background-color: ${(props) => props.theme.leftStyledMenu}!important;
      }
    `;
  }}
`;

const Wrapper = styled.div`
  /* width: 201px; */
  max-height: 100vh;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;

  ${({ theme }) => {
    return css`
      background-color: ${(props) => props.theme.leftStyledMenu};
    `;
  }}
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MenuItemWrapper = styled.div`
  width: 100%;
  padding: 0;
  background-color: #f8f9fd;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleWrap = styled.div`
  margin-top: 150px;
  width: 100%;
  height: 150px;
  color: #262626;
  text-align: center;

  ${({ theme }) => {
    return css`
      background-image: ${(props) => props.theme.backgroundImage};
    `;
  }}

  background-size: contain; /* 이미지를 요소에 맞게 조정하면서 가로세로 비율 유지 */
  background-repeat: no-repeat; /* 배경 이미지 반복 제거 */
  background-position: center; /* 배경 이미지를 가운데 정렬 */
`;

export const StyledButton = styled(Button)`
  background-color: #1e1d23; !important
  color: white;

  border: 1px solid black;

  &:hover,
  &:active,
  &:focus {
    background-color: #1e1d23;
    color: white;
  }

  .anticon { /* anticon 클래스에 스타일 적용 */
  color: white;
}
`;

const handleLogout = (e: React.MouseEvent) => {
  e.preventDefault();
  signOut({ callbackUrl: "/" });
};

export default function MenuLeft() {
  const [collapsed, setCollapsed] = useState(false);
  const menuButtonRef = useRef(null);
  const leftTopMenuRef = useRef(null);
  const leftBottomMenuRef = useRef(null);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  type MenuItems = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItems[],
    type?: "group"
  ): MenuItems {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItems;
  }

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e);
  // };

  const items: MenuProps["items"] = [
    getItem(<Link href="/board/">Board</Link>, "sub1", <TableOutlined />),
    getItem(<Link href="/account/">Account</Link>, "sub2", <UserOutlined />),
  ];

  const items2: MenuProps["items"] = [
    getItem(
      <Link href="/" onClick={handleLogout}>
        Logout
      </Link>,
      "sub2",
      <LogoutOutlined />
    ),
  ];

  return (
    <>
      <Wrapper
        style={{ minWidth: collapsed ? 100 : 300, transition: "all 0.2s" }}
      >
        {/* collapsed 상태가 false일 때만 나머지 컴포넌트를 렌더링 */}
        {!collapsed && (
          <>
            <TitleWrap></TitleWrap>
            <MenuWrapper>
              <StyledMenu
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
                ref={leftTopMenuRef}
              />
            </MenuWrapper>
            <MenuWrapper style={{ marginBottom: 20 }}>
              <StyledMenu
                defaultSelectedKeys={[]}
                defaultOpenKeys={[]}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items2}
                ref={leftBottomMenuRef}
              />
            </MenuWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
}
