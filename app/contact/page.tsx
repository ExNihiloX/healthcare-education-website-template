import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Baldwin University College — visit our campus in Osu, Accra, call us, or send an enquiry.',
};

export default function ContactPage() {
  return <ContactContent />;
}
