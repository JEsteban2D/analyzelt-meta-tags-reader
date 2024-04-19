import { Background } from "@/components/background/Background";
import { Banner } from "@/components/banner/Banner";
import { MetaTagsDisplay } from "@/components/meta-tags-display/MetaTagsDisplay";
import { ToggleThemeButton } from "@/components/toggle-theme-button/ToggleThemeButton";

export default function Home() {
  return (
    <main>
      <Background/>
      <Banner/>
      <ToggleThemeButton />
      <MetaTagsDisplay />
    </main>
  );
}

