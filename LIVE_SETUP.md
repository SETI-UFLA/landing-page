# Como Configurar a Página de Live

## Configuração do ID do Vídeo do YouTube

Para ativar a transmissão ao vivo, você precisa configurar o ID do vídeo/live do YouTube.

### Passo 1: Obter o ID do Vídeo

1. Vá até o YouTube e crie ou acesse sua transmissão ao vivo
2. Copie o ID do vídeo da URL. Por exemplo:
   - URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - ID do vídeo: `dQw4w9WgXcQ`

### Passo 2: Atualizar o Componente Live

Abra o arquivo `src/components/Live.jsx` e substitua o valor `'VIDEO_ID'` na linha 6:

```jsx
const youtubeVideoId = 'SEU_ID_AQUI'; // Substitua por seu ID
```

Por exemplo:
```jsx
const youtubeVideoId = 'dQw4w9WgXcQ';
```

### Passo 3: Testar

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a página de live em: `http://localhost:5173/live`

## Funcionalidades da Página de Live

- ✅ Player do YouTube integrado e responsivo
- ✅ Chat ao vivo do YouTube
- ✅ Logo da SETI no topo
- ✅ Layout adaptável (desktop: vídeo + chat lado a lado / mobile: vídeo em cima, chat abaixo)
- ✅ Botão para voltar à landing page
- ✅ Autoplay ativado para começar automaticamente

## Acessando a Live

Os visitantes podem acessar a live de duas formas:

1. **Pelo botão "Assistir Live"** no Hero da landing page (vermelho com ícone do YouTube)
2. **Diretamente pela URL**: `https://seusite.com/live`

## Observações

- O chat só funcionará se a transmissão estiver ao vivo e o chat estiver habilitado no YouTube
- Para transmissões agendadas, você pode usar o mesmo ID do vídeo antes de começar a live
- Certifique-se de que o vídeo/live não está configurado como privado no YouTube
