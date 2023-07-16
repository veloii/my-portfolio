import ProjectPreview from "~/components/ProjectPreview";
import iphone from "~/media/images/projects/condition-perform/iphone1.png";
import continueWithSalu from "~/media/images/projects/salu-mail/continue-with-salu.png";

export default function Projects() {
  return (
    <div className="pt-24 relative px-4 lg:px-8 mx-auto text-white z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl tracking-tight">Projects</h1>
          <p className="max-w-2xl text-lg tracking-wide text-neutral-400">
            I've worked on many smaller projects, however these are the probably
            the biggest ones that I am most proud of.
          </p>
        </div>
        <section className="pt-6 pb-4 grid md:grid-cols-2 gap-6">
          <ProjectPreview
            id="sm"
            theme="dark"
            title="Salu Mail"
            description="Enter the secure privacy era"
            className="w-full h-96"
            image={{
              src: continueWithSalu,
              alt: "Continue with Salu",
              height: 400,
            }}
            href="/salu-mail"
          />
          <ProjectPreview
            id="cp"
            theme="dark"
            title="Condition & Perform"
            description="A client project completed on Fiverr"
            className="w-full h-96"
            image={{
              src: iphone,
              alt: "Condition and Perform Site Preview on iPhone",
              className: "pt-4",
              height: 400,
            }}
            hrefExternal
            href="https://stevetunstall.co.uk"
          />
        </section>
      </div>
    </div>
  );
}
