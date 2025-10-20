<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

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

        $mail = new PHPMailer(true);

        try {
           
            $mail->isSMTP();
            $mail->Host = 'mail.ameralkhalidy.de';  
            $mail->SMTPAuth = true;
            $mail->Username = 'm079790b';         
            $mail->Password = 'Amer1996@@'; 
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;

            $mail->setFrom('contact@ameralkhalidy.de', 'Website Kontaktformular');
            $mail->addAddress('amer.alkhaldi@icloud.com');

            
            $mail->isHTML(true);
            $mail->Subject = "Neue Nachricht von $name <$email>";
            $mail->Body = "Von: $name <br>Email: $email <br><br>Nachricht:<br>$message";

            $mail->send();
            http_response_code(200);
            echo json_encode(['status' => 'success', 'message' => 'E-Mail erfolgreich gesendet.']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['status' => 'error', 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}