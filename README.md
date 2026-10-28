# Goldener Pfau — Mobile Final · 28/10/2026

## Atualizar o repositório existente
Use o PATCH e copie o conteúdo dele para a pasta goldonline-publicar já conectada ao GitHub. Substitua os quatro arquivos de src e README.md. Preserve .git, configurações da hospedagem e arquivos .env. Não é necessário usar o projeto completo para atualizar.

No terminal da pasta goldonline-publicar:

```bash
npm ci
npm run build
npm run dev
```

Confira a prévia em http://localhost:3000. Encerre com Ctrl+C e publique pelo fluxo já conectado:

```bash
git add src/app/page.tsx src/app/page.module.scss src/app/globals.css src/app/legal-shared.module.scss README.md
git commit -m "Fix responsive layouts across Goldener Pfau website"
git push origin main
```

O push atualiza a hospedagem somente se a integração de deploy continuar ativa. Esta entrega não publicou alterações.

## Projeto completo
Contém código e assets, sem node_modules, .next, .git ou arquivos de ambiente. Para abrir em uma pasta nova: npm ci e npm run dev. Mantenha as configurações de deploy do repositório existente; não substitua sua pasta .git.

## Correções
- CSS da home consolidado, eliminando regras antigas sobrepostas.
- Membership muda tanto as colunas quanto as áreas da grade no mobile.
- Alinhamento e margens consistentes entre as seções.
- Títulos e etiquetas adaptáveis aos cinco idiomas, sem nowrap forçado.
- Cartões de serviço com conteúdo no fluxo, permitindo crescer sem cortar texto.
- Prints completos do app, centralizados na moldura, com troca automática e sem controles visíveis.
- Abertura cinematográfica preservada; idioma no topo direito, marca e frase separadas e botão inferior central.
- Galeria em uma coluna no celular; tablet e desktop com grades próprias.
- Números de confiança substituídos por linhas discretas.
- Links de suporte e navegação legal adaptados a telas estreitas.
- Ajuste de tamanho de texto do navegador móvel para manter a escala ao girar o aparelho.

## Limites da revisão
Revisão do código-fonte, traduções, estilos, assets referenciados e configurações incluídas. Backend, pagamentos, reservas e infraestrutura não foram alterados nem testados de ponta a ponta. Conteúdo jurídico e áreas de atuação preservados, sem validação jurídica. Sem teste em Safari ou iPhone físico. Consulte VALIDACAO.txt para os testes executados nesta entrega.
