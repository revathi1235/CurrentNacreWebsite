<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database credentials
$servername = "localhost";
$username = "u936187486_mcptest"; // Default XAMPP username
$password = "N@cre123"; // Default XAMPP password is empty
$dbname = "u936187486_mcptest";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["message" => "Connection failed: " . $conn->connect_error]));
}

// Get the form data from JSON input
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

// Extract form data
$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$subject = $input['subject'] ?? '';
$message = $input['message'] ?? '';
$cname = $input['cname'] ?? ''; // Company Name
$cweb = $input['cweb'] ?? ''; // Company Website
$phone = $input['phone'] ?? ''; // Phone Number
$ccode = $input['ccode'] ?? ''; // Country Code
$industry = $input['industry'] ?? ''; // Industry
$fullPhone = $ccode . $phone;
$recaptcha_response = $input['g-recaptcha-response'] ?? ''; // Get reCAPTCHA response from JSON

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["message" => "Invalid email address"]);
    exit;
}

// Validate required fields
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(["message" => "All required fields must be filled."]);
    exit;
}

// Enable and validate reCAPTCHA
if (!empty($recaptcha_response)) {
    $recaptcha_secret = '6LfkZ3wqAAAAAN1D0blgLgQpCa4xBI0w48GBkpbp';

    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_data = [
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_response
    ];

    // Specify the Content-Type as application/x-www-form-urlencoded
    $recaptcha_options = [
        'http' => [
            'method'  => 'POST',
            'header'  => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query($recaptcha_data)
        ]
    ];

    // Validate the reCAPTCHA response
    $recaptcha_context = stream_context_create($recaptcha_options);
    $recaptcha_result = file_get_contents($recaptcha_url, false, $recaptcha_context);

    if ($recaptcha_result === FALSE) {
        echo json_encode(["message" => "Error fetching reCAPTCHA response."]);
        exit;
    }

    $recaptcha_data = json_decode($recaptcha_result, true);

    // Check if reCAPTCHA verification was successful
    if ($recaptcha_data['success']) {
        // Insert data into the database if captcha is verified
        $stmt = $conn->prepare("INSERT INTO contact_us (name, email, subject, message, company_name, phone, industry, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssss", $name, $email, $subject, $message, $cname, $fullPhone, $industry, $cweb);

        if ($stmt->execute()) {
            echo json_encode(["message" => "Form submitted and data inserted successfully."]);
        } else {
            echo json_encode(["message" => "Error: " . $stmt->error]);
        }

        $stmt->close();
    } else {
        echo json_encode(["message" => "reCAPTCHA verification failed."]);
    }
} else {
    echo json_encode(["message" => "reCAPTCHA response missing."]);
}

// Close the database connection
$conn->close();
?>
