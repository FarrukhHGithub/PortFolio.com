import { db } from "@/lib/db";
import ContactForm from "@/components/ContactForm";
export const revalidate = 300;

const fallbackProjects = Array.from({ length: 8 }, (_, i) => ({
  id: String(i), title: `Project ${i + 1}`, summary: "Replace this from the admin panel.", stack: ["Next.js", "AWS"], liveUrl: null as string | null,
}));
const experience = [
  { role: "Full-stack Developer", company: "Your Company", period: "2024 to now", text: "Own features end to end: Next.js UI, Node APIs, PostgreSQL, and AWS deployments." },
  { role: "Web Developer", company: "Previous Company", period: "2022 to 2024", text: "Shipped client sites and dashboards, moved hosting to managed AWS services." },
];

export default async function Home() {
  let projects = fallbackProjects, skills: { name: string; category: string }[] = [];
  try {
    const p = await db.project.findMany({ where: { published: true }, orderBy: { sortOrder: "asc" } });
    if (p.length) projects = p;
    skills = await db.skill.findMany({ orderBy: { sortOrder: "asc" } });
  } catch {}
  const groups = skills.reduce<Record<string, string[]>>((a, s) => ((a[s.category] ??= []).push(s.name), a), {});

  return (
    <main>
      <header className="nav"><b>YN.</b><nav><a href="#work">Work</a><a href="#experience">Experience</a><a href="#stack">Stack</a><a href="#contact">Contact</a></nav></header>

      <section className="hero">
        <h1>I build fast Next.js products and run them on AWS.</h1>
        <p>Full-stack developer. 2+ years of experience, 8+ projects delivered, deployed and maintained on VPS and AWS.</p>
        <div className="actions"><a className="btn" href="#contact">Start a project</a><a className="link" href="#work">See the work</a></div>
        <dl className="facts"><div><dt>2+</dt><dd>years building</dd></div><div><dt>8+</dt><dd>projects shipped</dd></div><div><dt>AWS</dt><dd>EC2, S3, RDS, Lambda</dd></div></dl>
      </section>

      <section id="work"><h2>Selected work</h2>
        <div className="grid">{projects.map(p => (
          <article key={p.id} className="card"><h3>{p.title}</h3><p>{p.summary}</p>
            <ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul>
            {p.liveUrl && <a className="link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Visit site</a>}
          </article>))}</div>
      </section>

      <section id="experience"><h2>Experience</h2>
        {experience.map(e => (<div key={e.role} className="row"><span>{e.period}</span><div><h3>{e.role}, {e.company}</h3><p>{e.text}</p></div></div>))}
      </section>

      <section id="stack"><h2>Stack</h2>
        {Object.entries(groups).map(([g, items]) => (<div key={g} className="row"><span>{g}</span><ul className="tags">{items.map(i => <li key={i}>{i}</li>)}</ul></div>))}
      </section>

      <section id="contact"><h2>Tell me what you need</h2><ContactForm /></section>
      <footer>© {new Date().getFullYear()} Your Name</footer>
    </main>
  );
}
