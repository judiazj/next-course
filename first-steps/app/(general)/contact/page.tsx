import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  keywords: ['Pagina de contacto', 'contact']
}

const ContactPage = () => {
  return (
    <h1>Pagina de contactos</h1>
  );
}

export default ContactPage;