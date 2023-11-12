"use strict";exports.id=807,exports.ids=[807],exports.modules={9807:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.r(t),n.d(t,{default:()=>App});var l=n(997),i=n(9199),r=n(3139),c=n(6126),a=n(2616),s=n.n(a),d=n(5518),u=n.n(d),h=n(6689),m=n.n(h),f=n(1649),g=e([r,c]);function App({Component:e,pageProps:t}){return m().useLayoutEffect=m().useEffect,l.jsx(f.SessionProvider,{children:(0,l.jsxs)(s(),{locale:u(),children:[l.jsx(r.Global,{styles:(0,c.W)(!0)}),l.jsx(i.Z,{children:l.jsx(e,{...t})})]})})}[r,c]=g.then?(await g)():g,o()}catch(e){o(e)}})},6126:(e,t,n)=>{n.a(e,async(e,o)=>{try{n.d(t,{W:()=>globalStyles});var l=n(3139),i=e([l]);l=(i.then?(await i)():i)[0];let globalStyles=e=>l.css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "Roboto", sans-serif; // 글꼴 적용
  }
  /* @font-face {
    font-family: "myfont";
    src: url("/fonts/scifibit.ttf");
  } */
`;o()}catch(e){o(e)}})},9199:(e,t,n)=>{n.d(t,{Z:()=>Layout});var o=n(997),l=n(1163),i=n(6689),r=n(7518),c=n(1649),a=n(1664),s=n.n(a),d=n(6076),u=n.n(d),h=n(2127),m=n.n(h),f=n(4572),g=n.n(f),x=n(274),b=n.n(x),p=n(3800),y=n.n(p);let w=(0,r.styled)(b())`
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

  ${({theme:e})=>r.css`
      background-color: ${e=>e.theme.leftStyledMenu}!important;
      color: ${e=>e.theme.leftStyledMenuText}!important;
      .ant-menu-item {
        background-color: ${e=>e.theme.leftStyledMenu}!important;
      }
    `}
`,k=r.styled.div`
  /* width: 201px; */
  max-height: 100vh;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: auto;

  ${({theme:e})=>r.css`
      background-color: ${e=>e.theme.leftStyledMenu};
    `}
`,j=r.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;r.styled.div`
  width: 100%;
  padding: 0;
  background-color: #f8f9fd;
  display: flex;
  flex-direction: row;
  align-items: center;
`;let v=r.styled.div`
  margin-top: 150px;
  width: 100%;
  height: 150px;
  color: #262626;
  text-align: center;

  ${({theme:e})=>r.css`
      background-image: ${e=>e.theme.backgroundImage};
    `}

  background-size: contain; /* 이미지를 요소에 맞게 조정하면서 가로세로 비율 유지 */
  background-repeat: no-repeat; /* 배경 이미지 반복 제거 */
  background-position: center; /* 배경 이미지를 가운데 정렬 */
`;(0,r.styled)(y())`
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
`;let handleLogout=e=>{e.preventDefault(),(0,c.signOut)({callbackUrl:"/"})};function MenuLeft(){let[e,t]=(0,i.useState)(!1);(0,i.useRef)(null);let n=(0,i.useRef)(null),l=(0,i.useRef)(null);function getItem(e,t,n,o,l){return{key:t,icon:n,children:o,label:e,type:l}}let r=[getItem(o.jsx(s(),{href:"/board/",children:"Board"}),"sub1",o.jsx(g(),{})),getItem(o.jsx(s(),{href:"/account/",children:"Account"}),"sub2",o.jsx(m(),{}))],c=[getItem(o.jsx(s(),{href:"/",onClick:handleLogout,children:"Logout"}),"sub2",o.jsx(u(),{}))];return o.jsx(o.Fragment,{children:o.jsx(k,{style:{minWidth:e?100:300,transition:"all 0.2s"},children:!e&&(0,o.jsxs)(o.Fragment,{children:[o.jsx(v,{}),o.jsx(j,{children:o.jsx(w,{mode:"inline",inlineCollapsed:e,items:r,ref:n})}),o.jsx(j,{style:{marginBottom:20},children:o.jsx(w,{defaultSelectedKeys:[],defaultOpenKeys:[],mode:"inline",inlineCollapsed:e,items:c,ref:l})})]})})})}let M={correct:"#5babab",present:"#fdb800",absent:"#908790"},S={leftStyledMenu:"#3e4146",leftStyledMenuText:"white",ContentContainer:"#313036",text:"white",rightMenu:"#1e1d23",RecentWrapper:"#242426",border:"#1e1d23",select:"black",treeSelectBorder:"#1e1d23",button:"black",buttonBorder:"white",mapButton:"black",mapBackground:"black",backgroundImage:"url('/images/logo3.png')",hover:"black",color:{...M}},$={leftStyledMenu:"#49536C",leftStyledMenuText:"white",ContentContainer:"#F5F6FA",text:"black",rightMenu:"white",RecentWrapper:"#F5F6FA",border:"#cccccc",select:"white",treeSelectBorder:"#cccccc",button:"white",buttonBorder:"#cccccc",mapButton:"white",mapBackground:"white",backgroundImage:"url('/images/logo5.png')",hover:"#cccccc",color:{...M}},T=r.styled.button`
  position: fixed;
  top: 0;
  left: 4px;
  z-index: 9999;

  width: 40px;
  margin: 10px;
  border: none;
  border-radius: 5px;

  ${({theme:e})=>r.css`
      background-color: ${e=>e.theme.rightMenu};
      box-shadow: ${e=>e.theme.text};
      border: 1px solid ${e=>e.theme.border};
    `}
`,ThemeModeButton=({toggleTheme:e,themeMode:t})=>o.jsx(T,{onClick:e,children:"lightTheme"===t?"\uD83C\uDF1D":"\uD83C\uDF1A"}),C=[""],B=["/","/register"],F=r.styled.div`
  // layoutHeight prop을 받도록 타입 정의 수정
  height: calc(100vh - ${({layoutheight:e})=>e}px);
  display: flex;
`,L=r.styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow: auto;

  ${({theme:e})=>r.css`
      background-color: ${e=>e.theme.ContentContainer};
    `}

  display: flex;
  justify-content: center;
  align-items: center;
`;function Layout(e){let t=(0,l.useRouter)(),[n,a]=(0,i.useState)(!1),[s,d]=(0,i.useState)(!0),{data:u}=(0,c.useSession)(),[h,m]=(0,i.useState)("lightTheme");(0,i.useEffect)(()=>{let checkMobileView=()=>{a(window.innerWidth<=768)};return window.addEventListener("resize",checkMobileView),checkMobileView(),()=>window.removeEventListener("resize",checkMobileView)},[]),(0,i.useEffect)(()=>{let fetchData=async()=>{u||await new Promise(e=>setTimeout(e,50)),d(!1)};fetchData()},[u]);let f=C.includes(t.asPath),g=B.includes(t.asPath);return s?null:(0,o.jsxs)(r.ThemeProvider,{theme:"lightTheme"===h?$:S,children:[!g&&!n&&o.jsx(ThemeModeButton,{toggleTheme:()=>{"lightTheme"===h?m("darkTheme"):m("lightTheme")},themeMode:h}),(0,o.jsxs)(F,{layoutheight:f&&!n?50:0,children:[!g&&!n&&o.jsx(MenuLeft,{}),o.jsx(L,{children:e.children})]})]})}}};