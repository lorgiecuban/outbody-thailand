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

$to      = 'outbody@bloom-park.com';
$subject = 'ลงทะเบียนทดลอง OUTBODY — ' . $name;

$body  = "ชื่อ: $name\n";
$body .= "เบอร์โทร: $phone\n";
$body .= "อีเมล: $email\n";
$body .= "องค์กร/โรงเรียน: $organization\n";
$body .= "สนใจด้าน: $interest\n";
$body .= "ข้อความ: $message\n";

$headers  = "From: outbody@bloom-park.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'ส่งอีเมลไม่สำเร็จ กรุณาลองใหม่']);
}
