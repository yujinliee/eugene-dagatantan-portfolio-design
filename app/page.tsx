'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ChevronDown, Menu, X } from 'lucide-react'
import { SiCanvas, SiCss, SiFigma, SiFlutter, SiHtml5, SiJavascript, SiPhotopea, SiReact, SiTailwindcss } from 'react-icons/si'

const projects = [
  {
    number: '01',
    title: 'SWEET BAKES',
    category: 'Custom bakery storefront',
    meta: ['Web Design', 'UI / UX', '2026'],
    layout: 'project-one',
    href: 'https://sweetbakes-ten.vercel.app',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-25%20233936-yPk2DC1SHx7TID1bAIlFGPag8Hy7Uz.png',
    alt: 'Sweet Bakes custom cakes and cupcakes website',
  },
  {
    number: '02',
    title: 'DINK',
    category: 'Pickleball court scheduling',
    meta: ['Web Design', 'UI / UX', '2026'],
    layout: 'project-two',
    href: 'https://sport-cub-28974362.figma.site',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pickleball%20Court%20Scheduling%20Website%20%281%29-e6prOGaa5olGX9fv7zjJLpu9jjvIzS.png',
    alt: 'Dink pickleball court scheduling website',
  },
  {
    number: '03',
    title: 'LUMINA',
    category: 'Salon and beauty studio website',
    meta: ['Web Design', 'UI / UX', '2026'],
    layout: 'project-three',
    href: 'https://lumina-phi-nine-84.vercel.app',
    image: '/samlon.png',
    alt: 'Lumina salon and beauty studio website',
  },
  {
    number: '04',
    title: 'PITYBOOTH',
    category: 'Interactive photo booth experience',
    meta: ['Web Design', 'UI / UX', '2026'],
    layout: 'project-four',
    href: 'https://pitybooth.vercel.app',
    image: '/Screenshot%202026-09-25%20234707.png',
    alt: 'Pitybooth interactive photo booth website',
  },
]

const capabilities = [
  ['Web Design', 'I design clean and visually balanced websites with careful attention to layout, typography, spacing, and usability.'],
  ['UI / UX Design', 'I create interfaces and user flows that make websites easier to understand, navigate, and use.'],
  ['Front-end Development', 'I turn designs into responsive and functional websites using modern front-end technologies.'],
  ['Responsive Web Development', 'I build layouts that adapt properly across desktop, tablet, and mobile screens.'],
  ['Prototyping', 'I create interactive prototypes to explore layouts, user flows, and ideas before development.'],
] as const
const tools = [
  ['Figma', SiFigma, '#F24E1E'], ['HTML', SiHtml5, '#E34F26'], ['CSS', SiCss, '#1572B6'],
  ['JavaScript', SiJavascript, '#F7DF1E'], ['React', SiReact, '#61DAFB'], ['Tailwind CSS', SiTailwindcss, '#06B6D4'],
  ['Flutter', SiFlutter, '#54C5F8'], ['Canva', SiCanvas, '#00C4CC'], ['Photoshop', SiPhotopea, '#31A8FF'],
] as const
const aboutCopy = "I'm Eugene, a web designer and web developer focused on creating clean, responsive, and user-friendly digital experiences. I enjoy turning ideas into thoughtful websites where design and functionality work together. I pay attention to the details that make every experience feel simple, polished, and easy to use."

function AboutWord({ word, index, total, progress }: { word: string; index: number; total: number; progress: number }) {
  const start = index / total
  const end = (index + 1) / total
  const localProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  const gray = [184, 184, 179]
  const black = [23, 23, 23]
  const color = `rgb(${gray.map((value, channel) => Math.round(value + (black[channel] - value) * localProgress)).join(', ')})`

  return <span style={{ color }}>{word}{index < total - 1 ? ' ' : ''}</span>
}

