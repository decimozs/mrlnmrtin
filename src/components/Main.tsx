import { Bio, Header, Nav } from "./fragments";
import { EmailButton, StatusIndicator } from "./ui";

export default function Main() {
  return (
    <main className="w-full h-[99%] lg:w-auto lg:flex items-center justify-center">
      <div className="flex h-[97%] w-full flex-col justify-between lg:justify-center lg:w-auto lg:mt-[3rem]">
        <div className="mt-4 flex flex-col gap-4">
          <div className="lg:hidden">
            <StatusIndicator />
          </div>
          <Header />
        </div>
        <div className="flex flex-col gap-8">
          <Bio />
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <StatusIndicator />
            </div>
            <EmailButton />
          </div>
        </div>
      </div>
    </main>
  );
}
