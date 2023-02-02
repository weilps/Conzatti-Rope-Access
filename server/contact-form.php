<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'info@ropeaccesscompany.com';
  $subject = 'Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $name <$email>";

  if (mail($to, $subject, $body, $headers)) {
    $response = 'Thank you for your message!';
  } else {
    $response = 'There was an error sending your message. Please try again.';
  }

  echo $response;
  exit;
}

?>