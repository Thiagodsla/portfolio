import { Container  } from '@chakra-ui/react'
import { CertificadosCarrossel } from "./Carousel";

export function MyCertificates(){

  const certificados: { name: string; imageUrl: string; description: string , link: string }[] = [
    {
      name: "CS 50 - Introdução a Ciência da Computação - O curso de Harvard.",
      imageUrl: "",
      description: "Fev de 2022 - Mar de 2022 (70 Horas)" ,
      link: 'https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-6627814/course-84414-pnvwq.pdf',
    },
    {
      name: "Curso em Vídeo - Algorítmo",
      imageUrl: "",
      description: "Jun de 2021 - Set de 2021 (40 Horas)",
      link: 'https://www.cursoemvideo.com/validacao-de-certificado/?codigo=2787D-6297-2',
    },
    {
      name: "Alura - Formação Front-End",
      imageUrl: "",
      description: "Ago de 2021 - Dez de 2021 (207 Horas)",
      link: 'https://cursos.alura.com.br/user/thiagod11/fullCertificate/3b936cab77896622c007e3522cc40d4c',
    }
  ];

  return(
    <Container maxW={{ base: "90%", md: "70%" }}>
      <CertificadosCarrossel certificados={certificados} />
    </Container>
  )
}