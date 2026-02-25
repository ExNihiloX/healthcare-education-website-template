import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPrograms, getProgramBySlug } from '@/data/content';
import { ProgramDetail } from './ProgramDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPrograms().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: 'Programme Not Found' };

  return {
    title: program.title,
    description: program.shortDescription,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return <ProgramDetail program={program} />;
}
