import svgPaths from "./svg-9yizay6lrh";
import imgHeroBanner from "figma:asset/9985c9e16f845e1fdda73b4f27831bb8ce6c736d.png";
import img448D6Dc408D148408E94Ad17E878E9362 from "figma:asset/a2dde8910b8acabea52df5c786de0fb6913be54a.png";
import imgImg from "figma:asset/5f0570135bc7b72d5646e12689c066c06bce48b1.png";
import imgImg1 from "figma:asset/937c83fbfdd95e4d187e27127ac2947796d9beb8.png";
import imgImg2 from "figma:asset/387b0bea35a1325a72ced3b5cc77c50f66376488.png";
import imgImg3 from "figma:asset/3d2fe9ddf1199e61125b6450b17b1d8f20b01130.png";
import imgImg4 from "figma:asset/719820b5045b188699b99ea719c0a7b8226d2e64.png";
import imgImg5 from "figma:asset/897c7bd0f0159a53e2b6dd5a20c620c7adeb8b67.png";
import imgImg6 from "figma:asset/329100cff65a8f7a420cd06bbc44baa04da79791.png";
import imgImg7 from "figma:asset/59d922f53cc68584a5b86e2d188dd821b7ff08b3.png";
import imgImg8 from "figma:asset/c1bc56103fdce1c645141c72fd55574ec0b55d64.png";
import imgVector from "figma:asset/c36aedc74d28df594c01897337bcbca2f599c346.png";
import imgFile1 from "figma:asset/60e007a893d93069982f874e3ef59fc106bdfcae.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[60px] text-center text-white w-[730px]">
        <p className="leading-[1.2]">Transform Your Home with Expert Remodeling</p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[730px]">
        <p className="leading-[1.2]">Elevating Spaces with Personalized Designs and Quality Craftsmanship for Every Room.</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[592px] top-[199px] w-[730px]">
      <Content />
      <Content1 />
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-white grow h-[54px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e5e5ea] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[54px] items-center px-[18px] py-[16px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#868686] text-[16px]">
            <p className="leading-[1.5]">Search here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p289a8900} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-[#ebebeb] box-border content-stretch flex gap-[10px] items-center justify-center px-[18px] py-[16px] relative rounded-[10px] shrink-0 size-[54px]" data-name="Filter">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2afb1f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#787878] gap-[10px] h-[54px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0 to-[#000000] via-0% via-[#434343] w-[160px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-full" data-name="Main">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center p-[22px] relative w-full">
          <Input />
          <Filter />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[405px] top-[475px] w-[1104px]" data-name="Search">
      <Main />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[9.37%_22.44%_9.37%_22.41%]" data-name="Group">
      <div className="absolute inset-[9.37%_22.44%_9.37%_22.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 33">
          <path d={svgPaths.p38301000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-center left-[962px] top-[721px] w-[45px]">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[1.5]">Scroll</p>
      </div>
      <Icon2 />
    </div>
  );
}

