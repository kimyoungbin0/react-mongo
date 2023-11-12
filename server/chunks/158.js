"use strict";exports.id=158,exports.ids=[158],exports.modules={2868:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(997),o=r(6859),i=r.n(o);let MyDocument=class MyDocument extends i(){render(){return(0,n.jsxs)(o.Html,{children:[n.jsx(o.Head,{children:n.jsx("link",{href:"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap",rel:"stylesheet"})}),(0,n.jsxs)("body",{children:[n.jsx(o.Main,{}),n.jsx(o.NextScript,{})]})]})}};let a=MyDocument},2552:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>LoginPage});var o=r(997),i=r(4413),a=e([i]);function LoginPage(){return o.jsx(o.Fragment,{children:o.jsx(i.Z,{})})}i=(a.then?(await a)():a)[0],n()}catch(e){n(e)}})},421:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{$i:()=>s,AB:()=>p,Md:()=>a,OR:()=>f,_t:()=>c,o:()=>u,qH:()=>x,rI:()=>d,xi:()=>l});var o=r(4115),i=e([o]);o=(i.then?(await i)():i)[0];let a=o.default.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;

  transform: translate(-50%, -50%);

  background-color: white;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 4px solid #f0f0f0;
`,d=o.default.div`
  margin-top: 50px;
  width: 100%;
  height: 60px;
  color: #262626;
  text-align: center;
  background-image: url("/images/logo.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`,s=o.default.div`
  margin-top: 26px;
  flex: 1;
`,l=o.default.div`
  font-size: 12px;
  font-weight: 600;
  color: #262626;
`,c=o.default.div`
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: #262626;
  margin-top: 15px;
`,u=o.default.div`
  display: flex;
  border-radius: 8px;
  padding: 16px;
  margin-top: 8px;
  background-color: #f7f7f7;
  border: 1px solid #e2e0e0;
  margin-bottom: 20px;
`,x=o.default.input`
  width: 100%;
  outline: none;
  border: none;
  height: 17px;
  font-size: 14px;
  font-weight: 400;
  background-color: #f7f7f7;
`,p=o.default.button`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: bold;
  border-radius: 64px;
  background-color: #77a7ff;
  color: white;

  cursor: pointer;
`;o.default.div`
  margin-top: 8px;
  color: #ef0000;
  font-size: 12px;
`,o.default.a`
  text-align: right;
  margin-bottom: 10px;
  color: #77a7ff;
`;let f=o.default.div`
  text-align: center;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`;n()}catch(e){n(e)}})},4413:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{Z:()=>Login});var o=r(997),i=r(6689),a=r(421),d=r(1649),s=r(1163),l=r(7889),c=r.n(l),u=e([a]);function Login(){let[e,t]=(0,i.useState)(""),[r,n]=(0,i.useState)(""),[l,u]=(0,i.useState)(null),{data:x,status:p}=(0,d.useSession)(),f=(0,s.useRouter)(),handleSubmit=async t=>{t.preventDefault(),u(null);try{let t=await (0,d.signIn)("credentials",{redirect:!1,email:e,password:r});t?t.error&&u(t.error):u("Login was unsuccessful")}catch(e){u("An unexpected error occurred")}};return(0,i.useEffect)(()=>{"authenticated"===p&&f.push("/board")},[p,f]),o.jsx("form",{onSubmit:handleSubmit,children:(0,o.jsxs)(a.Md,{children:[o.jsx(a.rI,{}),(0,o.jsxs)(a.$i,{children:[o.jsx(a.xi,{children:"아이디"}),o.jsx(a.o,{children:o.jsx(a.qH,{type:"text",value:e,onChange:e=>t(e.target.value),required:!0})}),"​",o.jsx(a.xi,{children:"비밀번호"}),o.jsx(a.o,{children:o.jsx(a.qH,{type:"password",value:r,onChange:e=>n(e.target.value),required:!0})})]}),"​",(0,o.jsxs)("div",{children:[o.jsx(a.AB,{type:"submit",children:"확인"}),o.jsx(a._t,{onClick:()=>{f.push("/register")},children:"회원가입"})]}),o.jsx(a.OR,{children:l&&o.jsx(c(),{type:"error",message:"잘못된 정보입니다",banner:!0})})]})})}a=(u.then?(await u)():u)[0],n()}catch(e){n(e)}})}};