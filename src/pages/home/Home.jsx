import HeroSection from "../../components/hero/HeroSection";
import chevronDown from "/icons/arrows/chevron-down.svg";
import TwistomyGenCapWafer from "../../assets/pictures/Twistomy_gen_cap_wafer.png";
import Twist from "../../assets/pictures/Twisted.png";
import ContinentAssembly from "../../assets/pictures/continent_assembly_exploded.png";
import ExcretoryAssembly from "../../assets/pictures/excretory_assembly_collapsed.png";
import Table from "../../assets/pictures/Table.png";
import ContentWithImage from "../../components/contentWithImage/ContentWithImage";
import SectionDivider from "../../components/sectionDivider/sectionDivider";

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-black text-white h-[93vh]">
        <HeroSection />

        {/* Bouncing Arrow */}
        <div
          className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const detailsSection = document.getElementById("details-section");
            if (detailsSection) {
              detailsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <img
            src={chevronDown}
            alt="Scroll Down"
            className="animate-bounce w-10 h-10 cursor-pointer invert-[44%] sepia-[73%] saturate-[3210%] hue-rotate-[165deg] brightness-[99%] contrast-[109%]"
          />
        </div>
      </section>
      <SectionDivider text="Lorem ipsum" />

      <div id="details-section">
        {/* Details Section */}
        <ContentWithImage
          imageSrc={TwistomyGenCapWafer}
          /*
          [Primary Photo of the Device should be somewhere toward the top of site here (photo labeled: twistomy cap and wafer photo) *VRML file of same photo labeled “continent assembly collapsed” has also been added to google drive for cooler shadow animation that you wanted to do]
          */
          imageAlt="About Twistomy™"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue dui sed cursus feugiat. In lobortis nisl nec risus tincidunt, vel rhoncus quam viverra. Aenean imperdiet, metus nec fermentum efficitur, nulla quam posuere risus, nec rhoncus sem odio ut lorem.",
            },
          ]}
          imageOnLeft={true}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />

        <ContentWithImage
          imageSrc={TwistomyGenCapWafer}
          /*
          [Insert “Ostomy Pouch Cleaning” Video in Drive somewhere near this problem blurb if possible]
          */
          imageAlt="The Problem"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec blandit dolor. Suspendisse in orci vitae ligula varius consequat. Morbi porta sollicitudin sagittis. Pellentesque fermentum sapien eget justo malesuada, ac fringilla tellus tincidunt.",
            },
          ]}
          imageOnLeft={false}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
        <SectionDivider text="Lorem ipsum" />
        <ContentWithImage
          imageSrc={ContinentAssembly}
          imageAlt="The Twistomy™ Solution"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim, justo ac lobortis cursus, tellus nisi porta justo, in mattis risus urna sit amet lorem.",
            },
          ]}
          imageOnLeft={true}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
        <ContentWithImage
          imageSrc={Twist}
          imageAlt="Core Features"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim magna in libero faucibus, in dictum velit feugiat. Duis id faucibus eros.",
            },
          ]}
          imageOnLeft={false}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
        <ContentWithImage
          imageSrc={ExcretoryAssembly}
          imageAlt="Seamless Integration & User Control"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra turpis ut est fringilla, a lacinia risus egestas. Suspendisse potenti. Integer ac purus velit. Nullam porta a erat nec imperdiet.",
            },
          ]}
          imageOnLeft={true}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
        <SectionDivider text="Lorem ipsum" />
        <ContentWithImage
          imageSrc={Table}
          imageAlt="What makes Twistomy™ different?"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus, velit nec blandit viverra, augue sapien tincidunt metus, eget commodo justo nisl ac lorem.",
            },
          ]}
          imageOnLeft={true}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
        <ContentWithImage
          imageAlt="Why Twistomy™?"
          content={[
            { type: "header", text: "Lorem Ipsum Dolor Sit Amet" },
            {
              type: "paragraph",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta arcu a velit iaculis, sed porttitor felis ultrices. Duis rhoncus congue justo, nec tempus turpis ultrices ut.",
            },
          ]}
          imageOnLeft={false}
          containerStyle="px-6 md:px-12"
          imageStyle="rounded-lg shadow-lg"
          textStyle="text-center md:text-left"
        />
      </div>
    </main>
  );
};

export default Home;
