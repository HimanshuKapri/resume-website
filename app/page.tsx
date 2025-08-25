"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Download, MapPin, GraduationCap, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";

const profile = {
  name: "Himanshu Kapri",
  role: "B.Tech (CSE) — 4th Year",
  location: "Bhimtal, Uttrakhand",
  email: "himanshukapri1298@gmail.com",
  github: "https://github.com/HimanshuKapri",
  linkedin:
    "https://www.linkedin.com/in/himanshu-kapri-aa2a82291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  resumeUrl: "#",
  summary:
    "Final-year B.Tech student passionate about backend, security, and scalable web apps. Experienced with Flask, React/Next.js, and cryptography basics (AES/Fernet). Open to SDE/Backend internships and full-time roles.",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Graphic Era Hill University",
    grad: "2026",
    cgpa: "8.1/10",
  },
  skills: [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React/Next.js",
    "Java",
    "Flask",
    "SQLite",
    "MySQL",
    "Git",
    "REST APIs",
    "AWS",
    "Dart",
    "Flutter",
  ],
  projects: [
    {
      title: "Secure File Sharing System",
      tagline: "Full-stack app with AES encryption & RBAC",
      description:
        "Multithreaded Flask + React system for encrypted upload/download, role-based access, and audit logs. Implemented Fernet (AES-128), presigned links, and granular permissions.",
      tech: ["Flask", "React", "AES/Fernet", "SQLite", "RBAC"],
      repo: "https://github.com/HimanshuKapri/RBAC_Secure_File_System",
      demo: "#",
    },
    {
      title: "Compiler with Built-in Plagiarism Detection",
      tagline: "Toy compiler + plagiarism checker",
      description:
        "Prototype compiler that flags similarity using tokenization + string matching (KMP/Rabin-Karp) and AST structure comparison. Outputs annotated reports.",
      tech: ["C++", "Lexer/Parser", "KMP", "AST"],
      repo: "https://github.com/HimanshuKapri/Python_compiler_plagiarism",
      demo: "#",
    },
  ],
};

export default function Portfolio() {
  const variants = useMemo(
    () => ({
      fadeUp: {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      },
      scaleIn: {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { opacity: 1, scale: 1 },
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-bold tracking-tight text-primary text-lg">
            {profile.name}
          </div>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <a href="#projects">Projects</a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#skills">Skills</a>
            </Button>
            <Button asChild className="gap-2" variant="default">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <motion.div
          variants={variants.fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {/* Left side */}
          <div className="md:col-span-2">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
              {profile.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-muted-foreground">
              {profile.role}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                {profile.education.grad}
              </span>
            </div>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="gap-2">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" /> Contact Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 hover:bg-[#333] hover:text-white"
              >
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <SiGithub className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 hover:bg-[#0A66C2] hover:text-white"
              >
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <SiLinkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right side: Education card */}
          <motion.div
            variants={variants.scaleIn}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">
                  {profile.education.degree}
                </div>
                <div>{profile.education.college}</div>
                <div>Graduation: {profile.education.grad}</div>
                <div>CGPA: {profile.education.cgpa}</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={variants.fadeUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>{proj.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{proj.tagline}</p>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded bg-muted text-xs text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button asChild size="sm" variant="outline" className="gap-1">
                      <a href={proj.repo} target="_blank" rel="noreferrer">
                        <SiGithub className="h-4 w-4" /> Code
                      </a>
                    </Button>
                    {proj.demo !== "#" && (
                      <Button asChild size="sm" variant="outline" className="gap-1">
                        <a href={proj.demo} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Skills</h2>
        <motion.div
          variants={variants.fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2"
        >
          {profile.skills.map((skill, i) => (
            <span
              key={i}
              className="px-6 py-2 rounded-full bg-muted text-sm text-foreground hover:bg-primary hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-lg font-semibold">Let’s connect</div>
            <p className="mt-2 text-muted-foreground max-w-prose">
              I’m open to SDE/Backend internship and full-time opportunities.
              Feel free to reach out for collaboration or referrals.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="default" className="gap-2">
              <a href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 hover:bg-[#333] hover:text-white"
            >
              <a href={profile.github} target="_blank" rel="noreferrer">
                <SiGithub className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 hover:bg-[#0A66C2] hover:text-white"
            >
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <SiLinkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="pb-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
