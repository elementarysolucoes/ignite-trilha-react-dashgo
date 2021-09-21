import { 
  Flex, 
  Box, 
  Button, 
  Heading, 
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Text
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6">

          <Sidebar />
         
          <Box flex="1" borderRadius={8} bg="gray.800" p="8">
            <Flex mb="8" justifyContent="space-between" align="center">
            
              <Heading size="lg" fontWeight="normal">Usuários</Heading>

              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
                Criar novo
              </Button>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th p="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de Cadastro</Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td p="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Jean Lobo</Text>
                      <Text fontSize="sm" color="gray.300">jeanloboxd@gmail.com</Text>
                    </Box>
                  </Td>
                  <Td>21 de Setembro, 2021</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                      Editar
                    </Button>
                  </Td>
                </Tr>

                <Tr>
                  <Td p="6" color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Maria Janaina</Text>
                      <Text fontSize="sm" color="gray.300">nina_fepe@gmail.com</Text>
                    </Box>
                  </Td>
                  <Td>14 de Julho, 2021</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                      Editar
                    </Button>
                  </Td>
                </Tr>
                
              </Tbody>

            </Table>
          </Box>

        </Flex>
    </Box>
  )
}