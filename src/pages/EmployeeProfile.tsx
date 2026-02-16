import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Users } from 'lucide-react';
import { employees } from '@/data/employees';

export default function EmployeeProfile() {
  const { id } = useParams<{ id: string }>();
  const employee = employees.find((e) => e.id === id);

  if (!employee) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Employee Not Found</h1>
          <Button variant="outline" asChild>
            <Link to="/about/employees">Back to Employees</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <Link to="/about/employees" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ChevronLeft className="h-4 w-4" />
            Back to Employees
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold">{employee.name}</h1>
          <p className="text-xl text-accent mt-2">{employee.role}</p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden bg-muted shrink-0 mx-auto md:mx-0 flex items-center justify-center">
               {employee.image ? (
                 <img src={employee.image} alt={employee.name} className="w-full h-full object-cover" />
               ) : (
                 <Users className="h-20 w-20 text-muted-foreground" />
               )}
             </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">{employee.name}</h2>
              <p className="text-secondary font-medium mb-4">{employee.role}</p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {employee.name} is a valued member of Dudhani Overseas India Private Limited, contributing to the company's growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Employees */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Employees</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.filter((e) => e.id !== employee.id).map((e) => (
              <Link
                key={e.id}
                to={`/about/employees/${e.id}`}
                className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow group"
              >
                 <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                   {e.image ? (
                     <img src={e.image} alt={e.name} className="w-full h-full object-cover" />
                   ) : (
                     <Users className="h-10 w-10 text-primary" />
                   )}
                 </div>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">{e.name}</h3>
                <p className="text-secondary text-sm">{e.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
