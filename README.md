# Goldener Pfau — Cinema Edition

## Instalar o projeto completo
Extraia Goldener_Pfau_Cinema_20261025.zip em uma pasta nova. Abra essa pasta no VS Code. No terminal:

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para compilar: npm run build.
Não há dependências novas. Nenhuma publicação foi realizada; a configuração de hospedagem original foi preservada.

## Atualizar sua pasta atual
Faça backup. Extraia Goldener_Pfau_Cinema_PATCH_20261025.zip e mescle as pastas src e public com as atuais. Substitua apenas os dez arquivos incluídos. O patch é cumulativo e contém as alterações anteriores: não exige aplicar os outros patches primeiro.
Pare o servidor com Ctrl+C e execute npm run dev. Recarregue a página sem cache.
Não apague as demais pastas. Para desfazer, restaure os dez arquivos do backup.

## Design
- Barra superior removida da home.
- Vídeo ocupando a primeira tela, com marca e slogan no alto, frase independente e botão no centro inferior.
- Every detail, personally arranged. preservado e traduzido nos cinco idiomas existentes.
- Uma única família tipográfica: Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif, usando fontes locais disponíveis.
- Botões com contorno discreto; alinhamentos, títulos, espaçamentos e tratamento de cartões unificados entre as seções.
- Navegação e seletor de idioma no rodapé.
- Vídeo com pausa/reprodução acessível, poster e preferência de movimento reduzido para a abertura.
- iPhone mantém os sete prints completos, sem status bar ou câmera simulados, com navegação e pausa.
- Serviços, imagens, membership, galeria, processos, confiança e contato preservados.

## Performance
O vídeo original de 48.999.012 bytes foi recodificado em H.264 para 9.548.889 bytes: redução de 80,5%. Resolução 1920 x 1080 e duração 20,466667 s mantidas. Compressão com perdas; a faixa de áudio foi removida porque o uso no site é decorativo e sem som. O início do arquivo foi preparado para reprodução progressiva. O material original permanece no ZIP original que você enviou.

## Validação
- Build de produção aprovado, incluindo compilação, checagem de tipos e geração das páginas.
- Prévia visual em Chrome: desktop e layouts de 375 x 812 e 768 x 1024 em iframes.
- Tipografia dos elementos h1/h2/h3/p/a/button/select da home conferida: uma única família.
- Um h1; nenhuma barra/header na home.
- Marca e botão dentro do viewport nos cinco idiomas em largura de celular.
- Botão centralizado na base da abertura; assinatura e frase não se sobrepõem.
- Navegação para serviços e plataforma e controle de pausa do vídeo verificados.
- Vídeo otimizado carregado e reproduzido no navegador sem erro, em 1920 x 1080.
- Sem teste em Safari ou iPhone físico. Backend, pagamentos e reservas não foram revalidados.

## Oferta
Categorias e condições operacionais existentes preservadas. A comunicação mantém concierge, acesso e coordenação por parceiros; não foram adicionadas novas promessas financeiras ou novas áreas de atuação.

## Arquivos
MANIFEST.json contém os hashes dos arquivos e a lista de alterações. SHA256SUMS.txt permite verificar integridade. O pacote completo não inclui node_modules, .next ou arquivos de teste da prévia.
