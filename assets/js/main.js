/* =============================================
   FITTRIX GLOBAL — Thai Version
   assets/js/main.js
   ============================================= */

// ---- Form endpoint ----
const FORM_ENDPOINT = 'send.php';

// ---- Register Modal ----
(function() {
  const overlay   = document.getElementById('registerModal');
  const closeBtn  = document.getElementById('modalClose');
  const form      = document.getElementById('registerForm');
  const submitBtn = document.getElementById('modalSubmit');
  const successEl = document.getElementById('modalSuccess');
  const submitText    = submitBtn?.querySelector('.modal__submit-text');
  const submitLoading = submitBtn?.querySelector('.modal__submit-loading');

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open on all CTA buttons
  document.querySelectorAll('.btn-nav-cta, .btn-drawer-cta, .btn-primary, .cta-main__btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  closeBtn?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  form?.addEventListener('submit', async e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitText.hidden = true;
    submitLoading.hidden = false;

    try {
      const data = new FormData(form);
      const res  = await fetch(FORM_ENDPOINT, { method: 'POST', body: data });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.style.display = 'none';
      successEl.classList.add('show');
      setTimeout(closeModal, 3000);
    } catch (err) {
      alert(err.message || 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
      submitBtn.disabled = false;
      submitText.hidden = false;
      submitLoading.hidden = true;
    }
  });
})();

// =============================================
// i18n — Bilingual TH / EN
// =============================================

