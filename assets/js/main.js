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
  document.querySelectorAll('.btn-nav-cta, .btn-drawer-cta, .btn-primary, .cta-main__btn, .footer__contact-btn').forEach(btn => {
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
    'nav.home':      'หน้าแรก',
    'nav.why':       'OUTBODY คืออะไร',
    'nav.solutions': 'โซลูชัน',
    'nav.analysis':  'การวิเคราะห์',
    'nav.report':    'รายงาน',
    'nav.cta':       'ลงทะเบียนทดลอง',
    'btn.book':     'ลงทะเบียนทดลอง',
    'btn.download': 'ดาวน์โหลดตัวอย่างรายงาน',
    'btn.contact':  'ติดต่อเรา',
    'hero.title':    'การเข้าใจร่างกาย คือจุดเริ่มต้นของทุกเป้าหมาย',
    'hero.subtitle': 'เทคโนโลยี AI วิเคราะห์ร่างกาย เพื่อการฟื้นฟู พัฒนาสมรรถภาพ<br />การเติบโตและสุขภาพในองค์กร',
    'hero.tagline':  'ให้ OUTBODY ช่วยคุณเริ่มต้น<strong>การเปลี่ยนแปลงที่ดีขึ้น</strong>',
    'pillars.label': 'โซลูชันของเรา',
    'pillars.title': 'หนึ่งเครื่อง<br/><span class="hl">เหมาะกับทุกเป้าหมาย</span>',
    'pillars.rehab.name':     'ฟื้นฟูสุขภาวะ',
    'pillars.rehab.desc':     'ติดตามความคืบหน้าการฟื้นฟูและความสมดุลของร่างกายอย่างเป็นรูปธรรม ช่วยนักกายภาพบำบัดวางแผนการดูแลได้แม่นยำขึ้น',
    'pillars.gym.name':       'ฟิตเนสและกีฬา',
    'pillars.gym.desc':       'ข้อมูลความแข็งแรง ความคล่องตัว และการทรงตัว ให้เทรนเนอร์ออกแบบโปรแกรมเฉพาะบุคคลและลดความเสี่ยงบาดเจ็บ',
    'pillars.kids.name':      'เด็กและการศึกษา',
    'pillars.kids.desc':      'ติดตามพัฒนาการทางกายของเด็ก เพื่อส่งเสริมสมาธิ การเรียนรู้ และการเติบโตอย่างเต็มศักยภาพ',
    'pillars.corporate.name': 'สุขภาพองค์กร',
    'pillars.corporate.desc': 'ประเมินสุขภาพพนักงานได้รวดเร็วและเป็นระบบ ต่อยอดเป็นสวัสดิการและโปรแกรมสุขภาพในองค์กร',
    'research.title':    'การเคลื่อนไหวของร่างกาย<br/><span class="hl">ส่งผลต่อศักยภาพในทุกช่วงวัย</span>',
    'research.subtitle': 'งานวิจัยระดับโลกบอกอะไร',
    'research.who':      'กิจกรรมทางกายอย่างสม่ำเสมอคือรากฐานของสุขภาพที่ดี <strong>ในทุกช่วงวัย</strong> ตั้งแต่เด็กจนถึงวัยทำงาน',
    'research.oecd':     'ผู้ที่มีกิจกรรมทางกายสม่ำเสมอ มีแนวโน้มที่จะมี<strong>สมาธิ ประสิทธิภาพการทำงาน และคุณภาพชีวิตที่ดีกว่า</strong>',
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
    'want.label': 'ความต้องการของลูกค้า',
    'want.title': 'ลูกค้าต้องการ<br /><span class="hl">บริการเฉพาะบุคคล</span>',
    'want.desc':  'ข้อมูลร่างกายที่จำเป็นจะแตกต่างกันไปตามเป้าหมายและความสนใจของแต่ละคน',
    'edu.title':  'จากการประเมินร่างกาย<span class="hl">สู่ผลลัพธ์ที่วัดผลได้จริง</span>',
    'edu.desc':   'ไม่ว่าจะเป็นคลินิก ฟิตเนส โรงเรียน หรือองค์กร OUTBODY ใช้กระบวนการเดียวกันในการแปลงข้อมูลร่างกายให้เป็นแผนพัฒนาเฉพาะบุคคลที่ติดตามผลได้อย่างเป็นระบบ',
    'edu.step1':  'ประเมินร่างกาย',
    'edu.step2':  'วิเคราะห์ด้วย AI',
    'edu.step3':  'แผนพัฒนาเฉพาะบุคคล',
    'edu.step4':  'ผลลัพธ์ที่ดีขึ้น',
    'experts.title':  'พัฒนาโดยผู้เชี่ยวชาญด้านสุขภาพ<br/><span class="hl">เทคโนโลยี และการวิเคราะห์การเคลื่อนไหว</span>',
    'experts.subtitle': 'ด้วยประสบการณ์รวม 5 ปี พัฒนาและใช้งานจริงในหลายประเทศ พร้อมงานวิจัยและฐานข้อมูลจำนวนมาก',
    'experts.c1':     'ทีมผู้เชี่ยวชาญด้านสุขภาพและกายภาพบำบัด ออกแบบโปรแกรมที่ปลอดภัยและมีประสิทธิภาพสำหรับผู้ใช้งานทุกกลุ่ม',
    'experts.c2':     'ระบบ AI วิเคราะห์ข้อมูลร่างกายแบบ Real-time เพื่อให้ผลลัพธ์ที่แม่นยำและปรับแต่งได้',
    'experts.c3':     'ศาสตร์ด้านการเคลื่อนไหวร่างกายที่ช่วยวิเคราะห์ท่าทาง ความสมดุล และพัฒนาการกล้ามเนื้อ',
    'experts.c4':     'วิเคราะห์ข้อมูลเชิงลึกเพื่อติดตามพัฒนาการและสร้างรายงานที่เข้าใจง่าย สำหรับทั้งผู้ใช้งานและผู้ดูแล',
    'leadership.label': 'ทีมผู้บริหาร',
    'leadership.title': 'ผู้บริหาร<br/><span class="hl">OUTBODY Thailand</span>',
    'leaders.ceo_title': 'CEO, OUTBODY Thailand',
    'leaders.md_title':  'Managing Director, OUTBODY Thailand',
    'leaders.comms_title': 'Head of Communications, OUTBODY Thailand',
    'founder.note':      'OUTBODY ก่อตั้งโดย Rick Nahm, Ph.D ผู้เชี่ยวชาญด้านการฝึกร่างกายกว่า 16 ปี ภายใต้การสนับสนุนของ Hyundai Corporation',
    'age.label':      'OUTBODY AGE',
    'age.title':      'ร่างกายคุณ<br/><span class="hl">อายุเท่าไหร่กันแน่?</span>',
    'age.desc':       'OUTBODY AGE รวมผลตรวจทั้ง 6 ด้าน — ท่าทาง ความยืดหยุ่น ความแข็งแรง ความคล่องตัว การทรงตัว และองค์ประกอบร่างกาย — มาคำนวณเป็นตัวเลขเดียวที่เข้าใจง่าย เทียบกับอายุจริง เพื่อให้เห็นภาพรวมสุขภาพได้ในทันที',
    'age.note_label': 'หมายเหตุ:',
    'age.note_body':  'สำหรับผู้ใช้งานอายุต่ำกว่า 18 ปี ระบบจะแสดงผลเป็น "คะแนนพัฒนาการ" แทนอายุร่างกาย เนื่องจากร่างกายเด็กยังอยู่ในช่วงเจริญเติบโต การเทียบกับอายุจริงจึงไม่สะท้อนผลลัพธ์ที่แท้จริง',
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
    'modal.interest_label':       'ความสนใจ',
    'modal.interest.placeholder': 'เลือกด้านที่สนใจ',
    'modal.interest.rehab':       'Wellness / Rehab',
    'modal.interest.gym':         'ฟิตเนสและกีฬา',
    'modal.interest.kids':        'เด็กและการศึกษา',
    'modal.interest.corporate':   'สุขภาพองค์กร',
    'modal.interest.other':       'อื่น ๆ',
    'footer.tagline': 'ยกระดับมาตรฐานการวิเคราะห์ร่างกายด้วย AI สำหรับการฟื้นฟู ฟิตเนส การศึกษา และสุขภาพองค์กร',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'nav.back_home': '← กลับหน้าแรก',
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
    'nav.cta':       'Book a Trial',
    'nav.solutions': 'Solutions',
    'btn.book':     'Try Body Analysis',
    'btn.download': 'Download Sample Report',
    'btn.contact':  'Contact Us',
    'hero.title':    'Understanding the Body Is the Start of Every Goal',
    'hero.subtitle': 'AI-powered body analysis for recovery, performance,<br />growth, and workplace wellness.',
    'hero.tagline':  'Let OUTBODY help you start your <strong>better transformation</strong>',
    'pillars.label': 'Our Solutions',
    'pillars.title': 'One Device.<br/><span class="hl">Every Goal.</span>',
    'pillars.rehab.name':     'Wellness & Rehab',
    'pillars.rehab.desc':     'Track recovery progress and body balance objectively — helping physiotherapists plan care with precision.',
    'pillars.gym.name':       'Performance Gyms',
    'pillars.gym.desc':       'Strength, agility, and balance data that lets trainers personalize programs and reduce injury risk.',
    'pillars.kids.name':      'Kids & Education',
    'pillars.kids.desc':      'Track children\'s physical development to support focus, learning, and growth to their full potential.',
    'pillars.corporate.name': 'Corporate Wellness',
    'pillars.corporate.desc': 'Fast, systematic employee health assessments that power workplace wellness programs and benefits.',
    'research.title':    'Body Movement<br/><span class="hl">Impacts Potential at Every Age</span>',
    'research.subtitle': 'What does global research say?',
    'research.who':      'Regular physical activity is the foundation of good health <strong>at every stage of life</strong>, from childhood through the working years.',
    'research.oecd':     'People who are regularly physically active tend to have <strong>better focus, productivity, and quality of life</strong>.',
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
    'want.label': 'Customers Want',
    'want.title': 'Customers Want<br /><span class="hl">Personalized Services</span>',
    'want.desc':  'Required Body Data Varies By Goals And Interests.',
    'edu.title':  'From Body Assessment<span class="hl"> to Measurable Results</span>',
    'edu.desc':   'Whether it\'s a clinic, gym, school, or company, OUTBODY uses the same process to turn body data into a personalized development plan you can systematically track.',
    'edu.step1':  'Assessment',
    'edu.step2':  'AI Analysis',
    'edu.step3':  'Personalized Program',
    'edu.step4':  'Better Results',
    'experts.title':  'Developed by Experts in Health,<br/><span class="hl">Technology & Movement Analysis</span>',
    'experts.subtitle': '5 years of combined experience, deployed across multiple countries, backed by extensive research and data.',
    'experts.c1':     'A team of health and physiotherapy experts who design safe and effective programs for every kind of user.',
    'experts.c2':     'An AI system that analyzes body data in real-time to deliver accurate and personalized results.',
    'experts.c3':     'The science of body movement that helps analyze posture, balance, and muscle development.',
    'experts.c4':     'Deep data analysis to track development and generate easy-to-understand reports for both users and the professionals who guide them.',
    'leadership.label': 'Leadership Team',
    'leadership.title': 'OUTBODY Thailand<br/><span class="hl">Leadership</span>',
    'leaders.ceo_title': 'CEO, OUTBODY Thailand',
    'leaders.md_title':  'Managing Director, OUTBODY Thailand',
    'leaders.comms_title': 'Head of Communications, OUTBODY Thailand',
    'founder.note':      'OUTBODY was founded by Rick Nahm, Ph.D, a physical training specialist with 16+ years of experience, backed by Hyundai Corporation.',
    'age.label':      'OUTBODY AGE',
    'age.title':      'How Old Is<br/><span class="hl">Your Body, Really?</span>',
    'age.desc':       'OUTBODY AGE combines all 6 analysis results — posture, flexibility, strength, agility, balance, and body composition — into one easy-to-understand number, compared against your actual age, for an instant picture of your overall health.',
    'age.note_label': 'Note:',
    'age.note_body':  'For users under 18, results are shown as a Development Score instead of a Body Age — since children\'s bodies are still growing, comparing to actual age wouldn\'t reflect a meaningful outcome.',
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
    'modal.interest_label':       'Which best describes you?',
    'modal.interest.placeholder': 'Select your area of interest',
    'modal.interest.rehab':       'Wellness / Rehab',
    'modal.interest.gym':         'Performance Gym',
    'modal.interest.kids':        'Kids / Education',
    'modal.interest.corporate':   'Corporate Wellness',
    'modal.interest.other':       'Other',
    'footer.tagline': 'Elevating the standard of AI body analysis for recovery, fitness, education, and corporate wellness.',
    'footer.privacy': 'Privacy Policy',
    'nav.back_home': '← Back to Home',
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
  // toggle whole blocks of content by language (for long-form pages
  // where per-sentence i18n keys aren't practical, e.g. legal pages)
  document.querySelectorAll('[data-lang-block]').forEach(el => {
    el.style.display = (el.dataset.langBlock === lang) ? '' : 'none';
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
