// import { CertificateCard } from '../shared/CertificateCard.tsx'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import { Box } from "@chakra-ui/react"
// import { Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'
import { Box, Container, SimpleGrid  } from '@chakra-ui/react'
import { MainInfos } from '../components/MainInfos';
import { MyProjects } from '../components/MyProjects';
import { MyCertificates } from '../components/MyCertificates';
import { Link as RouterLink } from "react-router-dom";
import { Navbar } from '../shared/NavBar';

export function Home(){
  return (
    <>
    <Navbar/>

    <Container maxW="100%"  p={0} m={0} px="0">
      <Box>
        <Box id="home" h="100vh" bg="gray.900" color="white" display="flex" alignItems="center" justifyContent="center" p={4}>
          <MainInfos/>
        </Box>

        <Box id="projects" h="100vh" bg="gray.700" display="flex" alignItems="center" justifyContent="center" p={4}>
          <MyProjects/>
        </Box>

        <Box id="certificates" h="100vh" bg="gray.900" display="flex" alignItems="center" justifyContent="center" p={4}>
          <MyCertificates/>
        </Box>

      </Box>
    </Container>


      
  
      {/* <h1>Olá, este é meu portfolio 🖖  </h1>
      <tr>
        <td>
          ## 🛠 &nbsp;Tech Stack
        </td>
      </tr>
      <tr>
        <td>
          <img src={'https://img.shields.io/badge/-HTML-05122A?style=for-the-badge&logo=HTML5'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-CSS-05122A?style=for-the-badge&logo=CSS3&logoColor=1572B6'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-JavaScript-05122A?style=for-the-badge&logo=javascript'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-Vue.js-05122A?style=for-the-badge&logo=vue.js'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-Ruby_on_Rails-05122A?style=for-the-badge&logo=ruby-on-rails'} className="stack-img" />
          <img src={'https://img.shields.io/badge/-react-05122A?style=for-the-badge&logo=react'} className="stack-img" />
        </td>
      </tr>
      <tr>
        <td>
          Cursos e certificados
        </td>
      </tr>
      
      <tr style={{display: "flex", justifyContent: 'space-between'}}>
        <td>
          <CertificateCard 
            certificate_link="https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-6627814/course-84414-pnvwq.pdf"
            certificate_text="CS 50 - Introdução a Ciência da Computação - O curso de Harvard. | Fev de 2022 - Mar de 2022 ( 70 Horas )"
          ></CertificateCard>
        </td>
        <td>
          <CertificateCard 
            certificate_link="https://www.cursoemvideo.com/validacao-de-certificado/?codigo=2787D-6297-2"
            certificate_text="Curso em Vídeo - Algorítmo | Jun de 2021 - Set de 2021 ( 40 Horas )"
          ></CertificateCard>
        </td>
        <td>
          <CertificateCard 
            certificate_link="https://cursos.alura.com.br/user/thiagod11/fullCertificate/3b936cab77896622c007e3522cc40d4c"
            certificate_text="Alura - Formação Front-End | Ago de 2021 - Dez de 2021 ( 207 Horas )"
          ></CertificateCard>
        </td>

      </tr> */}
      
      {/* CONTATO
      thiagod11@hotmail.com
      Linkedin: thiagodslima
      GitHub: Thiagodsla

      EXPERIÊNCIA PROFISSIONAL
      FUSION Tecnologia
      Estagiário Desenv. Front-End
      Dez de 2021 - até o momento · 4 meses
      HTML | CSS | JavaScript | Vue.js
      Desenvolvimento de Aplicações Web
      FORMAÇÃO
      Estácio
      Graduação - Análise e Desenvolvimento de Sistemas
      Jun de 2021 - Dez de 2023
      Certificados */}

      




    </>
  )
} 