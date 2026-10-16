// Downloads the reference-site images into public/images (run once: npm run images)
import { mkdir, writeFile } from 'node:fs/promises'
const BASE = 'https://xtratheme.com/elementor/construction-2/wp-content/uploads/sites/41/'
const FILES = [
  '2020/01/logo-construction.png','2020/01/footer-logo-construction.png','2020/01/man-model.png','2020/01/slide-2.jpg',
  '2020/01/safety-icon.png','2020/01/service-1.jpg','2020/01/service-2.jpg','2020/01/service-3.jpg',
  '2020/01/about-company.jpg','2020/01/s1.png','2020/01/s2.png','2020/01/s3.png','2020/01/process.jpg','2020/01/row-bg.jpg',
  '2020/01/personal_gift-1-600x600.jpg','2020/01/tick_tock-1-1-600x600.jpg','2020/01/portfolio7-1-600x600.jpg','2020/01/portfolio10-1-600x600.jpg',
  '2020/01/portfolio3-1-600x600.jpg','2020/01/portfolio6-1-600x600.jpg','2020/01/portfolio9-1-600x600.jpg','2020/01/portfolio2-1-600x600.jpg',
  '2020/01/team1.jpg','2020/01/team2.jpg','2020/01/team3.jpg',
  '2021/02/logo-1.png','2021/02/logo-2.png','2021/02/logo-3.png','2021/02/logo-4.png','2021/02/logo-5.png',
]
await mkdir('public/images', { recursive: true })
for (const f of FILES) {
  const name = f.split('/').pop()
  try {
    const r = await fetch(BASE + f)
    if (!r.ok) throw new Error(r.status)
    await writeFile('public/images/' + name, Buffer.from(await r.arrayBuffer()))
    console.log('ok  ', name)
  } catch (e) { console.log('FAIL', name, e.message) }
}
