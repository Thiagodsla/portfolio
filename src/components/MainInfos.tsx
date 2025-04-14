import { Grid, GridItem, Flex, Container  } from '@chakra-ui/react'
import { FaLinkedin, FaGithubSquare, FaReact, FaHtml5, FaCss3, FaVuejs   } from "react-icons/fa";
import { SiRubyonrails, SiJavascript  } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IconType } from "react-icons";

import dayjs from 'dayjs';

export function MainInfos(){
  
  const texts: string[] =  [
    'Olá, este é meu portfolio. 🖖 Meu nome é Thiago.',
    `Tenho ${dayjs().diff(' 1992-06-18 12:00:00', 'year', false).toFixed(0)} anos.`,
    'Sou formado em Análise e Desenvolvimento de Sistemas.',
    'Estou sempre em busca de aprimoramento. O que mais me motiva é a paixão pelo que faço e a incrível sensação de dar vida a um projeto através das soluções que a programação oferece.',
    'O que me inspira, a cada linha de código é a possibilide de transformar ideias dando vida a grandes soluções, e é exatamente essa magia que me mantém entusiasmado e dedicado ao mundo da programação.'
  ]
  
  const stacks: {icon?: IconType; color: string; size: string}[] = [
    { icon: FaHtml5, color: '#E34F26', size: '30px' },
    { icon: FaCss3, color: '#1572B6', size: '30px' },    
    { icon: SiJavascript, color: '#F7DF1E', size: '30px' },
    { icon: SiRubyonrails, color: '#CC0000', size: '30px' },
    { icon: FaVuejs, color: '#42b883', size: '30px' },
  ]
  
  const learning: {icon?: IconType; color: string; size: string}[] = [
    { icon: TbBrandCSharp, color: '#ac99ea', size: '30px' },    
    { icon: FaReact, color: '#61DAFB', size: '30px' },
  ]

  return (
    <Container maxW={{ base: "90%", md: "70%" }}>
      <Grid  
        gridTemplateColumns={'300px 1fr'}
        templateRows='auto1 4fr'
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} 
        gap={6}
      >
        <GridItem colSpan={{ base: 3, sm: 1 }} >
          <img src={'https://avatars.githubusercontent.com/u/88861546?v=4'} className="avatar" alt="avatar" style={{width: '300px', height: 'auto'}} />
        </GridItem>
        <GridItem colSpan={{ base: 3, sm: 1 }} bg=''>
          <Flex h="100%" align="center" justify="flex-start" px={4}>
            <h2 style={{paddingLeft: '20px', textAlign: 'left', color: '#000'}}>
              {texts.map((text) => (text))}
            </h2>
          </Flex>
        </GridItem >
    
        <GridItem colSpan={1}  rowSpan={1}>
          <Flex h="100%" align="center" justify="center" pt={4}>
            <FaLinkedin size="50"/>
            <FaGithubSquare size="50"/>
          </Flex>
        </GridItem>
    
        <GridItem colSpan={1}  rowSpan={1}>
          <Flex pl={12}>
            🛠 Tech Stack
          </Flex>
          <Flex pl={12}>
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {stacks.map(({ icon: Icon, color, size }, index) => (
                Icon && <Icon key={index} color={color} size={size} style={{margin: '0px 3px'}} />
              ))}
            </div>
          </Flex>

          <Flex pl={12} pt={6}>
            📗 Aprendendo
          </Flex>
          <Flex pl={12} >
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {learning.map(({ icon: Icon, color, size }, index) => (
                Icon && <Icon key={index} color={color} size={size} style={{margin: '0px 3px'}} />
              ))}
            </div>
          </Flex>
        </GridItem>
        
      </Grid >
    </Container>
  )

}