<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Repository\MovieRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MovieController extends AbstractController
{
    public function __construct(private SerializerInterface $serializer, private EntityManagerInterface $em){}

    #[Route('/api/movies', name: 'movie_list', methods: ['GET'])]
    public function list(Request $request, MovieRepository $movieRepository)
    {
        $name = $request->query->get('name', null);
        $movies = $movieRepository->findByNameAndYead($name, $request->query->getInt('year', 0));
        $res = $this->json($movies);
        return $res;
    }

    #[Route('/api/movies/{id}', name: 'movie_item', methods: ['GET'])]
    public function item(int $id, MovieRepository $movieRepository)
    {
        $movie = $movieRepository->find($id);
        return $this->json($movie);
    }

    #[Route('/api/movies', name: 'movie_create', methods: ['POST'])]
    public function create(Request $request)
    {
        $movie = $this->serializer->deserialize($request->getContent(), Movie::class, 'json');
        $this->em->persist($movie);
        $this->em->flush();
        return $this->json($movie);
    }
}