<?php
/**
 * Branded auto-reply sent back to the person who submitted the modal form.
 * Expects $name to be set by the includer.
 */
$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>OUTBODY Thailand</title>
</head>
<body style="margin:0; padding:0; background-color:#FFF3D6; font-family: 'Segoe UI', 'Noto Sans Thai', Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FFF3D6; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color:#ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background-color:#111111; padding: 32px 40px; text-align:center;">
              <div style="font-family: Arial, sans-serif; font-size: 26px; font-weight: 800; letter-spacing: 2px; color:#FFA800;">
                OUTBODY<span style="color:#ffffff; font-weight:400; font-size:0.55em; vertical-align: 2px;">®</span>
              </div>
              <div style="font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 4px; color: rgba(255,255,255,0.55); margin-top: 4px;">
                THAILAND
              </div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 40px 8px;">
              <p style="margin:0 0 4px; font-size: 13px; font-weight:700; letter-spacing:0.5px; color:#FFA800;">ทดลองฟรี</p>
              <h1 style="margin:0 0 20px; font-size: 22px; line-height:1.4; color:#111111;">
                ขอบคุณคุณ<?php echo $safeName; ?>
              </h1>
              <p style="margin:0 0 16px; font-size: 15px; line-height:1.8; color:#444444;">
                เราได้รับข้อมูลของคุณเรียบร้อยแล้ว ทีมงาน OUTBODY Thailand จะติดต่อกลับภายใน <strong>1 วันทำการ</strong>
                เพื่อนัดหมายและให้ข้อมูลเพิ่มเติมเกี่ยวกับโซลูชันที่เหมาะกับความต้องการของคุณ
              </p>
              <p style="margin:0 0 28px; font-size: 15px; line-height:1.8; color:#444444;">
                ระหว่างนี้ หากมีคำถามเพิ่มเติม สามารถตอบกลับอีเมลฉบับนี้ได้โดยตรง
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#FFA800; border-radius:100px;">
                    <a href="https://outbody.bloom-park.com" style="display:inline-block; padding: 13px 32px; font-size:14px; font-weight:700; color:#ffffff; text-decoration:none;">
                      เยี่ยมชมเว็บไซต์ของเรา
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding: 32px 40px 0;">
              <div style="border-top: 1px solid #EEEEEE;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px 36px;">
              <p style="margin:0 0 6px; font-size: 13px; font-weight:700; color:#111111;">OUTBODY Thailand</p>
              <p style="margin:0; font-size: 12.5px; line-height:1.8; color:#888888;">
                เลขที่ 3 ถนนเฉลิมพระเกียรติ ร.9 ซอย 23 แขวงหนองบอน เขตประเวศ กรุงเทพ 10250<br />
                <a href="mailto:outbody@bloom-park.com" style="color:#888888;">outbody@bloom-park.com</a> &nbsp;|&nbsp; 02-747-3800
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
