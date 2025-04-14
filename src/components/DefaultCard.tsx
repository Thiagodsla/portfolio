import { Avatar, Button, Card, CardBody, Heading, Text, Flex } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface DefaultCardProps {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
  icons: IconType[];
}

export function DefaultCard({ name, imageUrl, description, link, icons }: DefaultCardProps) {

  const handleClick = () => {
    if (link) {
      // Tenta abrir o link em uma nova aba
      const newWindow = window.open(link, '_blank');
      // Verifica se o navegador bloqueou a nova aba (pop-up)
      if (newWindow) {
        newWindow.focus();
      } else {
        console.error('Abertura de nova aba bloqueada');
      }
    } else {
      console.error(link);
    }
  };

  return (
    <Card width="320px" height="100%">
      <CardBody display="flex" flexDirection="column" justifyContent="space-between" >
        <div>
          <Avatar  size="lg" name={name} src={imageUrl} />
          <Heading mt="4" size="md">{name}</Heading>
          <Flex justify="center">
            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
              {icons.map((Icon, index) => (
                <Icon key={index} size={24} />
              ))}
            </div>
          </Flex>
          <Text mt="2" color="gray.600">
            {description}
          </Text>
        </div>
        <Flex justify="end" direction="column">
          <Button mt="4" colorScheme="teal" onClick={handleClick}>
            {'Link do Repositório'.toUpperCase()}
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}
