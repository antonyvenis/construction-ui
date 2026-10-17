import { useState, useEffect, useRef } from 'react'

const PROJECTS = [
  ['Riverview Green Building', 'Building, Road Construction'],
  ['The Langham Hotel', 'Building, Construction'],
  ['Villa Rustica Renovation', 'Construction, Road Construction'],
  ['Land Rustica Renovation', 'Building, Maintenance'],
  ['Kitchen And Living Room', 'Architecture, Building'],
  ['House Under The Palms', 'Construction, Road Construction'],
  ['Green House', 'Construction, Road Construction'],
  ['Inside renovation', 'Construction, Road Construction'],
]
const PIMG = ["personal_gift-1-600x600.jpg","tick_tock-1-1-600x600.jpg","portfolio7-1-600x600.jpg","portfolio10-1-600x600.jpg","portfolio3-1-600x600.jpg","portfolio6-1-600x600.jpg","portfolio9-1-600x600.jpg","portfolio2-1-600x600.jpg"]
const FEATURES = [
  ['🏗', 'Building Engineering', 'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.'],
  ['🦺', 'Safety First', 'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.'],
  ['🛣', 'Road Construction', 'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.'],
]
const SERVICES = [
  ['Building', 'A building, or edifice, is a structure with a roof and walls standing.', 'linear-gradient(135deg,#555,#a68a3a)'],
  ['Road Construction', 'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.', 'linear-gradient(135deg,#2f3d46,#a68a3a)'],
  ['Maintenance', 'All are assigned responsibilities relate to the maintenance mode.', 'linear-gradient(135deg,#5a4a30,#c4a24c)'],
]
const STEPS = [
  ['01', 'Agency / Bidding', 'Ensure design documents are reviewed and permitted'],
  ['02', 'Construction', 'Helps to coordinate furnishings and move-in process'],
  ['03', 'Project Execution', 'Client directs move in of equipment, operations & staff'],
]
const TESTIMONIALS = [
  ['R', 'Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job.', 'Richard Dowson'],
  ['L', 'I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS.', 'Lisa Jordan'],
  ['M', "Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team can't be rivaled by any other contractor I have worked with.", 'Michael Anderson'],
]

const Img = ({ n, ...p }) => <img src={`/images/${n}`} alt="" loading="lazy" onError={e => { e.currentTarget.style.visibility = 'hidden' }} {...p} />
const bg = n => ({ backgroundImage: `url(/images/${n})` })

const Social = ({ yt }) => (<>
  <a href="#" aria-label="Facebook" className="s-f" data-tip="Facebook"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg></a>
  <a href="#" aria-label="X" className="s-x" data-tip="Twitter"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.2 2h3.3l-7.2 8.3L22.8 22h-6.6l-5.2-6.8L5 22H1.7l7.7-8.8L1.2 2H8l4.7 6.2L18.2 2zm-1.2 18h1.8L7 3.9H5.1L17 20z" /></svg></a>
  <a href="#" aria-label="Instagram" className="s-i" data-tip="Instagram"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></svg></a>
  {yt ? <a href="#" aria-label="YouTube" className="s-y" data-tip="Youtube"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"/></svg></a> : <a href="#" aria-label="LinkedIn" className="s-l" data-tip="Linkedin"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5z" /></svg></a>}
</>)

function useRotate(n, ms) {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % n), ms); return () => clearInterval(t) }, [n, ms])
  return [i, setI]
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <Tag ref={ref} className={`rv ${on ? 'in' : ''} ${className}`} {...rest}>{children}</Tag>
}

const Dots = ({ n, i, set, style }) => (
  <div className="dots" style={style}>{Array.from({ length: n }, (_, k) => <b key={k} className={k === i ? 'on' : ''} onClick={() => set(k)} />)}</div>
)

