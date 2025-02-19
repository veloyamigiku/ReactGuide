import HeadingWithContext2 from "./HeadingWithContext2";
import SectionWithContext3 from "./SectionWithContext3";

export default function Post({ title, body }) {
  return (
    <SectionWithContext3 isFancy={true}>
      <HeadingWithContext2>{title}</HeadingWithContext2>
      <p>
        <i>{body}</i>
      </p>
    </SectionWithContext3>
  );
}
