import svgPaths from "./svg-ii6wrw2fas";
import img448D6Dc408D148408E94Ad17E878E9362 from "figma:asset/a2dde8910b8acabea52df5c786de0fb6913be54a.png";
import img1Jpg from "figma:asset/6e37f6825a64a4782fb24d4f0c6d5900aefa4b85.png";
import imgContainer from "figma:asset/e48730d507d77249b7442ef5fb5b8b9e9b13bbbf.png";

function Home() {
  return <div className="h-[24px] shrink-0 w-[49px]" data-name="Home" />;
}

function Menu() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-start left-[calc(50%+66.96px)] top-[38px] w-[46.096px]" data-name="Menu">
      <Home />
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch cursor-pointer flex gap-[25px] items-center left-[calc(50%-0.5px)] top-[calc(50%-0.5px)]">
      <button className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Component 4">
        <div aria-hidden="true" className="absolute border-[#f9a825] border-b border-solid inset-0 pointer-events-none" />
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#f9a825] text-[16px] text-left">Home</p>
      </button>
      <button className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Component 5">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-left text-white">About us</p>
      </button>
      <button className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Component 6">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-left text-white">Browse Projects</p>
      </button>
      <button className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Component 8">
        <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-left text-white">Contact us</p>
      </button>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2d2ba100} fill="var(--fill-0, #FDFDFD)" id="Vector" />
          <path d={svgPaths.p22977070} fill="var(--fill-0, #FDFDFD)" id="Vector_2" />
          <path d={svgPaths.p37aec00} fill="var(--fill-0, #F9A825)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0">
      <Icon />
      <div className="bg-white h-full opacity-20 shrink-0 w-px" data-name="Line" />
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[1.5]">Sign in</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#f9a825] content-stretch flex h-[54px] items-center justify-center left-[1539px] px-[24px] py-[10px] rounded-[8px] top-[calc(50%-0.5px)] w-[160px]" data-name="Button">
      <Frame2 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-[403px] whitespace-pre-wrap">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[#0f172a] text-[24px] w-full">Welcome Back</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#64748b] text-[14px] w-full">Login to your account to manage projects or view quotes.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="bg-[#f8fafc] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px] w-[171px] whitespace-pre-wrap">{`Enter your email `}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full whitespace-pre-wrap">Email</p>
      <EmailInput />
    </div>
  );
}

function PasswordInput() {
  return (
    <div className="bg-[#f8fafc] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Password Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6a7282] text-[14px]">Enter your password</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Arial:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-full whitespace-pre-wrap">Password</p>
      <PasswordInput />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9a825] h-[48px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-center text-white whitespace-pre-wrap">Login</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Button1 />
    </div>
  );
}

function Text() {
  return <div className="absolute border-[#e2e8f0] border-solid border-t h-px left-0 top-[7px] w-[169px]" data-name="Text" />;
}

function Container() {
  return (
    <div className="col-1 h-[16px] ml-0 mt-0 relative row-1 w-[169px]" data-name="Container">
      <Text />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container />
    </div>
  );
}

function Text1() {
  return <div className="absolute border-[#e2e8f0] border-solid border-t h-px left-0 top-[7px] w-[169px]" data-name="Text" />;
}

