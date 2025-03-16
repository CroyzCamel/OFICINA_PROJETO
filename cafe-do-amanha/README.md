### 1. Contact.jsx
Adição de Estado (useState):

Foi adicionado o estado isSubmitted para controlar se o formulário foi enviado com sucesso.

Quando o formulário é enviado, isSubmitted é definido como true, e uma mensagem de confirmação é exibida.

Renderização Condicional:

Se isSubmitted for true, a mensagem de confirmação é exibida.

Caso contrário, o formulário de contato é exibido.

Função handleSubmit:

A função handleSubmit foi adicionada para lidar com o envio do formulário.

Ela previne o comportamento padrão do formulário (event.preventDefault()) e atualiza o estado isSubmitted para true.

Mensagem de Confirmação: Uma mensagem "Mensagem enviada com sucesso! Entraremos em contato em breve." é exibida após o envio do formulário.

### 2. Header

Adição de Ícones no Menu de Navegação

Utilização da biblioteca react-icons para adicionar ícones representativos a cada link do menu.

Ícones utilizados:

FaHome para "Início"
FaInfoCircle para "Sobre Nós"
FaCoffee para "Menu"
FaShoppingCart para "Pedidos"
FaHistory para "Histórias"
FaEnvelope para "Contato"

Importação da Biblioteca react-icons

Foi adicionada a importação dos ícones do pacote react-icons/fa para permitir a utilização dos ícones no menu.

import { FaHome, FaInfoCircle, FaCoffee, FaHistory, FaEnvelope, FaShoppingCart } from 'react-icons/fa';

#### 3. Hero

dição de Imagens Dinâmicas no Fundo

Agora, o componente Hero alterna entre duas imagens de fundo a cada 5 segundos, tornando o design mais dinâmico.

Imagens utilizadas: graos.jpg, cafe1.jpeg

Uso de ** e ** para Alternância Automática

Implementação de um useState para armazenar a imagem de fundo atual.

Uso de useEffect para alternar entre as imagens a cada 5 segundos.

### 4. Menu

Substituição do switch case por um objeto de mapeamento (images)

Adição de descrições para os itens do menu: Melhora a experiência do usuário ao exibir informações relevantes.

Melhoria na acessibilidade: O atributo alt das imagens foi ajustado dinamicamente.

Refatoração do CSS utilizando variáveis globais (:root)

Ajustes foram feitos para melhorar a experiência em dispositivos móveis, garantindo que o layout se adapte melhor a telas menores.

Agora as abas possuem uma transição suave e um estilo visual aprimorado para melhor usabilidade