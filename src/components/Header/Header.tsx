import { Button, Flex, IconButton, Image, Text } from "@chakra-ui/react"

interface IHeader {
  username?: string
}

export const Header  = ({ username }: IHeader) => {
  return(
    <Flex 
      position='sticky'
      top='0'
      zIndex='sticky'
      bg='#082249'
      height='72px'
      padding='15px'
      justify='space-between'
      alignItems='center'
      border='1px solid'
      borderColor='#FFFFFF'
    >
      <Flex 
        width='150px'
        justify='space-between'
        alignItems='center'
      >
        <Image src="/icons/banco.svg" width='48px' height='48px' alt="banco-icon"/>
        <Text fontSize='lg' fontWeight='bold'>DIO BANK</Text>    
      </Flex>

      {username && (
        <Flex width='150px' justify='space-between'>
          <IconButton
            aria-label="Notificações"
            variant='plain'
            size='md'
          >
            <Image src="/icons/notificacoes.svg" width='24px' height='24px'/>
          </IconButton>

          <Flex width='45%' justify='center'>
            <Button
              rounded='full'
              bg='whiteAlpha.400'
              color='white'
              _hover={{ bg: 'whiteAlpha.500' }}
              boxSize='10'
              px='0'
              minW='0'
            >
              <Text fontSize='sm'>{username}</Text>
            </Button>

            <IconButton
              aria-label="Informações do perfil"
              variant='plain'
              size='md'
            >
              <Image src="/icons/seta-baixo.svg" width='20px' height='20px'/>
            </IconButton>
          </Flex>

        </Flex>
      )}
    </Flex>
  )
}
