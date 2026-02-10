import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Users } from 'lucide-react';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <Layout>
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our People</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Team</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Meet the experienced leadership team driving Dudhani Overseas India Private Limited forward.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.id}
                to={`/about/team/${member.id}`}
                className="group bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden bg-primary/5">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="h-20 w-20 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-secondary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-secondary text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mt-3 line-clamp-2">{member.bio}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