function HeroBanner() {
  return (
    <div className="absolute h-[826px] left-0 top-0 w-[1920px]" data-name="Hero banner">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[154.96%] left-0 max-w-none top-[-15.55%] w-full" src={imgHeroBanner} />
      </div>
      <div className="absolute h-[826px] left-0 top-0 w-[1920px]" data-name="Img">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 826">
          <path d="M0 0H1920V826H0V0Z" fill="var(--fill-0, #5E5E5E)" fillOpacity="0.4" id="Img" />
        </svg>
      </div>
      <Frame7 />
      <Search />
      <Frame6 />
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Home">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f9a825] text-[16px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Property() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Property">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">Homeowner</p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Page">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[1.5] whitespace-pre">Contractor</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-[calc(50%+17px)] top-[38px] translate-x-[-50%]" data-name="Menu">
      <Home />
      <Property />
      <Page />
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[54px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0 w-[161px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f9a825] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[15px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`Download  App`}</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path d={svgPaths.pf09f300} fill="var(--fill-0, #FDFDFD)" id="Vector" />
          <path d={svgPaths.p1312cf00} fill="var(--fill-0, #FDFDFD)" id="Vector_2" />
          <path d={svgPaths.p171b9200} fill="var(--fill-0, #F9A825)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f9a825] box-border content-stretch flex gap-[10px] h-[54px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0 w-[160px]" data-name="Button">
      <Icon3 />
      <div className="bg-white h-full opacity-20 shrink-0 w-px" data-name="Line" />
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[15px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{` Login`}</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex gap-[32px] items-center left-[1467px] top-[25px]">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[calc(50%-0.5px)] top-[20px] translate-x-[-50%]">
      <Menu />
      <Frame22 />
      <div className="absolute h-[61px] left-[99px] top-[20px] w-[67px]" data-name="448D6DC4-08D1-4840-8E94-AD17E878E936 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.28%] max-w-none top-0 w-[97.44%]" src={img448D6Dc408D148408E94Ad17E878E9362} />
        </div>
      </div>
    </div>
  );
}

function AllMenu() {
  return (
    <div className="absolute bg-gradient-to-b from-[#787878] h-[101px] left-1/2 to-[#000000] top-0 translate-x-[-50%] via-0% via-[#434343] w-[1920px]" data-name="All menu">
      <div className="absolute bg-white h-px left-0 opacity-20 top-[99px] w-[1920px]" data-name="Line" />
      <Group10 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[826px] relative shrink-0 w-[1920px]" data-name="Header">
      <HeroBanner />
      <AllMenu />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[#1c1c1e] text-[45px]">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Discover the home remodeling projects</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#8e8e93] text-[14px]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Heading">
      <Title />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p178e6900} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Address">
      <Icon4 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">
        <p className="leading-[normal]">Home Remodeling</p>
      </div>
      <Address />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Content">
      <Heading1 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <p className="leading-[normal]">$7,500</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center opacity-30 p-[16px] relative rounded-[16px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="01">
      <div className="h-[225px] relative rounded-[10px] shrink-0 w-[314px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg} />
        </div>
      </div>
      <Content2 />
      <div className="bg-[#f1f1f1] h-px shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p178e6900} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Address1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Address">
      <Icon5 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">
        <p className="leading-[normal]">Home Remodeling</p>
      </div>
      <Address1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Content">
      <Heading2 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <p className="leading-[normal]">$7,500</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[16px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="02">
      <div className="h-[225px] relative rounded-[10px] shrink-0 w-[314px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg1} />
        </div>
      </div>
      <Content3 />
      <div className="bg-[#f1f1f1] h-px shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function ImgHover() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Img hover">
      <div className="[grid-area:1_/_1] h-[225px] ml-0 mt-0 relative rounded-[10px] w-[314px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg2} />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p178e6900} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Address2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Address">
      <Icon6 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Home Remodeling</p>
      </div>
      <Address2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Content">
      <Heading3 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#333333] text-[18px] w-[min-content]">
        <p className="leading-[normal]">$7,500</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[12px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="03">
      <ImgHover />
      <Content4 />
      <div className="bg-[#f1f1f1] h-px shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p178e6900} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Address3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Address">
      <Icon7 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">
        <p className="leading-[normal]">Home Remodeling</p>
      </div>
      <Address3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Content">
      <Heading4 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <p className="leading-[normal]">$7,500</p>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center p-[16px] relative rounded-[16px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="04">
      <div className="h-[225px] relative rounded-[10px] shrink-0 w-[314px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg3} />
        </div>
      </div>
      <Content5 />
      <div className="bg-[#f1f1f1] h-px shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p178e6900} id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Address4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Address">
      <Icon8 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">58 Hullbrook Road, Billesley, B13 0LA</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] w-full">
        <p className="leading-[normal]">Home Remodeling</p>
      </div>
      <Address4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Content">
      <Heading5 />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[18px] w-full">
        <p className="leading-[normal]">$7,500</p>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-center opacity-30 p-[16px] relative rounded-[16px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="05">
      <div className="h-[225px] relative rounded-[10px] shrink-0 w-[314px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg4} />
        </div>
      </div>
      <Content6 />
      <div className="bg-[#f1f1f1] h-px shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-name="Content">
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-name="Nav">
      <div className="bg-[#333333] h-[4px] opacity-20 shrink-0 w-[50px]" data-name="01" />
      <div className="bg-[#333333] h-[4px] shrink-0 w-[50px]" data-name="02" />
      <div className="bg-[#333333] h-[4px] opacity-20 shrink-0 w-[50px]" data-name="03" />
    </div>
  );
}

function Listing() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="Listing">
      <Content7 />
      <Nav />
    </div>
  );
}

function RealEstate() {
  return (
    <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0" data-name="Real estate">
      <Heading />
      <Listing />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center relative shrink-0 text-[45px] text-black">
        <p className="leading-[1.2] text-nowrap whitespace-pre">Explore Contractors</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#8e8e93] text-[14px]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
      </div>
    </div>
  );
}

function ImgHover1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Img hover">
      <div className="[grid-area:1_/_1] h-[241px] ml-0 mt-0 relative rounded-[10px] w-[350px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg5} />
        </div>
      </div>
    </div>
  );
}

function Address5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Address">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`i am a good contractor  with 10 years plus...`}</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Shanto Hasan</p>
      </div>
      <Address5 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[318px]" data-name="Content">
      <Heading6 />
    </div>
  );
}

function IconBadge() {
  return (
    <div className="relative shrink-0 size-[10.364px]" data-name="Icon / Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1211)" id="Icon / Badge">
          <path d={svgPaths.p26f6a100} fill="var(--fill-0, #694710)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="10.3644" width="10.3644" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="absolute bg-[#ffe0b3] box-border content-stretch flex gap-[3.368px] h-[20px] items-center justify-center left-[270px] overflow-clip px-[6.737px] py-[3.368px] rounded-[3.368px] top-[260px] w-[64px]" data-name="Tag">
      <IconBadge />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#694710] text-[7.773px] text-center text-nowrap whitespace-pre">Top Rates</p>
    </div>
  );
}

function Component5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="03">
      <ImgHover1 />
      <Content8 />
      <Tag />
    </div>
  );
}

