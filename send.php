<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://outbody.bloom-park.com');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server not configured']);
    exit;
}
$config = require $configPath;

require __DIR__ . '/vendor/phpmailer/Exception.php';
require __DIR__ . '/vendor/phpmailer/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

$name         = trim($_POST['from_name'] ?? '');
$phone        = trim($_POST['phone'] ?? '');
$email        = trim($_POST['from_email'] ?? '');
$organization = trim($_POST['organization'] ?? '');
$interest     = trim($_POST['interest'] ?? '');
$message      = trim($_POST['message'] ?? '');

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'กรุณากรอกชื่อและเบอร์โทร']);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'อีเมลไม่ถูกต้อง']);
    exit;
}

function buildMailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_username'];
    $mail->Password   = $config['smtp_password'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';
    return $mail;
}

try {
    // ---- Inbound: notify the OUTBODY team ----
    $inbound = buildMailer($config);
    $inbound->setFrom($config['from_email'], $config['from_name']);
    $inbound->addAddress($config['to_email']);
    if (!empty($email)) {
        $inbound->addReplyTo($email, $name);
    }
    $inbound->Subject = 'ลงทะเบียนทดลอง OUTBODY — ' . $name;
    $inbound->isHTML(false);
    $inbound->Body =
        "ชื่อ: $name\n" .
        "เบอร์โทร: $phone\n" .
        "อีเมล: $email\n" .
        "องค์กร/สถานที่ให้บริการ: $organization\n" .
        "สนใจด้าน: $interest\n" .
        "ข้อความ: $message\n";
    $inbound->send();

    // ---- Outbound: branded auto-reply to the inquirer ----
    if (!empty($email)) {
        $outbound = buildMailer($config);
        $outbound->setFrom($config['from_email'], $config['from_name']);
        $outbound->addAddress($email, $name);
        $outbound->Subject = 'ขอบคุณที่สนใจ OUTBODY Thailand';
        $outbound->isHTML(true);
        ob_start();
        include __DIR__ . '/email-templates/auto-reply.php';
        $outbound->Body = ob_get_clean();
        $outbound->AltBody = "ขอบคุณคุณ $name ที่สนใจ OUTBODY Thailand เราได้รับข้อมูลของคุณแล้ว ทีมงานจะติดต่อกลับภายใน 1 วันทำการ";
        $outbound->send();
    }

    echo json_encode(['success' => true]);
} catch (PHPMailerException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่']);
}
