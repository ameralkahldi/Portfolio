<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case ("POST"):
        header("Access-Control-Allow-Origin: *");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        $email = $params->email ?? '';
        $name = $params->name ?? '';
        $message = $params->message ?? '';

        $recipient = 'amer.alkhaldi@icloud.com';  
        $subject = "Contact From <$email>";
        $messageBody = "From: $name <br> Message: $message";

        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: amer.alkhaldi@icloud.com";

        if (mail($recipient, $subject, $messageBody, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success', 'message' => 'Email sent successfully.']);
        } else {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Failed to send email.']);
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