export default function App() {
  const [open, setOpen] = useState(false)
  const [slide, setSlide] = useRotate(2, 5500)
  const [tst, setTst] = useRotate(3, 6000)
  const [cookie, setCookie] = useState(() => { try { return !localStorage.getItem('ck') } catch { return true } })
  const [sent, setSent] = useState(false)
  const [err, setErr] = useState('')
  const close = () => setOpen(false)
  const [top, setTop] = useState(false)
  const [pg, setPg] = useState(false)
  const [sb, setSb] = useState(false)
  const [toast, setToast] = useState('')
  useEffect(() => {
    const h = e => {
      const l = e.target.closest && e.target.closest('a[href="#"]')
      if (!l || l.closest('.logo') || l.classList.contains('home')) return
      e.preventDefault()
      if (l.matches('.dd>a, .dd li.sub>a')) return
      setOpen(false)
      setToast((l.textContent || 'This').replace('›', '').trim())
      clearTimeout(window.__tt); window.__tt = setTimeout(() => setToast(''), 2800)
    }
    document.addEventListener('click', h)
    return () => document.removeEventListener('click', h)
  }, [])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  useEffect(() => { const f = () => setTop(window.scrollY > 400); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])

  const submit = e => {
    e.preventDefault()
    const f = e.target
    if (!f.n.value.trim() || !/\S+@\S+\.\S+/.test(f.e.value)) return setErr('Please enter your name and a valid email.')
    setErr(''); setSent(true); f.reset()
  }
  const accept = () => { setCookie(false); try { localStorage.setItem('ck', 1) } catch {} }

  const navItems = (<>

        <a href="#" className="home" aria-label="Home" onClick={close}><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/></svg></a><a href="#about" onClick={close}>About</a><a href="#services" onClick={close}>Services</a>
        <a href="#faq" onClick={close}>FAQ</a><a href="#projects" onClick={close}>Blog</a>
        <div className={`dd ${pg ? 'open' : ''}`}><a href="#" onClick={e => { if (window.innerWidth < 992) { e.preventDefault(); setPg(!pg) } }}>Pages <svg className="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 9 7 7 7-7"/></svg></a><ul>{['Shop', 'Cart', 'Wishlist', 'My account', 'Submenu example'].map(x => <li key={x}><a href="#">{x}</a></li>)}<li className={`sub ${sb ? 'open' : ''}`}><a href="#" onClick={e => { if (window.innerWidth < 992) { e.preventDefault(); setSb(!sb) } }}>Dropdown menu <svg className="chev" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 9 7 7 7-7"/></svg></a><ul>{['Submenu 1', 'Submenu 2'].map(x => <li key={x}><a href="#">{x}</a></li>)}</ul></li></ul></div>
        <a href="#quote" onClick={close}>Contact</a>
        <a className="buy" href="#" onClick={close}>Buy XTRA Theme</a>
  </>)

  return (<>
    <div className="top"><div className="w"><span className="tcall">Have any questions? call us <svg viewBox="0 0 24 24" width="16" height="16" fill="#f4c03b"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg> <b>+1 (818) 23 45 678</b></span><span className="tsoc"><Social /></span></div></div>
    <header><div className="w">
      <a className="logo" href="#"><Img n="logo-construction.png" alt="XTRA Construction" className="logoimg" /></a>
      <nav className="dnav">{navItems}</nav>
      <span className="srch" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/></svg></span><a className="hd-btn wbtn" href="#quote">Free Consultation</a>
      <a className="sq call" href="tel:+18181123445345" aria-label="Call"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg></a>
      <button className="sq burger" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
    </div></header>
    <div className={`ovl ${open ? 'show' : ''}`} onClick={close}><button className="xclose" aria-label="Close menu">✕</button></div>
    <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}><nav>{navItems}</nav><div className="mfoot"><div className="soc"><Social /></div><span>© Copyright 2026</span></div></aside>


    <section className="hero">
      <div className={`slide s1 ${slide === 0 ? 'on' : ''}`}><div className="w">
        <h1>Start new<br /><em>projects</em></h1>
        <p>Don’t get framed by the competition, trust our solid reputation.</p>
        <Img n="man-model.png" className="man" />
        <a className="play" href="https://www.youtube.com/watch?v=FyS_zcvmUr4" target="_blank" rel="noopener noreferrer"><i>▶</i><span><small>Watch video</small><b>Why choose us?</b></span></a>
      </div></div>
      <div className={`slide s2 ${slide === 1 ? 'on' : ''}`}><div className="w">
        <h1>Committed to superior quality and results</h1>
        <h2 className="s2b">We’ll get it done, like us there are none</h2>
      </div></div>
      <button className="arr l" aria-label="Previous" onClick={() => setSlide((slide + 1) % 2)}>‹</button><button className="arr r" aria-label="Next" onClick={() => setSlide((slide + 1) % 2)}>›</button>
      <Dots n={2} i={slide} set={setSlide} />
    </section>

    <section className="sec feat navy" style={{ paddingBottom: 90 }}><div className="w">
      <Reveal className="c" style={{ margin: '0 0 40px' }}><Img n="safety-icon.png" className="hat" /><span className="eyebrow">Features at a glance</span><h2>We know what your needs are</h2></Reveal>
      <div className="grid3">{FEATURES.map(([ic, t, d], k) => (
        <Reveal className="fcard" key={t} style={bg(`service-${k + 1}.jpg`)}><div className="cap"><h3>{t}</h3><span>⌃</span></div><div className="ov"><h3>{t}</h3><p>{d}</p><a className="more" href="#services">Learn More ...</a></div></Reveal>
      ))}
    </div>
    </div></section>

    <section className="sec alt" id="about"><div className="w two">
      <Reveal className="img" style={bg('about-company.jpg')} />
      <Reveal><span className="eyebrow">About</span><h2>About our company<br />Always dedicated and devoted</h2>
        <p>Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media and related building communities.</p>
        <ul className="ul">{['Excellent engineering', 'Modern & up to date', 'Grade #1 materials', 'Structures with long life'].map(x => <li key={x}>{x}</li>)}</ul>
      </Reveal>
    </div></section>

    <section className="sec" id="services"><div className="w">
      <Reveal className="c wm" data-w="SERVICES"><span className="eyebrow">What we can do for you</span><h2>Our construction services</h2><p>What we can do for you</p></Reveal>
      <div className="grid3 svc" style={{ marginTop: 40 }}>{SERVICES.map(([t, d], k) => (
        <Reveal className="card" key={t}><div className="th"><Img n={`s${k + 1}.png`} /></div><h3>{t}</h3><p>{d}</p><a className="more" href="#">Read More</a></Reveal>
      ))}</div>
      <Reveal className="cta"><div><h3>Building a dream shouldn’t be a nightmare!</h3><p>We have transforming the ideas and visions into winning projects.</p></div><a className="btn" href="#quote">Free Consultation</a></Reveal>
    </div></section>

    <section className="sec" id="faq"><div className="w two proc">
      <Reveal className="wm" data-w="HOW?"><span className="eyebrow">Process of construction</span><h2>How it works<br />in construction?</h2>
        <p>Slogan creation for your construction company is crucial for the overall branding.</p>
        <Img n="process.jpg" className="pimg" /></Reveal>
      <Reveal className="pnl">{STEPS.map(([n, t, d]) => <div className="st" key={n}><div className="nb">{n}</div><div><h3>{t}</h3><p>{d}</p></div></div>)}</Reveal>
    </div></section>

    <section className="sec" id="projects" style={{ paddingBottom: 0 }}>
      <Reveal className="w c wm" data-w="SERVICES" style={{ marginBottom: 40 }}><span className="eyebrow">We are professional</span><h2>Our latest projects</h2><p>We are professional</p></Reveal>
      <div className="proj">{PROJECTS.map(([t, c], k) => <a className="p" href="#" key={t} style={bg(PIMG[k])}><div><b>{t}</b><small>{c}</small></div></a>)}</div>
    </section>

    <section className="sec qt" id="quote"><div className="w two">
      <Reveal className="qleft wm" data-w="QUOTE"><span className="eyebrow">Quote</span><h2>Interested in construction?<br />Request a free and fair quote</h2>
        <p>Slogan creation for your construction company is crucial for the overall branding. And branding in today’s world can’t be ignored, We hope that the above Construction Slogans. Don’t forget to share it on social media.</p></Reveal>
      <Reveal as="form" className="qform" onSubmit={submit} noValidate><div className="form">
        <input name="n" placeholder="Your Name (required)" required /><input name="e" type="email" placeholder="Your Email (required)" required />
        <input className="f" placeholder="Subject" />
        <select className="f">{['Business', 'Personal', 'Support', 'Others'].map(x => <option key={x}>{x} Departemant</option>)}</select>
        <textarea className="f" rows="4" placeholder="Your Message" />
        <div className="f"><button className="btn" type="submit">Send</button>
          {err && <div style={{ color: '#c0392b', marginTop: 10 }}>{err}</div>}
          {sent && <div className="ok" style={{ display: 'block' }}>Thank you! We will get back to you soon.</div>}</div>
      </div></Reveal>
    </div></section>

    <section className="sec"><Reveal className="w c wm" data-w="TESTIMONIALS"><span className="eyebrow">See what says our happy clients</span><h2>Our happy customers</h2><p>See what says our happy clients</p>
      <div className="tst">{TESTIMONIALS.map(([a, q, n], k) => (
        <div key={n} className={`t ${k === tst ? 'on' : ''}`}><div className="av"><Img n={`team${k + 1}.jpg`} /></div><div className="qc"><p>“{q}”</p><i>– {n}</i><span className="qm">”</span></div></div>
      ))}</div>
      <Dots n={3} i={tst} set={setTst} style={{ position: 'static', marginTop: 20 }} />
      <div className="logos yband">{[1, 2, 3, 4, 5].map(x => <span className="lg" data-tip="Construction Company" key={x}><Img n={`logo-${x}.png`} /></span>)}</div>
    </Reveal></section>

    <footer><div className="w">
      <a className="logo" href="#"><Img n="footer-logo-construction.png" alt="XTRA Construction" className="logoimg" /></a>
      <p>A company is any entity that engages in business. Companies can be structured in different ways. For example, your company can be a sole proprietorship, a partnership, or a corporation.</p>
      <div className="soc"><Social yt /></div>
      <div className="fl"><span>© 2026 XTRA, Powered by WordPress</span><a href="#quote">Contact Us</a><a href="#about">About</a><a href="#">Privacy Policy</a></div>
    </div></footer>
    {toast && <div className="toast" role="status"><b>{toast}</b> page is outside this home-page task.</div>}
    {top && <button className="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}
    <a className="callbar" href="tel:+18181123445345"><i><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"/></svg></i><span>+1 (818) 112344534</span></a>
    {cookie && <div className="ck">This website uses cookies to improve user experience. <button onClick={accept}>Accept and close</button></div>}
  </>)
}