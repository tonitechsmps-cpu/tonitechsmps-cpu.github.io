import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Users } from 'lucide-react';
import { teamMembers } from '@/data/team';

export default function TeamMember() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Team Member Not Found</h1>
          <Button variant="outline" asChild>
            <Link to="/about/team">Back to Team</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <Link to="/about/team" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ChevronLeft className="h-4 w-4" />
            Back to Team
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">{member.name}</h1>
          <p className="text-xl text-accent mt-2">{member.role}</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-muted shrink-0 mx-auto md:mx-0">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Users className="h-20 w-20 text-muted-foreground" />
                </div>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{member.name}</h2>
              <p className="text-secondary font-medium mb-6">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Team Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.filter((m) => m.id !== member.id).map((m) => (
              <Link
                key={m.id}
                to={`/about/team/${m.id}`}
                className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 bg-primary/10">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">{m.name}</h3>
                <p className="text-secondary text-sm">{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
