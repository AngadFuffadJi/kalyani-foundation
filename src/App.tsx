import { useEffect, useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import DoodleCrewFooter from '@/components/ui/doodle-crew-footer'

type Pillar = { id: string; title: string; short: string; long: string; tags: string[]; mark: string }

const pillars: Pillar[] = [
  {
    id: 'women', title: 'Women Empowerment', mark: 'W',
    short: 'Creating an environment where every woman and girl has the freedom, resources, opportunities and confidence to shape her own life.',
    long: 'At Kalyani Foundation, we believe that empowering women means creating an environment where every woman and girl has the freedom, resources, opportunities and confidence to shape her own life. Women continue to face challenges such as gender discrimination, unequal access to education and employment, financial dependence, workplace inequality, social restrictions, lack of representation, harassment, violence and limited participation in decision-making. Our focus is not limited to creating awareness about these issues. We aim to contribute towards practical change through awareness campaigns, educational initiatives, community programmes, collaborations, fundraising activities and other initiatives that create opportunities and support for women and girls. We want to help create a society where women are not simply given a voice, but are given the opportunity, platform and support to use it.',
    tags: ['Awareness', 'Education', 'Community', 'Opportunity'],
  },
  {
    id: 'sustainability', title: 'Sustainability', mark: 'S',
    short: 'Building a better society also means protecting the environment that sustains it, and taking action for future generations.',
    long: 'We believe that building a better society also means protecting the environment that sustains it. Sustainability is not limited to environmental awareness. It is about creating responsible communities that understand the impact of their choices and take action to protect resources for future generations. Our work focuses on creating awareness and encouraging practical action around issues such as pollution, waste generation, unsustainable consumption, resource depletion, environmental degradation and climate change. Through digital campaigns, community initiatives, awareness programmes, sustainability drives and collaborations, we aim to make sustainable practices more accessible and encourage individuals and communities to become active participants in protecting the environment. Sustainability is a shared responsibility, and meaningful environmental change begins when responsible choices become part of everyday life.',
    tags: ['Waste', 'Pollution', 'Climate', 'Everyday choices'],
  },
  {
    id: 'inclusive', title: 'Inclusive Development', mark: 'I',
    short: 'Creating opportunities for everyone to participate in and benefit from social progress, regardless of background, circumstances or identity.',
    long: 'We believe that development has little meaning if it only benefits a particular section of society. Inclusive development means creating opportunities for everyone to participate in and benefit from social progress, regardless of their background, circumstances or identity. Different communities experience different barriers. Children may lack access to quality educational resources. Young people may struggle to find opportunities and platforms. Economically disadvantaged communities may lack access to basic resources and financial opportunities. Persons with disabilities can face barriers to accessibility and participation. Senior citizens may experience social isolation and limited support. Many individuals and communities continue to face inequalities in education, healthcare, technology, employment, infrastructure and social mobility. Kalyani Foundation aims to contribute wherever we can by identifying community needs and developing initiatives that provide practical support, resources, opportunities and awareness. Our approach to inclusive development is broad because we believe that social progress should not have a single beneficiary. We aim to build communities where everyone has the opportunity to participate, contribute, grow and live with dignity.',
    tags: ['Children', 'Youth', 'Seniors', 'Accessibility'],
  },
]

const issues = [
  { title: 'Barriers women still face', text: 'Women continue to face gender discrimination, unequal opportunities, limited access to education and employment, financial dependence, workplace inequality, social expectations, lack of representation, harassment, violence and restrictions on their freedom and decision-making. While awareness has grown, many of these challenges continue to affect women every day.', symbol: 'W' },
  { title: 'Development, unevenly shared', text: 'Different communities face different barriers, including limited access to education, healthcare, opportunities, digital resources, financial security, infrastructure and social mobility. Children, young people, women, senior citizens, persons with disabilities and economically disadvantaged communities can all experience forms of exclusion.', symbol: 'I' },
  { title: 'Sustainability needs action', text: 'Environmental degradation, pollution, excessive waste, resource depletion, climate change and unsustainable consumption affect communities across the world. A sustainable future requires changes not only at an institutional level, but also in everyday behaviour and community participation.', symbol: 'S' },
]

const initiatives = [
  'Community and donation drives', 'Educational and awareness initiatives', 'Social media campaigns',
  'Sustainability campaigns and activities', 'Women-focused initiatives', 'Fundraising events',
  'Community outreach programmes', 'Collaborations with NGOs and social organisations', 'Youth-led initiatives',
  'Resource and support initiatives', 'Events and workshops', 'Volunteer-led projects',
  'Other initiatives designed around identified community needs',
]

const ways = [
  'On-ground initiatives', 'Digital campaigns', 'Community engagement', 'Collaborations', 'Fundraising', 'Volunteer action',
]

const brandMark = '/kalyani-foundation/kalyani-symbol.webp'
const fullLogo = '/kalyani-foundation/kalyani-logo.webp'

function TreeMark({ className = '' }: { className?: string }) {
  return <img className={className} src={brandMark} alt="" aria-hidden="true" />
}
function Arrow({ up = false }: { up?: boolean }) { return <span aria-hidden="true" className="arrow-glyph">{up ? '↑' : '↗'}</span> }

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return <div className={`section-label${dark ? ' on-dark' : ''}`}><span className="label-ornament" aria-hidden="true" />{children}</div>
}