const translations = {
  th: {
    'nav.home':     'หน้าแรก',
    'nav.why':      'OUTBODY คืออะไร',
    'nav.analysis': 'การวิเคราะห์',
    'nav.report':   'รายงาน',
    'nav.cta':      'ลงทะเบียนทดลอง',
    'btn.book':     'ลงทะเบียนทดลอง',
    'btn.download': 'ดาวน์โหลดตัวอย่างรายงาน',
    'btn.contact':  'ติดต่อเรา',
    'hero.title':    'ร่างกายที่ดี คือจุดเริ่มต้นของการเรียนรู้',
    'hero.subtitle': 'วิเคราะห์สรีระและพัฒนาการทางกายของเด็ก<br />เพื่อส่งเสริมสมาธิ การเรียนรู้ และการเติบโตอย่างเต็มศักยภาพ',
    'hero.tagline':  'ให้ OUTBODY ช่วยคุณเริ่มต้น<strong>การเปลี่ยนแปลงที่ดีขึ้น</strong>',
    'research.title':    'การเคลื่อนไหวของร่างกาย<br/><span class="hl">ส่งผลต่อการเรียนรู้โดยตรง</span>',
    'research.subtitle': 'งานวิจัยระดับโลกบอกอะไร',
    'research.who':      'เด็กควรมีกิจกรรมทางกายอย่างน้อย <strong>60 นาทีต่อวัน</strong> เพื่อพัฒนาการที่สมบูรณ์',
    'research.oecd':     'เด็กที่มีกิจกรรมทางกายสม่ำเสมอ มีแนวโน้ม<strong>ผลการเรียนที่ดีกว่า</strong>',
    'research.harvard':  'การออกกำลังกายช่วยกระตุ้น<strong>การทำงานของสมอง ความจำ และสมาธิ</strong>',
    'research.readmore': 'อ่านงานวิจัย →',
    'analysis.label':   'การวิเคราะห์',
    'analysis.title':   'OUTBODY <span class="hl">วิเคราะห์อะไรบ้าง</span>',
    'analysis.posture':     'ประเมินความสมดุลของร่างกาย และแนะนำเกี่ยวกับท่าทางที่ถูกต้อง',
    'analysis.flexibility': 'ประเมินการเคลื่อนไหวและความมั่นคงของข้อต่อต่าง ๆ',
    'analysis.strength':    'ประเมินความแข็งแรง ความสมดุล และการเคลื่อนไหว',
    'analysis.agility':     'ประเมินผลการทดสอบความคล่องตัว',
    'analysis.balance':     'ประเมินด้านความสมดุลและความมั่นคงของร่างกาย',
    'analysis.body':        'ประเมินร่างกายร่วมกับค่า InBody',
    'cta.title': 'เริ่มต้นการเปลี่ยนแปลงที่ดีขึ้น<br /><span class="hl">วันนี้</span>',
    'cta.desc':  'ทีมผู้เชี่ยวชาญของเราพร้อมดูแลคุณตั้งแต่ต้นจนจบ',
    'kidsprob.label':          'สถานการณ์เด็กไทย',
    'kidsprob.title':          'เด็กไทยกำลังเผชิญ<br/><span class="hl">ปัญหาอะไร?</span>',
    'kidsprob.problems.label': '4 ปัญหาหลักที่พบในเด็กไทย',
    'kidsprob.p1': 'นั่งเรียนเป็นเวลานาน',
    'kidsprob.p2': 'ใช้หน้าจอมากขึ้น',
    'kidsprob.p3': 'ขาดการเคลื่อนไหว',
    'kidsprob.p4': 'พักผ่อนไม่เพียงพอ',
    'kidsprob.effects.label':  'ผลที่เกิดขึ้น',
    'kidsprob.e1': 'หลังค่อม ไหล่ห่อ',
    'kidsprob.e2': 'สมาธิลดลง อ่อนล้าง่าย',
    'kidsprob.e3': 'ขาดความมั่นใจ',
    'want.label': 'ความต้องการของลูกค้า',
    'want.title': 'ลูกค้าต้องการ<br /><span class="hl">บริการเฉพาะบุคคล</span>',
    'want.desc':  'ข้อมูลร่างกายที่จำเป็นจะแตกต่างกันไปตามเป้าหมายและความสนใจของแต่ละคน',
    'edu.title':      'จากประเทศที่ให้ความสำคัญกับการศึกษา<span class="hl">สู่การดูแลพัฒนาการร่างกายควบคู่กัน</span>',
    'edu.desc':       'โรงเรียนและศูนย์พัฒนาเด็กในเกาหลีได้เริ่มใช้ข้อมูลด้านสรีระ ความสมดุลร่างกาย และการเคลื่อนไหว เพื่อช่วยสนับสนุนการเรียนรู้ของเด็กอย่างเป็นระบบ',
    'experts.title':  'พัฒนาโดยผู้เชี่ยวชาญด้านสุขภาพ<br/><span class="hl">เทคโนโลยี และการวิเคราะห์การเคลื่อนไหว</span>',
    'experts.subtitle': 'ประสบการณ์รวม 5 ปี พัฒนาและใช้งานในหลายประเทศ งานวิจัยและฐานข้อมูลจำนวนมาก',
    'experts.c1':     'ทีมผู้เชี่ยวชาญด้านสุขภาพและกายภาพบำบัด ออกแบบโปรแกรมที่ปลอดภัยและมีประสิทธิภาพสำหรับเด็ก',
    'experts.c2':     'ระบบ AI วิเคราะห์ข้อมูลร่างกายแบบ Real-time เพื่อให้ผลลัพธ์ที่แม่นยำและปรับแต่งได้',
    'experts.c3':     'ศาสตร์ด้านการเคลื่อนไหวร่างกายที่ช่วยวิเคราะห์ท่าทาง ความสมดุล และพัฒนาการกล้ามเนื้อ',
    'experts.c4':     'วิเคราะห์ข้อมูลเชิงลึกเพื่อติดตามพัฒนาการและสร้างรายงานที่เข้าใจง่ายสำหรับผู้ปกครองและครู',
    'analysis.title': 'วิเคราะห์อะไรได้บ้าง',
    'analysis.posture':     'การจัดแนวร่างกาย — ประเมินความสมดุลและแนะนำท่าทางที่ถูกต้อง',
    'analysis.flexibility': 'ความยืดหยุ่น — ประเมินการเคลื่อนไหวและความมั่นคงของข้อต่อ',
    'analysis.strength':    'ความแข็งแรง — ประเมินกำลังกล้ามเนื้อและการเคลื่อนไหว',
    'analysis.agility':     'ความคล่องตัว — ประเมินความสามารถในการเคลื่อนไหวเร็ว',
    'analysis.balance':     'การทรงตัว — ประเมินความมั่นคงและสมดุลของร่างกาย',
    'analysis.body':        'องค์ประกอบร่างกาย — ประเมินสัดส่วนร่างกายร่วมกับค่า InBody',
    'report.eyebrow': 'รายงานผล',
    'report.title':   'รายงานที่<br/><strong>เข้าใจได้ทันที</strong>',
    'report.c1label': 'วิเคราะห์', 'report.c1desc': 'พบจุดที่ควรพัฒนา',
    'report.c2label': 'เปรียบเทียบ', 'report.c2desc': 'เทียบตามช่วงวัย',
    'report.c3label': 'แนะนำ', 'report.c3desc': 'แนวทางพัฒนาเฉพาะบุคคล',
    'report.btn':     'ดาวน์โหลดตัวอย่างรายงาน',
    'cta.eyebrow':   'ทดลองวิเคราะห์ร่างกายฟรี',
    'cta.title':     'ค้นพบศักยภาพที่ซ่อนอยู่<br/><span class="hl">ได้แล้ววันนี้</span>',
    'cta.btn':       'ลงทะเบียนทดลอง',
    'modal.eyebrow': 'ทดลองฟรี',
    'modal.title':   'ลงทะเบียนทดลอง',
    'modal.subtitle':'กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับภายใน 1 วันทำการ',
    'modal.submit':  'ส่งข้อมูล',
    'modal.success_title': 'ส่งข้อมูลสำเร็จ!',
    'modal.success_desc':  'ทีมงานจะติดต่อกลับภายใน 1 วันทำการ',
    'footer.tagline': 'ยกระดับมาตรฐานการวิเคราะห์ร่างกายด้วย AI และโซลูชันการบริหารลูกค้าสำหรับมืออาชีพด้านสุขภาพและฟิตเนส',
    'stats.units':   'เครื่องติดตั้งในเกาหลี',
    'stats.items':   'รายการวิเคราะห์',
    'stats.content': 'คอนเทนต์ออกกำลังกาย',
    'stats.rating':  'คะแนนความพึงพอใจ',
    'flow.label':       'AI TECHNOLOGY',
    'flow.title':       'ทุกฟีเจอร์<span class="hl">ในเครื่องเดียว</span>',
    'flow.desc':        'OUTBODY วิเคราะห์ แนะนำ และติดตามผล ครบในเครื่องเดียว ใช้คนเดียวได้ ไม่ต้องมีพนักงาน',
    'flow.step1.title': 'วัดและวิเคราะห์',
    'flow.step1.sub':   '70+ รายการ ใน ~2 นาที',
    'flow.step1.t1':    'ข้อต่อและกระดูก',
    'flow.step1.t2':    'กล้ามเนื้อและการเคลื่อนไหว',
    'flow.step1.t3':    'ไขมันและโรคอ้วน',
    'flow.step1.t4':    'จุดเสี่ยงบาดเจ็บ',
    'flow.step2.title': 'แนะนำเฉพาะบุคคล',
    'flow.step2.sub':   '300+ คอนเทนต์ออกกำลังกาย',
    'flow.step2.t1':    'ท่าออกกำลังกายที่เหมาะสม',
    'flow.step2.t2':    'พฤติกรรมสุขภาพที่ควรปรับ',
    'flow.step3.title': 'ติดตามผล',
    'flow.step3.sub':   'Monitoring',
    'flow.step3.t1':    'ผลลัพธ์ Before & After',
    'flow.step3.t2':    'การเปลี่ยนแปลงพฤติกรรม',
    'targets.label':  'เหมาะกับใคร',
    'targets.title':  'เหมาะกับ<span class="hl">ทุกธุรกิจสุขภาพ</span>',
    'target.1': 'ฟิตเนสคลับ',
    'target.2': 'สถานพยาบาล',
    'target.3': 'ศูนย์ดูแลผู้สูงอายุ',
    'target.4': 'สวัสดิการองค์กร',
    'target.5': 'สระว่ายน้ำ / Sports Complex',
    'target.6': 'สนามกอล์ฟ',
    'target.7': 'บริษัทจัดอีเวนต์',
    'spec.label':    'ข้อมูลจำเพาะ',
    'spec.size':     'ขนาด',
    'spec.weight':   'น้ำหนัก',
    'spec.display':  'จอแสดงผล',
    'spec.sensor':   'เซนเซอร์',
    'spec.sound':    'ลำโพง',
    'spec.power':    'ไฟฟ้า',
    'spec.color':    'สี',
    'spec.net':      'อินเตอร์เน็ต',
    'spec.netval':   'Ethernet Port (แนะนำ)',
    'spec.space':    'พื้นที่ติดตั้ง',
    'spec.spaceval': 'หน้าเครื่อง 2.2m + รอบข้าง 1×1m',
    'spec.origin':   'ผลิตโดย <strong>OUTBODY Inc.</strong> เกาหลีใต้<br />แยกตัวออกมาจาก <strong>Hyundai</strong>',
    'spec.m1': 'ท่าทาง / รูปร่าง',
    'spec.m2': 'สัดส่วน / ขนาด',
    'spec.m3': 'กล้ามเนื้อ / ข้อต่อ',
    'spec.m4': 'สมรรถภาพ',
  },
  en: {
    'nav.home':     'Home',
    'nav.why':      'What is OUTBODY',
    'nav.analysis': 'Analysis',
    'nav.report':   'Report',
    'nav.cta':      'Book a Trial',
    'btn.book':     'Try Body Analysis',
    'btn.download': 'Download Sample Report',
    'btn.contact':  'Contact Us',
    'hero.title':    'A Healthy Body is the Foundation of Learning',
    'hero.subtitle': 'Analyze children\'s physique and physical development<br />to enhance focus, learning, and growth to their full potential.',
    'hero.tagline':  'Let OUTBODY help you start your <strong>better transformation</strong>',
    'research.title':    'Body Movement<br/><span class="hl">Directly Impacts Learning</span>',
    'research.subtitle': 'What does global research say?',
    'research.who':      'Children should have at least <strong>60 minutes of physical activity per day</strong> for complete development.',
    'research.oecd':     'Children who are regularly physically active tend to have <strong>better academic outcomes</strong>.',
    'research.harvard':  'Exercise helps stimulate <strong>brain function, memory, and concentration</strong>.',
    'research.readmore': 'Read Research →',
    'analysis.label':   'Analysis',
    'analysis.title':   'What Does <span class="hl">OUTBODY Analyze?</span>',
    'analysis.posture':     'Assesses body balance and provides recommendations on correct posture.',
    'analysis.flexibility': 'Assesses movement and stability of various joints.',
    'analysis.strength':    'Assesses strength, balance, and movement capability.',
    'analysis.agility':     'Evaluates agility and quickness test results.',
    'analysis.balance':     'Assesses overall body balance and stability.',
    'analysis.body':        'Evaluates body composition in conjunction with InBody values.',
    'cta.title': 'Start Your Better Transformation<br /><span class="hl">Today</span>',
    'cta.desc':  'Our expert team is ready to guide you every step of the way.',
    'kidsprob.label':          'Thai Children Situation',
    'kidsprob.title':          'What Problems Are<br/><span class="hl">Thai Children Facing?</span>',
    'kidsprob.problems.label': '4 Key Problems Found in Thai Children',
    'kidsprob.p1': 'Sitting in class for long hours',
    'kidsprob.p2': 'Increased screen time',
    'kidsprob.p3': 'Lack of physical movement',
    'kidsprob.p4': 'Insufficient rest',
    'kidsprob.effects.label':  'Resulting Effects',
    'kidsprob.e1': 'Hunched back, rounded shoulders',
    'kidsprob.e2': 'Reduced focus, easily fatigued',
    'kidsprob.e3': 'Lack of self-confidence',
    'want.label': 'Customers Want',
    'want.title': 'Customers Want<br /><span class="hl">Personalized Services</span>',
    'want.desc':  'Required Body Data Varies By Goals And Interests.',
    'edu.title':      'From a Country That Values Education<span class="hl"> — to Developing Physical Health Alongside Learning</span>',
    'edu.desc':       'Schools and child development centers in Korea have begun using data on physique, body balance, and movement to systematically support children\'s learning.',
    'experts.title':  'Developed by Experts in Health,<br/><span class="hl">Technology & Movement Analysis</span>',
    'experts.subtitle': '5 years of combined experience, deployed across multiple countries, backed by extensive research and data.',
    'experts.c1':     'A team of health and physiotherapy experts who design safe and effective programs for children.',
    'experts.c2':     'An AI system that analyzes body data in real-time to deliver accurate and personalized results.',
    'experts.c3':     'The science of body movement that helps analyze posture, balance, and muscle development.',
    'experts.c4':     'Deep data analysis to track development and generate easy-to-understand reports for parents and teachers.',
    'analysis.title': 'What Can OUTBODY Analyze?',
    'analysis.posture':     'Body Alignment — Assess balance and recommend correct posture.',
    'analysis.flexibility': 'Flexibility — Evaluate range of motion and joint stability.',
    'analysis.strength':    'Strength — Assess muscle power and movement capability.',
    'analysis.agility':     'Agility — Evaluate speed and quickness of movement.',
    'analysis.balance':     'Balance — Assess stability and body equilibrium.',
    'analysis.body':        'Body Composition — Evaluate body proportions combined with InBody values.',
    'report.eyebrow': 'Results Report',
    'report.title':   'Reports That Are<br/><strong>Instantly Understandable</strong>',
    'report.c1label': 'Analyze', 'report.c1desc': 'Identify areas for improvement',
    'report.c2label': 'Compare', 'report.c2desc': 'Benchmarked by age group',
    'report.c3label': 'Recommend', 'report.c3desc': 'Personalized development guidance',
    'report.btn':     'Download Sample Report',
    'cta.eyebrow':   'Free Body Analysis Trial',
    'cta.title':     'Discover Your Hidden Potential<br/><span class="hl">Starting Today</span>',
    'cta.btn':       'Register for Trial',
    'modal.eyebrow': 'Free Trial',
    'modal.title':   'Register for Trial',
    'modal.subtitle':'Fill in your details below. Our team will contact you within 1 business day.',
    'modal.submit':  'Submit',
    'modal.success_title': 'Submitted Successfully!',
    'modal.success_desc':  'Our team will contact you within 1 business day.',
    'footer.tagline': 'Elevating the standard of AI body analysis and customer management solutions for health and fitness professionals.',
    'stats.units':   'Units installed in Korea',
    'stats.items':   'Analysis items',
    'stats.content': 'Exercise content',
    'stats.rating':  'Satisfaction score',
    'flow.label':       'AI TECHNOLOGY',
    'flow.title':       'All Features <span class="hl">in One Device</span>',
    'flow.desc':        'OUTBODY analyzes, recommends, and monitors — all in one device. Self-service, no staff required.',
    'flow.step1.title': 'Measure & Analyze',
    'flow.step1.sub':   '70+ items in ~2 minutes',
    'flow.step1.t1':    'Joints & Bones',
    'flow.step1.t2':    'Muscles & Movement',
    'flow.step1.t3':    'Fat & Obesity',
    'flow.step1.t4':    'Injury Risk Areas',
    'flow.step2.title': 'Personalized Recommendations',
    'flow.step2.sub':   '300+ exercise content',
    'flow.step2.t1':    'Suitable exercise routines',
    'flow.step2.t2':    'Lifestyle habits to improve',
    'flow.step3.title': 'Track Progress',
    'flow.step3.sub':   'Monitoring',
    'flow.step3.t1':    'Before & After results',
    'flow.step3.t2':    'Behavioral changes',
    'targets.label':  'Who Is It For',
    'targets.title':  'Ideal for <span class="hl">Any Health Business</span>',
    'target.1': 'Fitness Club',
    'target.2': 'Medical Facility',
    'target.3': 'Elderly Care Center',
    'target.4': 'Corporate Wellness',
    'target.5': 'Swimming / Sports Complex',
    'target.6': 'Golf Facility',
    'target.7': 'Event Company',
    'spec.label':    'Specifications',
    'spec.size':     'Size',
    'spec.weight':   'Weight',
    'spec.display':  'Display',
    'spec.sensor':   'Sensor',
    'spec.sound':    'Speaker',
    'spec.power':    'Power',
    'spec.color':    'Color',
    'spec.net':      'Internet',
    'spec.netval':   'Ethernet Port (recommended)',
    'spec.space':    'Installation Space',
    'spec.spaceval': 'Front clearance 2.2m + Side clearance 1×1m',
    'spec.origin':   'Manufactured by <strong>OUTBODY Inc.</strong> South Korea<br />Spun off from <strong>Hyundai</strong>',
    'spec.m1': 'Posture / Body Type',
    'spec.m2': 'Proportions / Size',
    'spec.m3': 'Muscle / Joint',
    'spec.m4': 'Physical Fitness',
  }
};

