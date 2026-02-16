import { Layout } from '@/components/layout/Layout';
import { Users } from 'lucide-react';
import { employees } from '@/data/employees';

export default function Employees() {
  return (
    <Layout>
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our People</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">Our Employees</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl">
            Meet the dedicated team members who make Dudhani Overseas India Private Limited's operations successful.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="group bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden bg-primary/5 flex items-center justify-center">
                  <Users className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg text-foreground">{emp.name}</h3>
                  <p className="text-secondary text-sm font-medium mt-1">{emp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