function ImgHover2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Img hover">
      <div className="[grid-area:1_/_1] h-[241px] ml-0 mt-0 relative rounded-[10px] w-[350px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg6} />
        </div>
      </div>
    </div>
  );
}

function Address6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Address">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`i am a good contractor  with 10 years plus...`}</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Shanto Hasan</p>
      </div>
      <Address6 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[318px]" data-name="Content">
      <Heading7 />
    </div>
  );
}

function IconBadge1() {
  return (
    <div className="relative shrink-0 size-[10.364px]" data-name="Icon / Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1211)" id="Icon / Badge">
          <path d={svgPaths.p26f6a100} fill="var(--fill-0, #694710)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="10.3644" width="10.3644" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="absolute bg-[#ffe0b3] box-border content-stretch flex gap-[3.368px] h-[20px] items-center justify-center left-[270px] overflow-clip px-[6.737px] py-[3.368px] rounded-[3.368px] top-[260px] w-[64px]" data-name="Tag">
      <IconBadge1 />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#694710] text-[7.773px] text-center text-nowrap whitespace-pre">Top Rates</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="4">
      <ImgHover2 />
      <Content9 />
      <Tag1 />
    </div>
  );
}

function ImgHover3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Img hover">
      <div className="[grid-area:1_/_1] h-[241px] ml-0 mt-0 relative rounded-[10px] w-[350px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg7} />
        </div>
      </div>
    </div>
  );
}

function Address7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Address">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`i am a good contractor  with 10 years plus...`}</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Shanto Hasan</p>
      </div>
      <Address7 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[318px]" data-name="Content">
      <Heading8 />
    </div>
  );
}

function IconBadge2() {
  return (
    <div className="relative shrink-0 size-[10.364px]" data-name="Icon / Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1211)" id="Icon / Badge">
          <path d={svgPaths.p26f6a100} fill="var(--fill-0, #694710)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="10.3644" width="10.3644" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="absolute bg-[#ffe0b3] box-border content-stretch flex gap-[3.368px] h-[20px] items-center justify-center left-[270px] overflow-clip px-[6.737px] py-[3.368px] rounded-[3.368px] top-[261px] w-[64px]" data-name="Tag">
      <IconBadge2 />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#694710] text-[7.773px] text-center text-nowrap whitespace-pre">Top Rates</p>
    </div>
  );
}

function Component3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="5">
      <ImgHover3 />
      <Content10 />
      <Tag2 />
    </div>
  );
}

function ImgHover4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Img hover">
      <div className="[grid-area:1_/_1] h-[241px] ml-0 mt-0 relative rounded-[10px] w-[350px]" data-name="Img">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[10px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[10px] size-full" src={imgImg8} />
        </div>
      </div>
    </div>
  );
}

