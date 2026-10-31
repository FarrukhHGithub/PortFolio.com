import { db } from "@/lib/db";
import AdminProjects from "./AdminProjects";
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const [projects, messages] = await Promise.all([
    db.project.findMany({ orderBy: { sortOrder: "asc" } }),
    db.message.findMany({ orderBy: { createdAt: "desc" }, take: 20 }),
  ]);
  return (<main style={{ paddingTop: 40 }}>
    <h2>Dashboard</h2>
    <AdminProjects initial={projects.map(p => ({ id: p.id, title: p.title, slug: p.slug, published: p.published }))} />
    <h3 style={{ marginTop: 48 }}>Messages ({messages.filter(m => !m.read).length} unread)</h3>
    <table><thead><tr><th>From</th><th>Message</th><th>Date</th></tr></thead><tbody>
      {messages.map(m => <tr key={m.id}><td>{m.name}<br /><small>{m.email}</small></td><td>{m.body}</td><td>{m.createdAt.toLocaleDateString()}</td></tr>)}
    </tbody></table>
  </main>);
}