let currentLang = localStorage.getItem('fittrix_lang') || 'th';

function applyLang(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // toggle button label
  const btn = document.getElementById('langToggle');
  if (btn) {
    const img = btn.querySelector('.lang-toggle__flag');
    if (img) {
      img.src = lang === 'th' ? 'https://flagcdn.com/gb.svg' : 'https://flagcdn.com/th.svg';
      img.alt = lang === 'th' ? 'EN' : 'TH';
    }
  }
  // html lang attribute
  document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  currentLang = lang;
  localStorage.setItem('fittrix_lang', lang);
}

// init on load
applyLang(currentLang);

// toggle handler
document.getElementById('langToggle')?.addEventListener('click', () => {
  applyLang(currentLang === 'th' ? 'en' : 'th');
});


// ---- Lucide icons ----
if (typeof lucide !== 'undefined') lucide.createIcons();

// ---- Kids Problem Slideshow ----
(function() {
  const slides = document.querySelectorAll('.kidsprob__slide');
  const dots   = document.querySelectorAll('.kidsprob__dot');
  if (!slides.length) return;

  let current = 0;
  slides[0].classList.add('active');
  if (dots.length) dots[0].classList.add('active');

  function goTo(next) {
    const prev = current;
    current = next;

    // Exit current slide upward
    slides[prev].classList.remove('active');
    slides[prev].classList.add('exit');
    if (dots.length) dots[prev].classList.remove('active');

    // After exit transition, remove exit and reset to bottom (ready for re-entry)
    setTimeout(() => {
      slides[prev].classList.remove('exit');
      // force reflow so transition doesn't fire when resetting position
      slides[prev].style.transition = 'none';
      slides[prev].style.transform = 'translateY(100%)';
      slides[prev].offsetHeight; // reflow
      slides[prev].style.transition = '';
      slides[prev].style.transform = '';
    }, 650);

    // Bring in next slide from bottom
    slides[current].classList.add('active');
    if (dots.length) dots[current].classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  setInterval(() => goTo((current + 1) % slides.length), 3000);
})();

// ---- Navbar scroll effect + Back to top ----
const navbar = document.querySelector('.navbar');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 400);
});
if (backToTop) backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ---- Hamburger menu ----
const hamburger = document.querySelector('.navbar__hamburger');
const drawer    = document.querySelector('.navbar__drawer');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  drawer.classList.toggle('open');
});

