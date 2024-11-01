<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);

    // For simplicity, just display a success message.
    echo "<h2>Thank you, $name! We’ve received your message.</h2>";
    echo "<p>We’ll get back to you shortly at $email.</p>";
} else {
    echo "Please submit the form.";
}
?>
