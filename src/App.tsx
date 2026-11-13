import DoodleCrewFooter from '@/components/ui/doodle-crew-footer'

const columns = [
  { title: 'Explore', links: [
    { label: 'About us', href: '#about' },
    { label: 'Our purpose', href: '#purpose' },
    { label: 'Our approach', href: '#approach' },
    { label: 'What we do', href: '#work' },
  ] },
  { title: 'Our pillars', links: [
    { label: 'Women empowerment', href: '#pillars' },
    { label: 'Sustainability', href: '#pillars' },
    { label: 'Inclusive development', href: '#pillars' },
  ] },
  { title: 'Get involved', links: [
    { label: 'Volunteer', href: '#contact' },
    { label: 'Collaborate', href: '#contact' },
    { label: 'Support a drive', href: '#contact' },
    { label: 'Share an idea', href: '#contact' },
  ] },
  { title: 'Contact', links: [
    { label: 'Email the foundation', href: 'mailto:kalyanifoundation2024@gmail.com' },
    { label: 'Call +91 95694 70830', href: 'tel:+919569470830' },
    { label: 'WhatsApp', href: 'https://wa.me/919569470830' },
    { label: 'Chandigarh & Delhi', href: '#contact' },
  ] },
]

const crew = [
  { kind: 'yeti' as const, letter: 0, seat: 'front' as const, offset: -0.32, name: 'Bruno', says: 'A small act can go a long way.' },
  { kind: 'bird' as const, letter: 1, seat: 'top' as const, offset: 0.02, name: 'Pip', says: 'Every voice matters.' },
  { kind: 'mushroom' as const, letter: 2, seat: 'front' as const, offset: 0.12, scale: 0.95, name: 'Morel', says: 'Let’s grow something good.' },
  { kind: 'kid' as const, letter: 3, seat: 'top' as const, offset: -0.05, name: 'Juno', says: 'Count me in!' },
  { kind: 'ghost' as const, letter: 5, seat: 'behind' as const, offset: 0, name: 'Boo', says: 'There is room for everyone.' },
  { kind: 'cat' as const, letter: 6, seat: 'front' as const, offset: 0.32, flip: true, name: 'Patch', says: 'Let’s make it happen.' },
]

export default function App() {
  // taste-skill-ignore: official Kalyani Foundation tagline, preserved verbatim.
  return (
    <DoodleCrewFooter
      brand="Kalyani Foundation"
      blurb="Empowering Dreams, Enriching Lives.\nFounded June 2024 · Chandigarh & Delhi"
      wordmark="KALYANI"
      tagline="Give society everything we can, in whatever way we can."
      columns={columns}
      actions={[
        { label: 'Volunteer with us', href: '#contact', icon: 'heart', variant: 'solid' },
        { label: 'See our work', href: '#work', icon: 'sparkle', variant: 'outline' },
      ]}
      copyright="© 2026 Kalyani Foundation · Chandigarh & Delhi"
      legal={[{ label: 'Contact', href: '#contact' }]}
      socials={[
        { label: 'Instagram', href: 'https://www.instagram.com/thekalyanifoundation/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/search/results/companies/?keywords=Kalyani%20Foundation' },
        { label: 'WhatsApp', href: 'https://wa.me/919569470830' },
      ]}
      backToTop
      crew={crew}
      doodles={['heart', 'star', 'sparkle', 'spiral', 'heart', 'star']}
      preset="paper"
      palette={{ background: '#46533A', ink: '#F3F0DD', accent: '#C2A15A' }}
      interactive
    />
  )
}