function Address8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Address">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a3a3c] text-[12px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`i am a good contractor  with 10 years plus...`}</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Heading">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Shanto Hasan</p>
      </div>
      <Address8 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[318px]" data-name="Content">
      <Heading9 />
    </div>
  );
}

function IconBadge3() {
  return (
    <div className="relative shrink-0 size-[10.364px]" data-name="Icon / Badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_1_1211)" id="Icon / Badge">
          <path d={svgPaths.p26f6a100} fill="var(--fill-0, #694710)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1211">
            <rect fill="white" height="10.3644" width="10.3644" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="absolute bg-[#ffe0b3] box-border content-stretch flex gap-[3.368px] h-[20px] items-center justify-center left-[270px] overflow-clip px-[6.737px] py-[3.368px] rounded-[3.368px] top-[261px] w-[64px]" data-name="Tag">
      <IconBadge3 />
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[1.6] relative shrink-0 text-[#694710] text-[7.773px] text-center text-nowrap whitespace-pre">Top Rates</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center relative rounded-[12px] shadow-[0px_4px_26px_0px_rgba(66,71,76,0.08)] shrink-0 w-[350px]" data-name="6">
      <ImgHover4 />
      <Content11 />
      <Tag3 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0" data-name="Content">
      <Component5 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[5px] items-start relative shrink-0" data-name="Nav">
      <div className="bg-[#333333] h-[4px] opacity-20 shrink-0 w-[50px]" data-name="01" />
      <div className="bg-[#333333] h-[4px] shrink-0 w-[50px]" data-name="02" />
      <div className="bg-[#333333] h-[4px] opacity-20 shrink-0 w-[50px]" data-name="03" />
    </div>
  );
}

function Listing1() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0" data-name="Listing">
      <Content12 />
      <Nav1 />
    </div>
  );
}

