import HeadingWithContext from "./HeadingWithContext";
import SectionWithContext from "./SectionWithContext";

export default function PageWithContext() {
  return (
    <SectionWithContext level={1}>
      <HeadingWithContext>Title</HeadingWithContext>
      <SectionWithContext level={2}>
        <HeadingWithContext>Heading</HeadingWithContext>
        <HeadingWithContext>Heading</HeadingWithContext>
        <HeadingWithContext>Heading</HeadingWithContext>
        <SectionWithContext level={3}>
          <HeadingWithContext>Sub-heading</HeadingWithContext>
          <HeadingWithContext>Sub-heading</HeadingWithContext>
          <HeadingWithContext>Sub-heading</HeadingWithContext>
          <SectionWithContext level={4}>
            <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
            <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
            <HeadingWithContext>Sub-sub-heading</HeadingWithContext>
          </SectionWithContext>
        </SectionWithContext>
      </SectionWithContext>
    </SectionWithContext>
  );
}
