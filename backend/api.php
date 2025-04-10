<?php
// backend/api.php

header('Content-Type: application/json');

// Simula um banco de dados
$data = [
    ['id' => 1, 'nome' => 'João', 'idade' => 25],
    ['id' => 2, 'nome' => 'Maria', 'idade' => 30],
    ['id' => 3, 'nome' => 'José', 'idade' => 22]
];

// Retorna os dados como JSON
echo json_encode($data);