drawer?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
  });
});

// ---- Scroll Reveal ----
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ---- Client tabs ----
const tabBtns   = document.querySelectorAll('.tab-btn');
const logoGrids = document.querySelectorAll('.clients__logos');

const clientData = {
  'องค์กร':         ['HYUNDAI','KIA','SAMSUNG','LG','SK GROUP','LOTTE','POSCO','HANWHA','GS GROUP','DOOSAN'],
  'โรงพยาบาล':      ['ASAN MED.','SEVERANCE','SAMSUNG MED.','SNUH','HALLYM','ANAM HOSP.','BUNDANG MED.','KOREA UNIV.','CHONNAM','EWHA HOSP.'],
  'ฟิตเนส':         ['ANYTIME FIT','SNAP FIT','PLANET FIT','BODY FIT','LIFE FIT','GX CENTER','ATHLETIC','CROSSFIT','SPORT HUB','POWER GYM'],
  'หน่วยงานรัฐ':    ['KOASAS','KSC','KIFA','SPORTS KOREA','GOV SPORT','NAT DEFENSE','POLICE ACAD.','FIRE DEPT','ARMY SPORT','NAVY FIT'],
  'มหาวิทยาลัย':    ['SNU','YONSEI','KOREA UNIV','SUNGKYUNKWAN','HANYANG','SOGANG','EWHA WOMANS','DONGUK','AJOU UNIV','INHA UNIV'],
};

