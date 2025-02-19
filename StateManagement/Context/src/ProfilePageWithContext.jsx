import HeadingWithContext2 from "./HeadingWithContext2";
import Post from "./Post";
import SectionWithContext2 from "./SectionWithContext2";
import SectionWithContext3 from "./SectionWithContext3";

function AllPosts() {
  return (
    <SectionWithContext3>
      <HeadingWithContext2>Posts</HeadingWithContext2>
      <RecentPosts />
    </SectionWithContext3>
  );
}

function RecentPosts() {
  return (
    <SectionWithContext3>
      <HeadingWithContext2>Pecent Posts</HeadingWithContext2>
      <Post title="Flavors of Lisbon" body="...those pasteis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </SectionWithContext3>
  );
}

export default function ProfilePageWithContext() {
  return (
    <SectionWithContext3>
      <HeadingWithContext2>My Profile</HeadingWithContext2>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </SectionWithContext3>
  );
}
