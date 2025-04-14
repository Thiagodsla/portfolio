import { Grid, GridItem, Container  } from '@chakra-ui/react'
import { FaPython, FaReact  } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { IconType } from "react-icons";
import { DefaultCard } from '../components/DefaultCard';

export function MyProjects(){
  const cards: { name: string; imageUrl: string; description: string , link: string, icons: IconType[]}[] = [
    {
      name: "Discord Bot",
      imageUrl: "",
      description: "Criei este bot para fazer um sorteio para as dailies, com base nos cargos atribuídos. Utilizando o comando /daily 'cargo_no_discord' ele faz um sorteio para os membros online para as reuniões." ,
      link: 'https://github.com/Thiagodsla/bacon',
      icons: [FaPython],
    },
    {
      name: "Portfólio",
      imageUrl: "",
      description: "Meu portofolio desenvolvido em React e Typescript",
      link: 'https://github.com/Thiagodsla/portfolio',
      icons: [SiTypescript, FaReact],
    },
    {
      name: "",
      imageUrl: "",
      description: "",
      link: '',
      icons: [],
    }
  ];

  return(
    <Container maxW={{ base: "90%", md: "70%" }}>
      <Grid        
        templateRows="auto 1fr"
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} 
        gap={6}
      >
        <GridItem colSpan={{ base: 3, md: 3 }}>
          Meus projetos
        </GridItem>
        
        {
          cards.map((card, index) => (
            <GridItem key={index} height="100%" colSpan={{ base: 3, md: 1 }}>
              <DefaultCard
                key={index}
                name={card.name}
                imageUrl={card.imageUrl}
                description={card.description}
                link={card.link}
                icons={card.icons}
                  
              />
            </GridItem>
          ))
        }
      </Grid>
    </Container>
  )
}