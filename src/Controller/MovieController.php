<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MovieController extends AbstractController
{
    #[Route('/api/movies', name: 'movie_list', methods: ['GET'])]
    public function list()
    {
        return $this->json(["a" => "b"]);
    }

    #[Route('/api/movies/{id}', name: 'movie_item', methods: ['GET'])]
    public function item($id)
    {
        return $this->json(["a" => "b"]);
    }

    #[Route('/api/movies', name: 'movie_create', methods: ['POST'])]
    public function create()
    {
        return $this->json(["a" => "b"]);
    }

    #[Route('/api/movies/{id}', name: 'movie_item', methods: ['PUT'])]
    public function update()
    {
        return $this->json(["a" => "b"]);
    }
}