function renderLogos(category) {
  const grid = document.querySelector('.clients__logos');
  if (!grid) return;
  const logos = clientData[category] || [];
  grid.innerHTML = logos.map(name => `<div class="client-logo">${name}</div>`).join('');
}

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderLogos(btn.textContent.trim());
  });
});

// init first tab
if (tabBtns.length) renderLogos(tabBtns[0].textContent.trim());

// ---- Age bar fill animation ----
const ageBars = document.querySelectorAll('.age-bar__fill[data-width]');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const w = entry.target.dataset.width;
      entry.target.style.width = w;
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

ageBars.forEach(bar => {
  bar.style.width = '0%';
  barObserver.observe(bar);
});

// ---- Report section slider (3-up, slide 1 at a time) ----
(function() {
  const track = document.querySelector('.report__track');
  const dots  = document.querySelectorAll('.report__dot');
  const prev  = document.querySelector('.report__prev');
  const next  = document.querySelector('.report__next');
  if (!track) return;

  const total  = track.children.length; // 8
  const visible = 3;
  const maxPos = total - visible; // 5
  let current  = 0;

  function goTo(n) {
    current = Math.max(0, Math.min(n, maxPos));
    const slideW = track.children[0].offsetWidth;
    track.style.transform = `translateX(-${current * (slideW + 12)}px)`;
    dots.forEach((d, i) => d.classList.toggle('report__dot--active', i === current));
  }

  goTo(0);
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  if (prev) prev.addEventListener('click', () => goTo(current - 1));
  if (next) next.addEventListener('click', () => goTo(current + 1));
  setInterval(() => goTo(current < maxPos ? current + 1 : 0), 4000);
})();