function PropertiesForRent() {
  return (
    <div className="bg-[#f7f7f7] box-border content-stretch flex flex-col gap-[46px] items-center px-[215px] py-[100px] relative shrink-0 w-[1920px]" data-name="Properties for rent">
      <Title1 />
      <Listing1 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[1.55%_1.56%_7.72%_1.45%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g id="Group">
          <path d={svgPaths.p1675f100} fill="var(--fill-0, #E39922)" id="Vector" />
          <path d={svgPaths.p9230900} fill="var(--fill-0, #E39922)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">{`Connect with Experts `}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[3.13%] left-0 right-0 top-[-3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p35d99800} fill="var(--fill-0, #E39922)" id="Vector" />
          <path d={svgPaths.p2a0b4c80} fill="var(--fill-0, #E39922)" id="Vector_2" />
          <path d={svgPaths.p247d7300} fill="var(--fill-0, #E39922)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame1 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">{`Real-time Project Updates `}</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[3.29%] left-0 right-0 top-[-2.97%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.pa7f7500} fill="var(--fill-0, #E39922)" id="Vector" />
          <path d={svgPaths.p30498800} fill="var(--fill-0, #E39922)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame2 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">{`Customized Design Solutions `}</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[232px]">
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[0.04%_0.2%_6.29%_0.2%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g id="Group">
          <path d={svgPaths.p384af800} fill="var(--fill-0, #E39922)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group4 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame3 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">{`Instant Quotes `}</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[-3.13%_8.98%_3.13%_8.98%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Group">
          <path d={svgPaths.p31569100} fill="var(--fill-0, #E39922)" id="Vector" />
          <path d={svgPaths.p1b6eb00} fill="var(--fill-0, #E39922)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">{`Reliable Contractors `}</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute bottom-[3.13%] left-0 right-0 top-[-3.13%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.p2d341f80} fill="var(--fill-0, #E39922)" id="Vector" />
          <path d={svgPaths.p14adc400} fill="var(--fill-0, #E39922)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Frame">
      <Group6 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
      <Frame5 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] text-nowrap">
        <p className="leading-[0.9] whitespace-pre">24/7 Support</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[232px]">
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[44px] items-center relative shrink-0">
      <Frame23 />
      <Frame17 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-black w-[min-content]">
        <p className="leading-[1.2]">
          <span>{`We are more than just a `}</span>
          <span className="text-[#f9a825]">Remodeling</span>
          <span>{` service `}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8e8e93] text-[14px] w-[589px]">
        <p className="leading-[1.5]">Whether you’re planning a simple update or a full renovation, our app offers much more than just basic services. From design inspiration to tracking project progress, everything is just a tap away.</p>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[579px]">
      <Title2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[67px] items-center ml-0 mt-0 relative w-[1110px]">
      <div className="h-[456px] relative shrink-0 w-[459px]" data-name="Vector">
        <img alt="" className="block max-w-none size-full" height="456" src={imgVector} width="459" />
      </div>
      <Frame9 />
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame10 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center min-w-full relative shrink-0 text-[40px] text-black w-[min-content]">
        <p className="leading-[1.2]">
          <span>{`It’s Now More Easy to `}</span>
          <span className="text-[#f9a825]">Remodeling</span>
          <span>{` your home by Our Mobile App`}</span>
        </p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#8e8e93] text-[14px] w-[589px]">
        <p className="leading-[1.5]">Transform your home effortlessly with our innovative remodeling app, connecting you with top contractors and designers. From planning to project tracking, get quotes and manage everything in one place for a seamless renovation experience.</p>
      </div>
    </div>
  );
}

function MobileAppStoreBadge() {
  return (
    <div className="h-[51px] relative shrink-0 w-[172.125px]" data-name="Mobile app store badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 51">
        <g id="Mobile app store badge">
          <rect fill="var(--fill-0, black)" height="49.725" rx="5.7375" width="170.85" x="0.6375" y="0.6375" />
          <rect height="49.725" rx="5.7375" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="1.275" width="170.85" x="0.6375" y="0.6375" />
          <path d={svgPaths.p1d13a800} fill="var(--fill-0, white)" id="Google Play" />
          <path d={svgPaths.p28f61e00} fill="var(--fill-0, white)" id="Get it on" />
          <g id="Google Play logo">
            <path d={svgPaths.p398bbc00} fill="var(--fill-0, #EA4335)" id="Vector" />
            <path d={svgPaths.p2f5e65ef} fill="var(--fill-0, #FBBC04)" id="Vector_2" />
            <path d={svgPaths.pa936d00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
            <path d={svgPaths.p31215480} fill="var(--fill-0, #34A853)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MobileAppStoreBadge1() {
  return (
    <div className="h-[51px] relative shrink-0 w-[153px]" data-name="Mobile app store badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 51">
        <g id="Mobile app store badge">
          <rect fill="var(--fill-0, #0C0D10)" height="49.725" rx="8.2875" width="151.725" x="0.6375" y="0.6375" />
          <rect height="49.725" rx="8.2875" stroke="var(--stroke-0, #A6A6A6)" strokeWidth="1.275" width="151.725" x="0.6375" y="0.6375" />
          <g id="App Store">
            <path d={svgPaths.p156bac00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2e68ae80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14e65500} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc6f9e80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18fb7e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p140d1d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23fe4e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p306f3c00} fill="var(--fill-0, white)" />
          </g>
          <g id="Download on the">
            <path d={svgPaths.p1566ffc0} fill="var(--fill-0, white)" />
            <path d={svgPaths.pb647480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p23385d80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3eb4b800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2ddeae80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a9a4500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p479b700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2d9f7e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p31d2f900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p269c8b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1b307780} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3342b00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2c0ad200} fill="var(--fill-0, white)" />
          </g>
          <g id="Apple logo">
            <path d={svgPaths.p11948480} fill="var(--fill-0, white)" />
            <path d={svgPaths.p38c6f280} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[30.6px] items-center relative shrink-0">
      <MobileAppStoreBadge />
      <MobileAppStoreBadge1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-0 mt-[37px] relative w-[635px]">
      <Title3 />
      <Frame8 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[366px] ml-[675px] mt-0 relative w-[435px]" data-name="file 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[122.08%] left-[-27.45%] max-w-none top-[-10.95%] w-[154.04%]" src={imgFile1} />
        </div>
      </div>
      <Frame24 />
    </div>
  );
}

function Menu1() {
  return (
    <div className="content-stretch flex font-['Poppins:SemiBold',sans-serif] gap-[40px] items-start leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[16px] text-nowrap" data-name="Menu">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">About Us</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[405px] top-[31px] w-[1110px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#eeeeee] text-[14px] text-nowrap whitespace-pre">Copyright © 2024 Homzz LLC</p>
      <Menu1 />
    </div>
  );
}

function End() {
  return (
    <div className="absolute h-[137px] left-0 top-[315px] w-[1920px]" data-name="End">
      <div className="absolute bg-[#efefef] h-px left-0 top-0 w-[1920px]" data-name="Line" />
      <div className="absolute bg-[#efefef] h-px left-0 top-[85px] w-[1920px]" data-name="Line" />
      <Frame21 />
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="01">
          <circle cx="22" cy="22" id="Bg" r="21.5" stroke="var(--stroke-0, #E5E5EA)" />
          <g clipPath="url(#clip0_1_1175)" id="Icon">
            <path d={svgPaths.p2300d500} fill="var(--fill-0, #EEEEEE)" id="f_1_" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1175">
            <rect fill="white" height="18" transform="translate(13 13)" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="02">
          <circle cx="22" cy="22" id="Bg" r="21.5" stroke="var(--stroke-0, #E5E5EA)" />
          <g id="Icon">
            <path d={svgPaths.p37412700} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="03">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="03">
          <circle cx="22" cy="22" id="Bg" r="21.5" stroke="var(--stroke-0, #E5E5EA)" />
          <g id="Icon">
            <path d={svgPaths.p588a080} fill="var(--fill-0, #EEEEEE)" id="Vector" />
            <path d={svgPaths.p15d56300} fill="var(--fill-0, #EEEEEE)" id="Vector_2" />
            <path d={svgPaths.p8699440} fill="var(--fill-0, #EEEEEE)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="04">
          <circle cx="22" cy="22" id="Bg" r="21.5" stroke="var(--stroke-0, #E5E5EA)" />
          <g clipPath="url(#clip0_1_1223)" id="Icon">
            <path d={svgPaths.pc4c6b00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
            <path d={svgPaths.pf5e9200} fill="var(--fill-0, #EEEEEE)" id="Vector_2" />
            <path d={svgPaths.p3c2b9040} fill="var(--fill-0, #EEEEEE)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1223">
            <rect fill="white" height="18" transform="translate(13 13)" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Social">
      <Component />
      <Component1 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Address9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Address">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Follow Us</p>
      </div>
      <Social />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[12%]" data-name="Group">
      <div className="absolute inset-[-1.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
          <g id="Group">
            <path clipRule="evenodd" d={svgPaths.p2c4aa400} fillRule="evenodd" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" />
            <path d={svgPaths.p184b9940} id="Vector_2" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.9256" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="opacity-30 overflow-clip relative shrink-0 size-[50px]" data-name="Icon">
      <Group7 />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[14px] w-full">
        <p className="leading-[1.5]">(201) 555-0124</p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-center relative shrink-0 w-[255px]" data-name="Phone">
      <Icon9 />
      <Text />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[44px] items-center justify-center relative shrink-0" data-name="Content">
      <div className="bg-white h-px opacity-10 shrink-0 w-full" data-name="Line" />
      <Phone />
      <div className="bg-white h-px opacity-10 shrink-0 w-full" data-name="Line" />
    </div>
  );
}

function ContactSeller() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Contact seller">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Contact</p>
      </div>
      <Content13 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex gap-[52px] items-start relative shrink-0 w-[425px]" data-name="Main content">
      <Address9 />
      <ContactSeller />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
      <div className="h-[107px] relative shrink-0 w-[116px]" data-name="448D6DC4-08D1-4840-8E94-AD17E878E936 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.28%] max-w-none top-0 w-[97.44%]" src={img448D6Dc408D148408E94Ad17E878E9362} />
        </div>
      </div>
      <MainContent />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[405px] top-[59px] w-[1110px]">
      <Frame19 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[14px] w-[476px]">
        <p className="leading-[1.5]">Transform your home effortlessly with our innovative remodeling app, connecting you with top contractors and designers. From planning to project tracking, get quotes and manage everything in one place for a seamless renovation experience.</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#787878] h-[403px] relative rounded-[8px] shrink-0 to-[#000000] via-0% via-[#434343] w-[1920px]" data-name="Footer #2">
      <div className="absolute bg-[#efefef] h-px left-0 top-0 w-[1920px]" data-name="Line" />
      <End />
      <Frame20 />
    </div>
  );
}

export default function Design() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[100px] items-center relative size-full" data-name="Design 2">
      <Header />
      <RealEstate />
      <PropertiesForRent />
      <Group9 />
      <Group8 />
      <Footer />
    </div>
  );
}