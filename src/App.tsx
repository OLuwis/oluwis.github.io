import { Education } from "@/components/Education";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Summary } from "@/components/Summary";
import { WorkExperience } from "@/components/WorkExperience";
import { SAMPLE_DATA } from "@/data/sample";

export default function App() {
  return (
    <main
      className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
      id="main-content"
    >
      <div className="sr-only">
        <h1>{SAMPLE_DATA.name}&apos;s Resume</h1>
      </div>

      <section
        className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
        aria-label="Resume Content"
      >
        <Header />

        <div className="space-y-8 print:space-y-4">
          <Summary summary={SAMPLE_DATA.summary} />

          <WorkExperience work={SAMPLE_DATA.work} />

          <Education education={SAMPLE_DATA.education} />

          <Skills skills={SAMPLE_DATA.skills} />

          <Projects projects={SAMPLE_DATA.projects} />
        </div>
      </section>
    </main>
  );
}
