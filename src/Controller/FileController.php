<?php

namespace App\Controller;

use App\Service\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class FileController extends AbstractController
{

    #[Route('/file', name: 'file_upload', methods: ['POST'])]
    public function fileUpload(Request $request, FileUploader $fileUploader)
    {
        $file = $request->files->get('image');
        $fileName = $fileUploader->upload($file);

        return $this->json(['file_name' => $fileName]);
    }
}