# Vantix Solutions - React App

Projeto refatorado para React com componentização moderna e interface fluida.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **React Router DOM** - Roteamento de páginas
- **Framer Motion** - Animações suaves e fluidas
- **Vite** - Build tool rápida e moderna

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar em Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
npm run build
```

## ✨ Funcionalidades

### Páginas
- **Home** - Página inicial com hero, selo, orçamento gratuito e timeline
- **Sobre** - Informações sobre a empresa e gerenciamento de membros
- **Contato** - Formulário de contato

### Gerenciamento de Membros
- ✅ Adicionar novos membros com nome, cargo, GitHub e LinkedIn
- ✅ Editar membros existentes
- ✅ Remover membros
- ✅ Dados salvos no localStorage
- ✅ Interface intuitiva e responsiva

### Componentes Principais
- **Header** - Navegação com indicador de página ativa
- **Footer** - Rodapé da aplicação
- **Hero** - Seção hero com animações
- **Seal** - Selo flutuante da empresa
- **FreeBudget** - CTA para orçamento gratuito
- **Timeline** - Linha do tempo da empresa
- **TeamSection** - Seção de membros com gerenciamento
- **MemberCard** - Card individual de membro
- **AddMemberForm** - Formulário para adicionar/editar membros
- **ContactForm** - Formulário de contato
- **Chatbot** - Chatbot EVA interativo

## 🎨 Design

- Design moderno com gradientes neon
- Animações suaves com Framer Motion
- Totalmente responsivo
- Tema escuro com acentos neon

## 📝 Notas

- Os dados dos membros são salvos no localStorage do navegador
- O formulário de contato está preparado para integração com EmailJS (comentado no código)
- Todas as animações são otimizadas para performance
