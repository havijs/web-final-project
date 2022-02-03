<?php

namespace App\Repository;

use App\Entity\Movie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Movie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Movie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Movie[]    findAll()
 * @method Movie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MovieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Movie::class);
    }

    public function findByNameAndYead(int $page, int $limit, ?string $name = null, ?int $year = null)
    {
        $qb = $this->createQueryBuilder('m')
            ->setFirstResult(($page - 1) * $limit)
            ->setMaxResults($limit);
        if($name) {
            $qb->andWhere('m.name LIKE :name')
                ->setParameter('name', '%'.$name.'%');
        }
        if($year) {
            $qb->andWhere('m.year = :year')
                ->setParameter('year', $year);
        }
        return $qb->getQuery()->getResult();
    }
}
