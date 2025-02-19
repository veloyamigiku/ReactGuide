import HeadingWithContext2 from "./HeadingWithContext2";
import SectionWithContext2 from "./SectionWithContext2";

export default function PageWithContext2() {
  return (
    <SectionWithContext2>
      <HeadingWithContext2>Title</HeadingWithContext2>
      <SectionWithContext2>
        <HeadingWithContext2>Heading</HeadingWithContext2>
        <HeadingWithContext2>Heading</HeadingWithContext2>
        <HeadingWithContext2>Heading</HeadingWithContext2>
        <SectionWithContext2>
          <HeadingWithContext2>Sub-heading</HeadingWithContext2>
          <HeadingWithContext2>Sub-heading</HeadingWithContext2>
          <HeadingWithContext2>Sub-heading</HeadingWithContext2>
          <SectionWithContext2>
            <HeadingWithContext2>Sub-sub-heading</HeadingWithContext2>
            <HeadingWithContext2>Sub-sub-heading</HeadingWithContext2>
            <HeadingWithContext2>Sub-sub-heading</HeadingWithContext2>
          </SectionWithContext2>
        </SectionWithContext2>
      </SectionWithContext2>
    </SectionWithContext2>
  );
}
