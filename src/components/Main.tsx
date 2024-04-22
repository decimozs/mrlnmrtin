import { Bio, Header, Nav } from "./fragments";
import { EmailButton, StatusIndicator } from "./ui";

export default function Main() {
  return (
    <main className="w-full h-full">
      <div className="flex h-[97%] w-full flex-col justify-between">
        <div className="mt-4 flex flex-col gap-4">
          <StatusIndicator />
          <Header />
        </div>
        <div className="flex flex-col gap-8">
          <Bio />
          <EmailButton />
        </div>
      </div>
    </main>
  );
}