function Container1() {
  return (
    <div className="col-1 h-[16px] ml-0 mt-0 relative row-1 w-[169px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container1 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Group />
      <p className="font-['Arial:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#666] text-[12px] uppercase">{`Or `}</p>
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[202.98px]">
      <div className="h-[24px] overflow-clip relative shrink-0 w-[24.587px]" data-name="google">
        <div className="absolute inset-[42.03%_6.25%_16.85%_50.9%]" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5373 9.87">
            <path d={svgPaths.p1436380} fill="var(--fill-0, #4286F5)" id="vector" />
          </svg>
        </div>
        <div className="absolute inset-[58.65%_19.54%_6.25%_11.01%]" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0744 8.42342">
            <path d={svgPaths.p22591200} fill="var(--fill-0, #34A955)" id="vector" />
          </svg>
        </div>
        <div className="absolute inset-[30.15%_74.5%_30.36%_6.25%]" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4.732 9.47775">
            <path d={svgPaths.pd311b00} fill="var(--fill-0, #F9BB08)" id="vector" />
          </svg>
        </div>
        <div className="absolute inset-[6.25%_19.24%_58.65%_11.01%]" data-name="vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1476 8.42332">
            <path d={svgPaths.p3441cec0} fill="var(--fill-0, #E94136)" id="vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[16px] text-center">Continue with Google</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%+19.49px)] top-[13px]">
      <Frame1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame14 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame26 />
      <Frame15 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame23 />
      <Frame21 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center leading-[1.5] not-italic relative shrink-0 text-[14px]">
      <p className="font-['Arial:Regular',sans-serif] relative shrink-0 text-[#4a5565]">New here?</p>
      <p className="font-['Arial:Bold',sans-serif] relative shrink-0 text-[#f9a825]">Create your account</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[32px] items-center left-1/2 top-[calc(50%-0.5px)] w-[414px]">
      <Frame24 />
      <Frame />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="-translate-x-1/2 absolute bg-white border border-[#e2e8f0] border-solid h-[581px] left-[calc(79.17%-84px)] rounded-[12px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1)] top-[248px] w-[478px]" data-name="Primitive.div">
      <Frame25 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute inset-[16px_15px_16px_17px]" data-name="SVG">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p6b66980} fill="var(--fill-0, #62646A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonRight() {
  return (
    <div className="-translate-y-1/2 absolute bg-white right-[128px] rounded-[24px] shadow-[0px_1.2px_1.923px_0px_rgba(0,0,0,0.02),0px_2px_3.681px_0px_rgba(0,0,0,0.04),0px_1px_5px_0px_rgba(0,0,0,0.05)] size-[48px] top-[calc(50%+2206px)]" data-name="Button - right">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute inset-[16px_15px_16px_17px]" data-name="SVG">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12a49300} fill="var(--fill-0, #62646A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonRight1() {
  return (
    <div className="bg-white opacity-50 relative rounded-[24px] shadow-[0px_1.2px_1.923px_0px_rgba(0,0,0,0.02),0px_2px_3.681px_0px_rgba(0,0,0,0.04),0px_1px_5px_0px_rgba(0,0,0,0.05)] size-[48px]" data-name="Button - right">
      <Svg1 />
    </div>
  );
}

function Frame3() {
  return <div className="-translate-x-1/2 absolute h-[27px] left-1/2 top-[552px] w-[450px]" />;
}

function Component1Jpg() {
  return (
    <div className="-translate-x-1/2 absolute h-[456px] left-1/2 overflow-clip top-0 w-[1920px]" data-name="1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1Jpg} />
      <Frame3 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[19.664px] left-[0.48px] top-[109.13px] w-[239.425px]" data-name="Link">
      <div className="absolute h-[63.5px] left-0 top-[-15.44px] w-[65.612px]" data-name="448D6DC4-08D1-4840-8E94-AD17E878E936 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.28%] max-w-none top-0 w-[97.44%]" src={img448D6Dc408D148408E94Ad17E878E9362} />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.36%_24.99%_8.31%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-5%_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
            <path d={svgPaths.p231a59f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.64%_8.35%_12.49%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
            <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.36%_8.35%_8.31%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p1aaf0300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.13%_33.15%_33.54%_33.52%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33334 8.33334">
            <path d={svgPaths.p1a50b2f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.11%_27.03%_72.89%_72.93%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.36%_8.32%_12.47%_41.68%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5">
            <path d={svgPaths.p21836480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_75.01%_12.5%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11.6667">
            <path d={svgPaths.p1a426680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.36%_75.01%_74.97%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[35.972px] items-start relative shrink-0 w-[340px]" data-name="Container">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[298px]">
      <Container3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[88.681px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon5 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">About Us</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">Contact Us</p>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon7 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">How It Works</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[406.45px] top-[181.45px] w-[102.547px]">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[179.912px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon8 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[159.445px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Subscription Plans</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon9 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[163.185px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Refund Policy</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon10 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[170.999px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Profile Tips</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[687.52px] top-[181.45px] w-[191.457px]">
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[179.912px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon11 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[159.445px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon12 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[163.185px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon13 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[170.999px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Faq</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[968.59px] top-[184.92px] w-[191.457px]">
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[436px] left-[291px] right-[292px] top-0" data-name="Container">
      <Link />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arimo:Regular',sans-serif] font-normal justify-center leading-[0] left-[0.48px] text-[#f9f9f9] text-[16.656px] top-[223.75px] w-[365.109px]">
        <p className="leading-[31.229px] whitespace-pre-wrap">Transform your home effortlessly with our innovative remodeling app. We connect homeowners with trusted professionals.</p>
      </div>
      <Frame5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[30.074px] justify-center leading-[0] left-[406.45px] not-italic text-[24px] text-white top-[111.04px] w-[137.411px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Company</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[406.45px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[687.52px] text-[24.983px] text-white top-[111px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[35.393px]">For Contractor</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[687.52px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame9 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Bold',sans-serif] font-bold h-[30.074px] justify-center leading-[0] left-[968.59px] text-[24.983px] text-white top-[111.04px] w-[130.636px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[35.393px] whitespace-pre-wrap">Legal</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[968.59px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame10 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[18px] text-center text-white top-[391.5px] whitespace-nowrap">
        <p>
          <span className="leading-[1.5]">{`Copyrights 2025. All Rights are Reserved by `}</span>
          <span className="leading-[1.5] text-[#f9a825]">{`Homzz `}</span>
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="-translate-x-1/2 absolute h-[456px] left-1/2 overflow-clip top-[6069px] w-[1920px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(180.492deg, rgb(120, 120, 120) 86.172%, rgb(67, 67, 67) 86.147%, rgb(0, 0, 0) 163.62%)" }}>
      <Component1Jpg />
      <Container2 />
    </div>
  );
}

function Frame6() {
  return <div className="-translate-x-1/2 absolute h-[27px] left-1/2 top-[552px] w-[450px]" />;
}

function Component1Jpg1() {
  return (
    <div className="-translate-x-1/2 absolute h-[456px] left-1/2 overflow-clip top-0 w-[1920px]" data-name="1.jpg">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1Jpg} />
      <Frame6 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[19.664px] left-[0.48px] top-[109.13px] w-[239.425px]" data-name="Link">
      <div className="absolute h-[63.5px] left-0 top-[-15.44px] w-[65.612px]" data-name="448D6DC4-08D1-4840-8E94-AD17E878E936 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.28%] max-w-none top-0 w-[97.44%]" src={img448D6Dc408D148408E94Ad17E878E9362} />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.36%_24.99%_8.31%_29.18%]" data-name="Vector">
        <div className="absolute inset-[-5%_-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
            <path d={svgPaths.p231a59f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.64%_8.35%_12.49%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%_-5.91%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3335 15.8435">
            <path d={svgPaths.p3693ea00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.36%_8.35%_8.31%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p1aaf0300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.13%_33.15%_33.54%_33.52%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33334 8.33334">
            <path d={svgPaths.p1a50b2f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.11%_27.03%_72.89%_72.93%]" data-name="Vector">
        <div className="absolute inset-[-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.675 1.66667">
            <path d="M0.833333 0.833333H0.841667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[33.36%_8.32%_12.47%_41.68%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.5">
            <path d={svgPaths.p21836480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_75.01%_12.5%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 11.6667">
            <path d={svgPaths.p1a426680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.36%_75.01%_74.97%_8.32%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p29efb800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-[#f9a825] relative rounded-[37282700px] shrink-0 size-[35.972px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.986px] px-[7.986px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[35.972px] items-start relative shrink-0 w-[340px]" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-[298px]">
      <Container5 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[88.681px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon18 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">About Us</p>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon19 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">Contact Us</p>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon20 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10px] whitespace-nowrap">
        <p className="leading-[1.5]">How It Works</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[406.45px] top-[181.45px] w-[102.547px]">
      <ItemLink9 />
      <ItemLink10 />
      <ItemLink11 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[179.912px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon21 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[159.445px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Subscription Plans</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon22 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[163.185px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Refund Policy</p>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink14() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon23 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[170.999px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Profile Tips</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[687.52px] top-[181.45px] w-[191.457px]">
      <ItemLink12 />
      <ItemLink13 />
      <ItemLink14 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink15() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-[179.912px]" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon24 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[159.445px]">
        <p className="leading-[1.5] whitespace-pre-wrap">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink16() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.15px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon25 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[163.185px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[17.353px] relative w-[16.666px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.666 17.3531">
        <g id="Icon">
          <path d={svgPaths.p28687400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink17() {
  return (
    <div className="h-[20.82px] relative shrink-0 w-full" data-name="Item → Link">
      <div className="absolute flex h-[17.353px] items-center justify-center left-0 top-[1.16px] w-[16.666px]">
        <div className="-scale-y-100 flex-none">
          <Icon26 />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[20.82px] justify-center leading-[0] left-[20.8px] not-italic text-[16px] text-white top-[10.41px] w-[170.999px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Faq</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19px] items-start left-[968.59px] top-[184.92px] w-[191.457px]">
      <ItemLink15 />
      <ItemLink16 />
      <ItemLink17 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[436px] left-[291px] right-[292px] top-0" data-name="Container">
      <Link5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Arimo:Regular',sans-serif] font-normal justify-center leading-[0] left-[0.48px] text-[#f9f9f9] text-[16.656px] top-[223.75px] w-[365.109px]">
        <p className="leading-[31.229px] whitespace-pre-wrap">Transform your home effortlessly with our innovative remodeling app. We connect homeowners with trusted professionals.</p>
      </div>
      <Frame7 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] h-[30.074px] justify-center leading-[0] left-[406.45px] not-italic text-[24px] text-white top-[111.04px] w-[137.411px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Company</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[406.45px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Bold',sans-serif] font-bold justify-center leading-[0] left-[687.52px] text-[24.983px] text-white top-[111px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[35.393px]">For Contractor</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[687.52px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame11 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Instrument_Sans:Bold',sans-serif] font-bold h-[30.074px] justify-center leading-[0] left-[968.59px] text-[24.983px] text-white top-[111.04px] w-[130.636px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[35.393px] whitespace-pre-wrap">Legal</p>
      </div>
      <div className="absolute border-solid border-t-[2.313px] border-white bottom-[289.02px] left-[968.59px] top-[144.67px] w-[72.868px]" data-name="HorizontalBorder" />
      <Frame12 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[18px] text-center text-white top-[391.5px] whitespace-nowrap">
        <p>
          <span className="leading-[1.5]">{`Copyrights 2025. All Rights are Reserved by `}</span>
          <span className="leading-[1.5] text-[#f9a825]">{`Homzz `}</span>
        </p>
      </div>
    </div>
  );
}

function Footer1() {
  return (
    <div className="-translate-x-1/2 absolute h-[456px] left-1/2 overflow-clip top-[996px] w-[1920px]" data-name="Footer" style={{ backgroundImage: "linear-gradient(180.492deg, rgb(120, 120, 120) 86.172%, rgb(67, 67, 67) 86.147%, rgb(0, 0, 0) 163.62%)" }}>
      <Component1Jpg1 />
      <Container4 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-[470px] whitespace-pre-wrap">
      <p className="font-['Poppins:Bold',sans-serif] leading-[0] relative shrink-0 text-[0px] text-[48px] text-white w-[491px]">
        <span className="leading-[1.2]">{`Your Dream Home `}</span>
        <span className="leading-[1.2] text-[#f9a825]">Starts Here</span>
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#f2f2f2] text-[22px] w-[508px]">Connect with trusted contractors or find your next project. Building better homes, together.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[372px] items-start left-[114px] px-[28px] py-[68px] top-[230px] w-[558px]">
      <div className="absolute h-[551px] left-0 top-[-85px] w-[558px]">
        <div className="absolute inset-[-72.6%_-71.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1358 1351">
            <g filter="url(#filter0_f_75_1937)" id="Ellipse 1">
              <ellipse cx="679" cy="675.5" fill="url(#paint0_linear_75_1937)" fillOpacity="0.7" rx="279" ry="275.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1351" id="filter0_f_75_1937" width="1358" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_75_1937" stdDeviation="200" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_75_1937" x1="419" x2="1027.41" y1="521.5" y2="842.482">
                <stop stopColor="#010101" />
                <stop offset="1" stopColor="#010101" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame16 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[896px] left-0 overflow-clip top-[101px] w-[819px]" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[159.25%] left-[-0.06%] max-w-none top-[-13.71%] w-[116.15%]" src={imgContainer} />
        </div>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(132.429deg, rgba(15, 23, 43, 0.55) 0%, rgba(0, 4, 9, 0.53) 48.16%, rgba(0, 4, 9, 0.53) 48.48%, rgba(0, 4, 10, 0.55) 50%, rgba(0, 0, 0, 0.55) 100%)" }} />
      </div>
      <Frame22 />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <div className="-translate-x-1/2 absolute h-[101px] left-1/2 top-0 w-[1920px]" data-name="All menu" style={{ backgroundImage: "linear-gradient(180.109deg, rgb(120, 120, 120) 86.172%, rgb(67, 67, 67) 86.147%, rgb(0, 0, 0) 163.62%)" }}>
        <div className="absolute bg-white h-px left-0 opacity-20 top-[99px] w-[1920px]" data-name="Line" />
        <Menu />
        <div className="absolute h-[61px] left-[201px] top-[20px] w-[63.029px]" data-name="448D6DC4-08D1-4840-8E94-AD17E878E936 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[1.28%] max-w-none top-0 w-[97.44%]" src={img448D6Dc408D148408E94Ad17E878E9362} />
          </div>
        </div>
        <Frame13 />
        <Button />
      </div>
      <PrimitiveDiv />
      <ButtonRight />
      <div className="-translate-y-1/2 absolute flex items-center justify-center right-[calc(100%-174px)] size-[48px] top-[calc(50%+2205px)]">
        <div className="flex-none rotate-180">
          <ButtonRight1 />
        </div>
      </div>
      <Footer />
      <Footer1 />
      <Container6 />
    </div>
  );
}