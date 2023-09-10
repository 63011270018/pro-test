<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travel";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL insert query
$sql = "INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `role`) VALUES (NULL, ?, ?, ?, ?, 'member')";

// Prepare the statement
$stmt = $conn->prepare($sql);

if ($stmt) {
    $first_name = $_POST["data"]["first_name"];
    $last_name = $_POST["data"]["last_name"];
    $email = $_POST["data"]["email"];
    $password = $_POST["data"]["password"];

    // Bind parameters and execute the statement
    $stmt->bind_param("ssss", $first_name, $last_name, $email, $password);

    if ($stmt->execute()) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Error: " . $conn->error;
}

// Close the connection
$conn->close();
?>
