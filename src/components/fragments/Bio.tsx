"use client";

export default function Bio() {
  return (
    <div className="text-slate flex flex-col gap-4">
      <p className="max-w-[423px]">
        I have a strong passion for low-level programming, committed to the
        development of resilient software applications. With a strong focus on
        quality and performance to design and build robust solutions that can
        withstand the demands of real-world scenarios.
      </p>
      <p className="max-w-[406px]">
        Current technology I&apos;m using in development right now include
        React, Typescript, Go, Java and Python along with{" "}
        <span className="text-white underline italic cursor-pointer nvim btooltip">
          <a href="https://github.com/decimozs/minimal-gruvbox" target="_blank">
            Neovim
          </a>
        </span>{" "}
        for development.
      </p>
      <p className="max-w-[417px]">
        Please feel free to reach out to me via email, and I will make every
        effort to promptly respond to your inquiries and feedback.
      </p>
    </div>
  );
}
