# 🍔 DevBurger

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Status-Completed-success?style=for-the-badge" alt="Status" />
</div>

<div align="center">
  <h3>🚀 Sistema moderno de catálogo de hamburgueria com interface responsiva</h3>
  <p>Uma aplicação web elegante para visualizar e filtrar produtos de uma hamburgueria, desenvolvida com tecnologias front-end puras.</p>
</div>

---

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [🎨 Design](#-design)
- [📱 Responsividade](#-responsividade)
- [🚀 Como Executar](#-como-executar)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎯 Demonstração](#-demonstração)
- [📝 Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **DevBurger** é uma aplicação web moderna que simula o catálogo de uma hamburgueria. O projeto foi desenvolvido para demonstrar habilidades em desenvolvimento front-end, utilizando **HTML5**, **CSS3** e **JavaScript** puro.

### 🎪 Principais Características:
- Interface moderna com **gradientes** e **animações suaves**
- Sistema de **filtros dinâmicos** para produtos
- **Cálculo automático** de totais e descontos
- Design **100% responsivo** para todos os dispositivos
- **Efeitos visuais** premium com hover states

---

## ✨ Funcionalidades

### 🔍 **Sistema de Filtros**
- **Todos os Produtos**: Exibe o catálogo completo
- **Desconto 10%**: Aplica desconto em todos os produtos
- **Soma Total**: Calcula e exibe o valor total centralizado
- **Apenas Veganos**: Filtra produtos veganos disponíveis

### 🎨 **Interface Interativa**
- Hover effects nos cards dos produtos
- Animações suaves de transição
- Zoom nas imagens ao passar o mouse
- Feedback visual com cursor pointer

### 💰 **Cálculos Dinâmicos**
- Formatação automática de moeda (BRL)
- Sistema de desconto com `map()`
- Soma total com `reduce()`
- Filtros com `filter()`

---

## 🛠️ Tecnologias

<table>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="50" height="50" />
<br><strong>HTML5</strong>
<br><em>Estrutura</em>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="50" height="50" />
<br><strong>CSS3</strong>
<br><em>Estilização</em>
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50" />
<br><strong>JavaScript</strong>
<br><em>Interatividade</em>
</td>
</tr>
</table>

### 📚 **Recursos Utilizados:**
- **CSS Grid** e **Flexbox** para layouts responsivos
- **CSS Custom Properties** para variáveis
- **ES6+** features (arrow functions, template literals, destructuring)
- **Array Methods** (forEach, map, filter, reduce)
- **CSS Animations** e **Transitions**

---

## 🎨 Design

### 🎨 **Paleta de Cores**
```css
--primary-green: #79cb15    /* Botões e preços */
--accent-purple: #8133ff    /* Bordas e detalhes */
--dark-bg: #0c0c0c         /* Background principal */
--card-bg: #1e1e1e         /* Background dos cards */
```

### ✨ **Elementos Visuais**
- **Gradientes**: Backgrounds sofisticados
- **Box-shadows**: Profundidade e elevação
- **Border-radius**: Cantos arredondados modernos
- **Transitions**: Animações suaves (0.3s ease)

---

## 📱 Responsividade

<div align="center">

| 📱 Mobile | 📟 Tablet | 🖥️ Desktop |
|----------|----------|-----------|
| < 480px | 768px | > 1200px |
| 1 coluna | 2-3 colunas | 3-4 colunas |

</div>

### 📐 **Breakpoints:**
- **Mobile**: Cards em coluna única, botões empilhados
- **Tablet**: Grid adaptativo com 2-3 colunas
- **Desktop**: Layout completo com até 4 colunas

---

## 🚀 Como Executar

### 📋 **Pré-requisitos:**
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### 🔧 **Execução Local:**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LuizZonetti1/devBurger.git
   ```

2. **Navegue até a pasta:**
   ```bash
   cd devBurger
   ```

3. **Execute o projeto:**
   ```bash
   # Opção 1: Abrir diretamente no navegador
   open index.html
   
   # Opção 2: Com servidor local (Python)
   python -m http.server 8000
   
   # Opção 3: Com servidor local (Node.js)
   npx serve .
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:8000
   ```

---

## 📁 Estrutura do Projeto

```
devBurger/
├── 📄 index.html          # Estrutura HTML principal
├── 🎨 styles.css          # Estilos CSS completos
├── ⚙️ script.js           # Lógica JavaScript
├── 📊 products.js         # Base de dados dos produtos
├── 📖 README.md           # Documentação do projeto
└── 📁 assets/             # Recursos visuais
    ├── 🍔 xsalada.jpeg    # Imagem X-Salada
    ├── 🥓 xbacon.png       # Imagem X-Bacon
    ├── 🍳 bacon-egg.png    # Imagem Bacon Egg
    ├── 👹 monstruoso.png   # Imagem Monstruoso
    ├── 🌱 xvegan.png       # Imagem X-Vegan
    └── 🌿 monstruoso-vegan.png # Imagem Big Vegano
```

---

## 🎯 Demonstração

### 🖼️ **Funcionalidades em Ação:**

#### 📋 **Catálogo Completo**
- Exibição de todos os 6 produtos
- Cards organizados em grid responsivo
- Hover effects em cada produto

#### 💸 **Sistema de Desconto**
- Aplicação automática de 10% de desconto
- Recálculo dinâmico dos preços
- Manutenção da formatação de moeda

#### 🧮 **Soma Total**
- Card centralizado com valor total
- Design diferenciado para destaque
- Formatação em Real Brasileiro

#### 🌱 **Filtro Vegano**
- Exibição apenas dos produtos veganos
- Manutenção das proporções dos cards
- Layout adaptativo para menos itens

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add: AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <h3>💻 Desenvolvido com ❤️ por <a href="https://github.com/LuizZonetti1">Luiz Zonetti</a></h3>
  
  <p>⭐ Deixe uma estrela se este projeto te ajudou!</p>
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LuizZonetti1)
</div>
