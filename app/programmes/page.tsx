import { Metadata } from 'next';
import { ProgrammesContent } from './ProgrammesContent';

export const metadata: Metadata = {
  title: 'Programmes',
  description:
    'Explore degree and certificate programmes at Baldwin University College — from Medicine and Medical Laboratory Science to Information Technology and Software Engineering.',
};

export default function ProgrammesPage() {
  return <ProgrammesContent />;
}
