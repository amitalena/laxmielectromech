<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

ob_start();

// === Enhanced CORS Headers ===
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// === Handle Preflight Request ===
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    ob_end_flush();
    exit();
}

// === Only Allow POST ===
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Only POST requests allowed"]);
    ob_end_flush();
    exit();
}

// === Check if FormData was received ===
if (empty($_POST) && empty($_FILES)) {
    http_response_code(400);
    echo json_encode(["error" => "No form data received"]);
    ob_end_flush();
    exit();
}

// === Receive FormData Fields ===
$fullName = htmlspecialchars(trim($_POST["fullName"] ?? ""));
$email = htmlspecialchars(trim($_POST["email"] ?? ""));
$mobile = htmlspecialchars(trim($_POST["mobile"] ?? ""));
$position = htmlspecialchars(trim($_POST["position"] ?? ""));
$message = htmlspecialchars(trim($_POST["message"] ?? ""));
$file = $_FILES["file"] ?? null;

// === Validation ===
$errors = [];

if (empty($fullName) || !preg_match("/^[a-zA-Z\s]+$/", $fullName) || strlen($fullName) > 100) {
    $errors[] = "Full Name must only contain letters and spaces (max 100 chars).";
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Valid Email is required.";
}
if (empty($mobile) || !preg_match("/^\d{10}$/", $mobile)) {
    $errors[] = "Mobile must be exactly 10 digits.";
}
if (empty($position)) {
    $errors[] = "Position is required.";
}
if (empty($message)) {
    $errors[] = "Message is required.";
}
if (!$file || $file['error'] !== UPLOAD_ERR_OK) {
    $errors[] = "Resume file is required.";
} else {
    if ($file['size'] > 2 * 1024 * 1024) {
        $errors[] = "File too large (Max 2MB).";
    }
    $allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (!in_array($file['type'], $allowedTypes)) {
        $errors[] = "Only PDF or DOC/DOCX files allowed.";
    }
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(["errors" => $errors]);
    ob_end_flush();
    exit();
}

// === Email Configuration ===
$to = "amitk221003@gmail.com";
$from = "amitk221003@gmail.com";
$fromName = "Amit Kumar";
$subject = "New Application from $fullName";

// === Email Body ===
$body = "
    <h2>Career Application</h2>
    <table cellpadding='8' cellspacing='0' border='1'>
        <tr><td><strong>Full Name</strong></td><td>$fullName</td></tr>
        <tr><td><strong>Email</strong></td><td>$email</td></tr>
        <tr><td><strong>Mobile</strong></td><td>$mobile</td></tr>
        <tr><td><strong>Position</strong></td><td>$position</td></tr>
        <tr><td><strong>Message</strong></td><td>$message</td></tr>
    </table>
";

// === Send Email via PHPMailer ===
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $from;
    $mail->Password = 'umyk mrwq fnat gvah';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom($from, $fromName);
    $mail->addAddress($to);
    $mail->addReplyTo($email, $fullName);

    $mail->addAttachment($file['tmp_name'], $file['name']);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();
    http_response_code(200);
    echo json_encode(["message" => "Application submitted successfully."]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Mailer Error: " . $mail->ErrorInfo]);
}

ob_end_flush();
?>