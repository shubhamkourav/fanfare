import Action from "@partials/Home/Action";
import Banner from "@partials/Home/Banner";
import Features from "@partials/Home/Features";
import Reviews from "@partials/Home/Reviews";
import Services from "@partials/Home/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <Features />
      <Services />
      <Reviews />
      <Action />
    </>
  );
}
