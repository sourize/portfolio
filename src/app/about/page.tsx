import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/resume-card";
import { TimeLineCard } from "@/components/timeline-card";
import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/skills.config";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";
import { INFO } from "./about";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function About() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="quote">
        <BlurFadeText
          delay={BLUR_FADE_DELAY}
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
          yOffset={8}
          text={`Hey There, I'm ${DATA.name} 👋🏼`}
        />
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-lg text-muted-foreground mb-6">
            Welcome to my digital abode!
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <Image
            src="/giphy1.gif"
            alt="Neural Network"
            width={1920}
            height={1080}
            className="rounded-xl w-full h-auto object-cover max-h-[300px]"
          />
        </BlurFade>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {INFO.Sourish}
          </Markdown>
        </BlurFade>
      </section>
      <section id="whyAIML">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Why AI and ML?</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {INFO.WhyAIandML}
          </Markdown>
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col gap-3">
            {SKILLS.map((skillCategory, id) => (
              <BlurFade
                key={skillCategory.category}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <p key={skillCategory.category} className="text-sm mb-1">
                  {skillCategory.category}
                </p>
                <div className="flex flex-wrap gap-1">
                  {skillCategory.technologies.map((tech, techId) => (
                    <Badge key={`${skillCategory.category}-${tech}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company + work.start + work.end}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <TimeLineCard
                    title={work.company}
                    role={work.title}
                    description={work.description}
                    dates={work.start + " - " + work.end}
                    image={work.logoUrl}
                    link={work.href}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="connect">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">Hook with me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {INFO.connect}
          </Markdown>
        </BlurFade>
      </section>
    </main>
  );
}
