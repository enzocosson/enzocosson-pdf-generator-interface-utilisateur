<?php

// tests/Entity/UserTest.php
namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testGetterAndSetter()
    {
        // Création d'une instance de l'entité User
        $user = new User();

        // Définition de données de test
        $email = 'test@test.com';
        $lastname = 'Doe';
        $firstname = 'John';
        $password = 'password';
        $role = 'ROLE_USER';
        $subscriptionEndAt = new \DateTime();

        // Utilisation des setters
        $user->setEmail($email);
        $user->setLastname($lastname);
        $user->setFirstname($firstname);
        $user->setPassword($password);
        $user->setRole($role);
        $user->setSubscriptionEndAt($subscriptionEndAt);

        // Vérification des getters
        $this->assertEquals($email, $user->getEmail());
        $this->assertEquals($lastname, $user->getLastname());
        $this->assertEquals($firstname, $user->getFirstname());
        $this->assertEquals($password, $user->getPassword());
        $this->assertEquals($role, $user->getRole());
        $this->assertEquals($subscriptionEndAt, $user->getSubscriptionEndAt());
    }
}
