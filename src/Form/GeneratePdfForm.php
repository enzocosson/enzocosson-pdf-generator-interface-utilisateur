<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class GeneratePdfForm extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('pdfName', TextType::class, [
                'label' => false, // Supprime le label du champ
                'attr' => [
                    'placeholder' => 'Nom du PDF',
                    'class' => 'form-control' // Ajoute une classe CSS pour le champ
                ]
            ])
            ->add('url', TextType::class, [
                'label' => false, // Supprime le label du champ
                'attr' => [
                    'placeholder' => 'URL',
                    'class' => 'form-control', // Ajoute une classe CSS pour le champ
                    'id' => 'pdf_url_input' // Ajoute un identifiant unique au champ
                ]
            ])
            ->add('convertir', SubmitType::class, [
                'label' => 'Convertir',
                'attr' => ['class' => 'custom-submit-button']
            ]);
    
    }
}
