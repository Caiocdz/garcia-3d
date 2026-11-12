# Garcia vs. A Pizzaria do Sidnei (3D)

Jogo de chefes em 3D feito com HTML + JavaScript + three.js (r128).

## Como abrir no VS Code
1. Abra a pasta `garcia-3d` no VS Code (Arquivo > Abrir Pasta).
2. Instale a extensão **Live Server** (o VS Code vai sugerir).
3. Clique com o botão direito em `index.html` > **Open with Live Server**.

Também funciona dando duplo clique em `index.html`. É preciso internet, pois o three.js e a fonte Bangers vêm de CDN.

## Estrutura
- `index.html` - página, HUD e menu
- `css/style.css` - estilos
- `js/game.js` - todo o jogo (chefes, ataques, câmera, animações)

## Controles
| Ação | Tecla |
|---|---|
| Mover | WASD |
| Câmera | Mouse (clique para travar) ou setas |
| Pular / parry no ar | Espaço |
| Atirar | Q (ou clique, Z, J) |
| Dash | Shift |
| Chamar os amigos | R (ou botão direito) |

## Chefes
Coxinha Don Corleone, Dona Calabresa Furiosa, Big Burger Sr. Camadas, Coca-Cola Sr. Gás e Caio (o mais difícil).
Para ajustar vida e dificuldade, edite `KIND` e `DIF` em `js/game.js`.