function Project({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project ${project.layout}`}>
      <div className="project-info">
        <span className="project-number">{project.number}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          <ul>{project.meta.map((item) => <li key={item}>{item}</li>)}</ul>
          <a href={project.href} target="_blank" rel="noreferrer" className="project-link">VIEW PROJECT <ArrowDownRight size={18} strokeWidth={1.5} /></a>
        </div>
      </div>
      <a href={project.href} target="_blank" rel="noreferrer" className="project-visual" aria-label={`Open ${project.title} project`}>
        <img src={project.image} alt={project.alt} />
      </a>
    </article>
  )
}

function CapabilityRow({ item, index, isOpen, onToggle }: { item: (typeof capabilities)[number]; index: number; isOpen: boolean; onToggle: () => void }) {
  return <div className={`capability${isOpen ? ' is-open' : ''}`}><button className="capability-toggle" type="button" aria-expanded={isOpen} onClick={onToggle}><span>0{index + 1}</span><h3>{item[0]}</h3><ChevronDown className="capability-arrow" aria-hidden="true" size={23} strokeWidth={1.5} /></button><p className="capability-description">{item[1]}</p></div>
}

function ToolItem({ item, index, isOpen, onToggle }: { item: (typeof tools)[number]; index: number; isOpen: boolean; onToggle: () => void }) {
  const [name, Icon, color] = item
  return <button className={`tool-item${isOpen ? ' is-open' : ''}`} type="button" aria-label={`Show ${name} logo`} aria-pressed={isOpen} onClick={onToggle}>
    <b>0{index + 1}</b><span>{name}</span><Icon className="tool-logo" aria-hidden="true" style={{ color }} />
  </button>
}

function RevealHeading({ lines, className = '' }: { lines: ReactNode[]; className?: string }) {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const heading = headingRef.current
    if (!heading) return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.2, rootMargin: '-8% 0px -8% 0px' })

    observer.observe(heading)
    return () => observer.disconnect()
  }, [])

  return <h2 ref={headingRef} className={`reveal-heading${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}>
    {lines.map((line, index) => <span className="reveal-heading-mask" key={index}><span className="reveal-heading-line">{line}</span></span>)}
  </h2>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [introVisible, setIntroVisible] = useState(true)
  const [introExiting, setIntroExiting] = useState(false)
  const [introReady, setIntroReady] = useState(false)
  const [openCapability, setOpenCapability] = useState<number | null>(null)
  const [openTool, setOpenTool] = useState<number | null>(null)
  const [aboutProgress, setAboutProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const aboutCopyRef = useRef<HTMLParagraphElement>(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      setIntroVisible(false)
      setIntroReady(true)
      return
    }
    document.body.style.overflow = 'hidden'
    const exitTimer = window.setTimeout(() => {
      setIntroExiting(true)
      setIntroReady(true)
    }, 1050)
    const finishTimer = window.setTimeout(() => {
      setIntroVisible(false)
      document.body.style.overflow = ''
    }, 1350)
    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(finishTimer)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    document.querySelector('footer')?.setAttribute('id', 'footer')
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const updateAboutProgress = () => {
      const aboutCopy = aboutCopyRef.current
      if (!aboutCopy) return
      const paragraphTop = aboutCopy.getBoundingClientRect().top
      const startY = window.innerHeight * 0.8
      const endY = window.innerHeight * 0.23
      const progress = Math.max(0, Math.min(1, (startY - paragraphTop) / (startY - endY)))
      setAboutProgress(progress)
    }
    updateAboutProgress()
    window.addEventListener('scroll', updateAboutProgress, { passive: true })
    window.addEventListener('resize', updateAboutProgress)
    return () => {
      window.removeEventListener('scroll', updateAboutProgress)
      window.removeEventListener('resize', updateAboutProgress)
    }
  }, [])

  return (
    <main className={introReady ? 'intro-ready' : 'intro-pending'}>
      {introVisible && <div className={`intro-overlay${introExiting ? ' is-exiting' : ''}`} aria-hidden="true"><div className="intro-mark"><span className="wordmark">EUGENE<span>.</span></span><i /></div></div>}
      <header className="site-header">
        <a href="#top" className="wordmark" onClick={closeMenu}>EUGENE<span>.</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#works" onClick={closeMenu}>Works</a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#footer" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-title"><h1 className="hero-reveal-line">WEB DESIGNER</h1><h1 className="outline hero-reveal-line">&amp; WEB<br />DEVELOPER</h1></div>
        <div className="hero-bottom"><div className="hero-actions"><a href="#works" className="button dark">VIEW MY WORKS <ArrowDownRight size={17} /></a><a href="#contact" className="button">LET&apos;S WORK TOGETHER <ArrowDownRight size={17} /></a></div></div>
        <div className="hero-placeholder"><img src="/IMG_0399.JPG" alt="Eugene portrait" /></div>
        <div className="hero-index">01 — 05</div>
      </section>

      <section className="work section-wrap" id="works">
        <div className="section-heading"><span className="section-kicker">(01) Selected work</span><RevealHeading lines={[<>SELECTED</>, <em>WORK.</em>]} /><p>A selection of web design and development projects.</p></div>
        <div className="projects">{projects.map((project) => <Project key={project.number} project={project} />)}</div>
      </section>

      <section className="capabilities section-wrap" id="skills"><div className="section-heading"><span className="section-kicker">(02) Capabilities</span><RevealHeading lines={[<>WHAT</>, <em>I DO.</em>]} /></div><div className="capability-list">{capabilities.map((item, index) => <CapabilityRow key={item[0]} item={item} index={index} isOpen={openCapability === index} onToggle={() => setOpenCapability(openCapability === index ? null : index)} />)}</div></section>

      <section className="about section-wrap" id="about"><div className="section-heading"><span className="section-kicker">(03) About</span><RevealHeading lines={[<>ABOUT</>, <em>ME.</em>]} /></div><div className="about-content"><p ref={aboutCopyRef} className="about-copy">{aboutCopy.split(' ').map((word, index, words) => <AboutWord key={`${word}-${index}`} word={word} index={index} total={words.length} progress={reducedMotion ? 1 : aboutProgress} />)}</p></div></section>

      <section className="tools section-wrap"><div className="section-heading"><span className="section-kicker">(04) The toolkit</span><RevealHeading lines={[<>TOOLS I</>, <em>WORK WITH</em>]} /></div><div className="tools-list">{tools.map((tool, index) => <ToolItem key={tool[0]} item={tool} index={index} isOpen={openTool === index} onToggle={() => setOpenTool(openTool === index ? null : index)} />)}</div></section>

      <section className="contact section-wrap" id="contact"><span className="section-kicker">(05) Start a conversation</span><RevealHeading lines={[<>LET&apos;S CREATE</>, <em>SOMETHING</em>, <>GOOD.</>]} /><div className="contact-bottom"><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=edagatantan@gmail.com&amp;su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className="button dark">START A PROJECT <ArrowDownRight size={18} /></a><div className="socials"><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=edagatantan@gmail.com&amp;su=Project%20Inquiry" target="_blank" rel="noopener noreferrer">Email</a><a href="https://www.facebook.com/eugenedagatantan24" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://www.linkedin.com/in/edagatantan" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/yujinliee" target="_blank" rel="noopener noreferrer">GitHub</a></div></div></section>

      <footer><div className="footer-main"><a href="#top" className="wordmark">EUGENE<span>.</span></a><p className="footer-role">WEB DESIGNER<br />&amp; WEB DEVELOPER</p><div className="footer-socials"><a href="mailto:edagatantan@gmail.com">EMAIL</a><a href="https://www.facebook.com/eugenedagatantan24" target="_blank" rel="noopener noreferrer">FACEBOOK</a><a href="https://www.linkedin.com/in/edagatantan" target="_blank" rel="noopener noreferrer">LINKEDIN</a><a href="https://github.com/yujinliee" target="_blank" rel="noopener noreferrer">GITHUB</a></div><a href="#top" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 EUGENE DAGATANTAN</span><span>PHILIPPINES</span></div></footer>
    </main>
  )
}
