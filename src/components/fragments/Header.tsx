import { Time } from "../ui";

export default function Header() {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="text-[1.3rem]">Hello, I&apos;m Martin 👋</h1>
      <p className="text-slate max-w-[401px] mb-4">
        I&apos;m a creative developer and a student, building innovative
        products within the digital space.
      </p>
      <div className="text-slate lg:fixed lg:top-[15%] lg:w-[422px]">
        <h1>Summer</h1>
        <div className="lg:flex lg:items-center lg:justify-between">
          <h1>Manila, Philippines</h1>
          <Time />
        </div>
      </div>
    </header>
  );
}
