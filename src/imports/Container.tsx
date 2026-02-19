import svgPaths from "./svg-ecn42d2g2x";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pc70a700} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p6a94ac0} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 22.668H16.0133" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[64px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[28px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Arial:Bold',sans-serif] leading-[28px] min-h-px min-w-px not-italic relative text-[#0f172a] text-[20px] text-center whitespace-pre-wrap">Contact Support</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[232.48px] not-italic text-[#45556c] text-[16px] text-center top-[-2px]">{`We're here to help! Tell us what you need assistance with.`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-center left-[24px] top-[31px] w-[464px]">
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[19px] items-start relative shrink-0 w-[6.078px]" data-name="Text">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#fb2c36] text-[14px]">*</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-end left-0 top-[-2px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#314158] text-[14px]">Subject</p>
      <Text />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Frame4 />
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">Select a subject...</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">Technical Issue</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">{`Billing & Payments`}</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">Account Issues</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">Project Question</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-533px] size-0 top-[-279.5px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#0f172a] text-[16px] top-0 w-0 whitespace-pre-wrap">Other</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[rgba(202,213,226,0.64)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_0px_0px_rgba(249,168,37,0.36)]" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[77px] items-start left-[24px] top-[198px] w-[464px]" data-name="Container">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Label">
      <p className="flex-[1_0_0] font-['Poppins:SemiBold',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[#314158] text-[14px] whitespace-pre-wrap">Order Number</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-[#f8fafc] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0f172a] text-[16px]">PRJ-2025-001547</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[78px] items-start left-[24px] top-[291px] w-[464px]" data-name="Container">
      <Label1 />
      <TextInput />
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[19px] left-[76.47px] top-0 w-[6.078px]" data-name="Text" />;
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center left-0 not-italic text-[14px] top-[-2px]">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[#314158]">Description</p>
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#fb2c36]">*</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <Text1 />
      <Frame3 />
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Arial:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(15,23,42,0.5)]">Please describe your issue in detail...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#cad5e2] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[148px] items-start left-[24px] top-[385px] w-[464px]" data-name="Container">
      <Label2 />
      <TextArea />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48px] items-center justify-center left-0 px-[17px] py-[9px] rounded-[10px] top-0 w-[226px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0f172a] text-[16px] text-center">Cancel</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f9a825] content-stretch flex h-[48px] items-center justify-center left-[238px] px-[16px] py-[8px] rounded-[10px] top-0 w-[226px]" data-name="Button">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-white">Submit Ticket</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[39px] left-[24px] top-[695px] w-[464px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Text2() {
  return <div className="absolute h-[19px] left-[76.47px] top-0 w-[6.078px]" data-name="Text" />;
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[1.5] left-0 not-italic text-[#314158] text-[14px] top-[-2px]">Attachment</p>
      <Text2 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.70312V11.7031" id="Vector" stroke="var(--stroke-0, #F9A825)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p23206300} id="Vector_2" stroke="var(--stroke-0, #F9A825)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p7163900} id="Vector_3" stroke="var(--stroke-0, #F9A825)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#191919] text-[14px] text-center">Click to attach files</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#666] text-[12px] text-center tracking-[-0.12px]">PDF, DOC, JPG, PNG</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[38px] items-start relative shrink-0 w-[119.906px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-center relative">
        <Icon1 />
        <Container6 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[21px] top-[549px] w-[467px]">
      <Label3 />
      <div className="content-stretch flex h-[90px] items-center justify-center p-[2px] relative rounded-[12px] shrink-0 w-full" data-name="Label">
        <div aria-hidden="true" className="absolute border-2 border-[#e5e7eb] border-dashed inset-0 pointer-events-none rounded-[12px]" />
        <Frame />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Frame1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Frame2 />
    </div>
  );
}