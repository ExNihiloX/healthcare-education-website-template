import { Metadata } from 'next';
import { AdmissionsContent } from './AdmissionsContent';

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Entry requirements, application process, and financial aid information for Baldwin University College.',
};

export default function AdmissionsPage() {
  return <AdmissionsContent />;
}