function App() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar | null>(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: 'Chandigarh', topic: 'I want to volunteer', message: '' })
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || reduced) {
      targets.forEach((node) => node.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' })
      targets.forEach((node) => observer.observe(node))
      return () => observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollValue(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!selectedPillar) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedPillar(null) }
    window.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('dialog-open')
    return () => { window.removeEventListener('keydown', closeOnEscape); document.body.classList.remove('dialog-open') }
  }, [selectedPillar])

  const email = 'kalyanifoundation2024@gmail.com'
  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/thekalyanifoundation/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/search/results/companies/?keywords=Kalyani%20Foundation' },
  ]
  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`${form.topic} — ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\nCity: ${form.city}\nHow can we help?: ${form.topic}\n\n${form.message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return <main id="top" className="royal-site" style={{ '--scroll-value': scrollValue } as CSSProperties}>
    <div className="scroll-progress" aria-hidden="true"><span /></div>
    <h1 className="opening-page-title">Kalyani Foundation — Empowering Dreams, Enriching Lives</h1>
    <DoodleCrewFooter
      className="kalyani-opening"
      brand="Kalyani Foundation"
      logoSrc={brandMark}
      navigationLabel="Primary"
      blurb="Society gives us so much, and we have a responsibility to give back. Founded June 2024 · Chandigarh & Delhi."
      wordmark="KALYANI"
      tagline="Give society everything we can, in whatever way we can."
      columns={[
        { title: 'Explore', links: [{ label: 'About us', href: '#about' }, { label: 'Our purpose', href: '#purpose' }, { label: 'Our vision', href: '#vision' }] },
        { title: 'Our pillars', links: [{ label: 'Women empowerment', href: '#pillars' }, { label: 'Sustainability', href: '#pillars' }, { label: 'Inclusive development', href: '#pillars' }] },
        { title: 'Our work', links: [{ label: 'Our approach', href: '#approach' }, { label: 'What we do', href: '#work' }, { label: 'How we work', href: '#difference' }] },
        { title: 'Connect', links: [{ label: 'Get involved', href: '#contact' }, { label: 'Instagram', href: 'https://www.instagram.com/thekalyanifoundation/' }, { label: 'WhatsApp', href: 'https://wa.me/919569470830' }] },
      ]}
      actions={[
        { label: 'Explore our work', href: '#work', icon: 'sparkle', variant: 'solid' },
        { label: 'Get involved', href: '#contact', icon: 'heart', variant: 'outline' },
      ]}
      copyright="Kalyani Foundation · Chandigarh & Delhi"
      legal={[]}
      socials={socialLinks}
      backToTop={false}
      crew={[
        { kind: 'yeti', letter: 0, seat: 'front', offset: -0.32, name: 'Bruno', says: 'A small act can go a long way.' },
        { kind: 'bird', letter: 1, seat: 'top', offset: 0.02, name: 'Pip', says: 'Every voice matters.' },
        { kind: 'mushroom', letter: 2, seat: 'front', offset: 0.12, scale: 0.95, name: 'Morel', says: 'Let’s grow something good.' },
        { kind: 'kid', letter: 3, seat: 'top', offset: -0.05, name: 'Juno', says: 'Count me in!' },
        { kind: 'ghost', letter: 5, seat: 'behind', offset: 0, name: 'Boo', says: 'There is room for everyone.' },
        { kind: 'cat', letter: 6, seat: 'front', offset: 0.32, flip: true, name: 'Patch', says: 'Let’s make it happen.' },
      ]}
      doodles={['heart', 'star', 'sparkle', 'spiral', 'heart', 'star']}
      preset="paper"
      palette={{ background: '#082f2b', ink: '#e4c781', accent: '#ae8b47' }}
      height="min(850px, 100svh)"
      interactive
    />
    <div className="gold-ribbon" aria-label="Our guiding belief"><div className="ribbon-track"><span>GIVE SOCIETY EVERYTHING WE CAN</span><b className="ribbon-mark" aria-hidden="true"/><span>IN WHATEVER WAY WE CAN</span><b className="ribbon-mark" aria-hidden="true"/><span>GIVE SOCIETY EVERYTHING WE CAN</span><b className="ribbon-mark" aria-hidden="true"/><span>IN WHATEVER WAY WE CAN</span></div></div>

    <section className="about-section page-pad" id="about">
      <div className="about-heading reveal"><div className="about-brand-note"><SectionLabel>ABOUT KALYANI</SectionLabel><img className="about-official-logo" src={fullLogo} alt="Official Kalyani Foundation logo: a woman formed by a tree, with clasped hands as its trunk." /></div><p className="about-manifesto">Awareness is only the first step. Meaningful change requires <em>consistent action, accountability, participation</em> and long-term commitment.</p></div>
      <div className="about-copy reveal"><div className="about-lead"><span className="drop-cap">K</span><p>Kalyani Foundation was founded in June 2024 with a simple belief: society gives us so much, and we have a responsibility to give back to it.</p></div><div className="about-columns"><p>The Foundation was born from a desire to bridge the gap between the intention of social work and its actual execution. While countless organisations and individuals work towards social change, many social issues continue to persist despite years of awareness, campaigns and conversations around them.</p><p>Kalyani Foundation aims to create a space where social impact is not limited to conversations or one-time initiatives. We work through a hybrid model, combining on-ground action with digital campaigns, community initiatives, collaborations, fundraising activities, awareness programmes, drives and other projects that can create meaningful and practical impact.</p><p>At Kalyani, we believe that development should not be limited to one section of society. Progress is meaningful only when it is inclusive. Our aim is to contribute towards a society where individuals, regardless of their background, circumstances or identity, have access to opportunities, dignity, resources and the ability to build a better future.</p></div></div>
      <div className="facts-band reveal"><div className="fact"><strong>June ’24</strong><span>Founded</span></div><div className="fact"><strong>2 cities</strong><span>Chandigarh &amp; Delhi</span></div><div className="fact"><strong>3 pillars</strong><span>Women Empowerment · Sustainability · Inclusive Development</span></div><div className="fact"><strong>Hybrid</strong><span>On-ground action with digital campaigns</span></div></div>
    </section>

    <section className="purpose-section page-pad" id="purpose">
      <div className="purpose-heading reveal"><SectionLabel dark>OUR PURPOSE</SectionLabel><h2>We exist because<br />social issues cannot be<br /><em>solved simply by talking.</em></h2><span className="purpose-asterisk" aria-hidden="true" /></div>
      <div className="issue-list">{issues.map((issue) => <article className="issue-row reveal" key={issue.title}><span className="issue-mark" aria-hidden="true">{issue.symbol}</span><div className="issue-title"><h3>{issue.title}</h3></div><p>{issue.text}</p></article>)}</div>
      <div className="purpose-quote reveal"><span className="quote-mark">“</span><blockquote>We believe inclusive development means ensuring that progress reaches people, not merely statistics.</blockquote><p>Kalyani Foundation seeks to contribute wherever we realistically can, because waiting for someone else to solve a problem is not a sustainable approach to social change.</p></div>
    </section>

    <section className="pillars-section page-pad" id="pillars">
      <div className="section-intro reveal"><SectionLabel>OUR CORE PILLARS</SectionLabel><div><h2>Three pillars,<br /><em>one broader vision.</em></h2><p>These pillars represent the areas we deeply resonate with and the broader vision we have for the communities we serve.</p></div></div>
      <div className="pillar-grid">{pillars.map((pillar) => <button className={`pillar-card pillar-${pillar.id} reveal`} type="button" key={pillar.id} onClick={() => setSelectedPillar(pillar)} aria-label={`Read about ${pillar.title}`}>
        <span className="pillar-seal" aria-hidden="true"><span>{pillar.mark}</span><i className="seal-flower" /></span><h3>{pillar.title}</h3><p>{pillar.short}</p><div className="pillar-tags">{pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="pillar-read">Read about {pillar.title} <Arrow /></span>
      </button>)}</div>
      <div className="pillars-closer reveal"><span>EMPOWERMENT <b className="text-divider" aria-hidden="true" /> INCLUSION <b className="text-divider" aria-hidden="true" /> SUSTAINABILITY</span><span>THE WHOLE IS STRONGER <i className="text-divider" aria-hidden="true" /></span></div>
    </section>

    <section className="approach-section page-pad" id="approach">
      <div className="approach-graphic reveal" role="img" aria-label="Three connected circles show that empowerment, sustainability and inclusion work together at Kalyani">
        <div className="venn venn-top"><span>Empowerment</span></div><div className="venn venn-left"><span>Inclusion</span></div><div className="venn venn-right"><span>Sustainability</span></div><div className="venn-centre">Kalyani</div>
      </div>
      <div className="approach-copy reveal"><SectionLabel>OUR APPROACH</SectionLabel><h2>These issues are<br /><em>interconnected.</em></h2><p>Although our work is organised around three core pillars, women empowerment, sustainability and inclusive development cannot be addressed in isolation.</p><ol className="principles"><li><strong>A sustainable society requires inclusion.</strong></li><li><strong>Inclusive development requires empowerment.</strong></li><li><strong>Empowered communities are better positioned to create sustainable change.</strong></li></ol><p className="approach-transition">Through our hybrid model, Kalyani Foundation brings together these approaches to address interconnected challenges:</p><div className="approach-tags">{ways.map((way) => <span key={way}>{way}</span>)}</div><div className="approach-note"><TreeMark/><p>Our goal is not to claim that we can solve every problem. It is to identify <em>where we can make a difference</em>, and then take meaningful action.</p></div><a className="dark-link" href="#contact">Join the action <Arrow /></a></div>
    </section>

    <section className="work-section page-pad" id="work">
      <div className="section-intro reveal"><SectionLabel>WHAT WE DO</SectionLabel><div><h2>Online <em>and</em><br />on the ground.</h2><p>Kalyani Foundation follows a hybrid approach to social impact. Rather than restricting ourselves to one format, we choose the approach that best addresses a particular problem. Our initiatives may include:</p></div></div>
      <div className="initiative-grid">{initiatives.map((initiative) => <div className="initiative reveal" key={initiative}><span className="initiative-seal" aria-hidden="true"/><span>{initiative}</span><Arrow /></div>)}</div>
      <div className="work-question reveal"><p>Some issues may require</p><div className="moving-words" aria-label="An on-ground drive. Awareness. Fundraising. Collaboration. Someone to listen."><span>an on-ground drive.</span><span>awareness.</span><span>fundraising.</span><span>collaboration.</span><span>someone to listen.</span></div><p>And some may simply require someone to listen and connect a person with the right support.</p></div>
      <div className="work-process reveal"><span>Our work begins with understanding the need, and then asking:</span><strong>what can we realistically do about it?</strong><div className="process-steps"><span>Understand the need</span><i>→</i><span>Find what we can realistically do</span><i>→</i><span>Take meaningful action</span></div></div>
    </section>

    <section className="difference-section page-pad" id="difference">
      <div className="difference-header reveal"><SectionLabel dark>WHAT MAKES KALYANI DIFFERENT</SectionLabel><h2>“Give society everything we can,<br /><em>in whatever way we can.</em>”</h2><p>We do not want social impact to become performative. Our objective is not simply to conduct activities for photographs, statistics or recognition. We want our initiatives to have a genuine purpose and to respond to real needs. Impact does not always have to be large to be meaningful.</p></div>
      <div className="difference-examples">{[
        'a community drive that provides someone with something they need.',
        'an awareness campaign that changes someone’s perspective.',
        'connecting someone with an opportunity or a resource.',
        'creating a platform for someone’s voice to be heard.',
      ].map((text) => <article className="difference-example reveal" key={text}><span>IN PRACTICE</span><p>{text}</p></article>)}</div>
      <div className="difference-close reveal"><p>For us, every contribution matters when it is genuine.</p><p>Kalyani therefore aims to remain flexible, community-oriented and action-driven, working with individuals, volunteers, communities, NGOs and other organisations to create solutions that are practical, accessible and sustainable.</p></div>
    </section>

    <section className="vision-section page-pad" id="vision">
      <div className="vision-heading reveal"><SectionLabel>OUR VISION</SectionLabel><h2>A community people<br /><em>can trust.</em></h2><p>We envision Kalyani Foundation becoming a safe, inclusive and accessible space for social change, a place where people feel heard, supported and empowered to seek solutions to the challenges they face.</p></div>
      <div className="vision-copy reveal"><blockquote>We want Kalyani to grow beyond being an organisation that conducts projects. <em>We want it to become a community people can trust.</em></blockquote><p>A person should be able to approach Kalyani with a problem, a concern, an idea or a need and know that we will genuinely try to help, whether that means addressing the issue ourselves, connecting them with the appropriate resources, collaborating with another organisation or simply helping them find a path forward.</p><p>Our long-term vision is to build a community where people do not feel alone in facing social challenges, and where individuals are empowered to become part of the solution.</p></div>
      <div className="future-title reveal">ULTIMATELY, WE STRIVE TOWARDS A SOCIETY WHERE</div>
      <div className="future-values">{[
        ['Empowerment is accessible', 'to every woman, girl and individual.'],
        ['Development is inclusive', 'reaching people, not merely statistics.'],
        ['Sustainability is shared', 'a responsibility we all carry.'],
        ['Action is for everyone', 'something everyone can contribute towards.'],
      ].map(([title, text]) => <article className="future-value reveal" key={title}><span className="future-mark" aria-hidden="true"/><strong>{title}</strong><p>{text}</p></article>)}</div>
    </section>

    <section className="social-section page-pad" id="social">
      <div className="social-intro reveal"><SectionLabel>FOLLOW OUR JOURNEY</SectionLabel><h2>See the work<br /><em>as it happens.</em></h2><p>Drives, campaigns, workshops and stories from Chandigarh and Delhi, shared as they happen on our official channels.</p></div>
      <div className="social-cards">{socialLinks.map((link, i) => <a key={link.label} className={`social-card social-card-${i + 1} reveal`} href={link.href} target="_blank" rel="noreferrer"><span className="social-card-type">OFFICIAL CHANNEL</span><span className="social-icon">{i === 0 ? 'ig' : 'in'}</span><span className="social-card-name">{link.label}<small>{i === 0 ? '@thekalyanifoundation' : 'Kalyani Foundation'}</small></span><Arrow /></a>)}</div>
    </section>

    <section className="contact-section page-pad" id="contact">
      <div className="contact-copy reveal"><SectionLabel>GET IN TOUCH</SectionLabel><h2>A problem, an idea,<br /><em>or a need?</em></h2><p>Reach out. Whether you want to volunteer, collaborate, support a drive or seek help, we will genuinely try to help you find a path forward.</p><div className="contact-ways"><a href={`mailto:${email}`}><span>EMAIL</span><strong>{email}</strong><Arrow /></a><a href="tel:+919569470830"><span>PHONE</span><strong>+91 95694 70830</strong><Arrow /></a><a href="https://wa.me/919569470830" target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>Message us</strong><Arrow /></a></div><div className="operation-area"><span>AREAS OF OPERATION</span><p>Chandigarh <i aria-hidden="true"/> Delhi</p></div></div>
      <div className="contact-form-card reveal"><div className="form-heading"><span className="form-seal"><TreeMark/></span><div><h3>Send us a message</h3><p>We read every message.</p></div></div><form className="contact-form" onSubmit={sendMessage}>
        <label>Your name<input type="text" name="name" autoComplete="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required /></label>
        <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} /></label>
        <div className="form-selects"><label>City<select name="city" value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })}><option>Chandigarh</option><option>Delhi</option><option>Elsewhere</option></select></label><label>How can we help?<select name="topic" value={form.topic} onChange={(event) => setForm({ ...form, topic: event.target.value })}><option>I want to volunteer</option><option>I want to collaborate / partner</option><option>I want to support a drive or fundraiser</option><option>I need support or have a concern</option><option>I have an idea</option><option>Something else</option></select></label></div>
        <label>Your message<textarea name="message" rows={3} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required /></label>
        <button type="submit" className="gold-button send-button">Send message <Arrow /></button><small className="form-note">Opens your email app with your message ready to send.</small>
      </form></div>
    </section>

    <footer className="foundation-footer">
      <a className="foundation-footer-brand" href="#top" aria-label="Back to Kalyani Foundation home"><img src={fullLogo} alt="Kalyani Foundation" /><span>BACK TO THE FOUNDATION <Arrow up /></span></a>
      <div className="foundation-footer-links">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<Arrow /></a>)}</div>
      <p>Empowering Dreams, Enriching Lives. · Founded June 2024 · Chandigarh & Delhi</p>
    </footer>
    {selectedPillar && <div className="pillar-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedPillar(null) }}><section className="pillar-dialog" role="dialog" aria-modal="true" aria-labelledby="pillar-dialog-title"><button className="dialog-close" type="button" aria-label="Close" onClick={() => setSelectedPillar(null)}>×</button><span className="dialog-number">OUR PILLAR</span><span className="dialog-seal">{selectedPillar.mark}<i className="seal-flower"/></span><h2 id="pillar-dialog-title">{selectedPillar.title}</h2><p>{selectedPillar.long}</p><div className="dialog-tags">{selectedPillar.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="gold-button" href="#contact" onClick={() => setSelectedPillar(null)}>Get in touch <Arrow /></a></section></div>}
  </main>
}

export default App
