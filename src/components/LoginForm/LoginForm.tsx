import { Box, Field, Flex, Input, Text } from "@chakra-ui/react"
import { InputForm } from "../InputForm/InputForm"

export const LoginForm = () => {
	return (
		<Flex 
			width='480px'
			padding='10'
			borderRadius='16px'
			bg='white'
			border='1px solid'
			borderColor='#DCE4EF'
			color='#082249'
			direction='column'
			gap='6'
		>
			<Box textAlign='center'>
				<Text fontSize='32px' fontWeight='bold'>Acesse sua conta</Text>
				<Text fontSize='16px' color='#64748B'>Entre com os seus dados para acessar o DIO BANK</Text>

			</Box>

			<Flex direction='column' gap='6'>
				<InputForm label="CPF" placeholder="000.000.000-00"/>
				<InputForm label="Senha" placeholder="●●●●●●●●" type="password"/>
			</Flex>
		</Flex>
	)
}