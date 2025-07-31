import CertificationCard from '@/components/CertificationCard';
import { certifications } from '@/data/certifications';

export default function CertificationsPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            link={cert.link}
          />
        ))}
      </div>
    </main>
  );
}
