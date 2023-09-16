//* NAVIGATION
// navbar created with Link Components
import NavWithHook from "./components/NavWithHook";
// navbar created with useRouter Hook
import NavWithLinks from "./components/NavWithLinks";

export default function Page() {
  return (
    <div>
      <NavWithLinks />
      <NavWithHook />
      <h1>Hello, Next.js!</h1>
    </div>
  );
}
