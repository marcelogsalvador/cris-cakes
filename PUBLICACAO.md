# Guia Curto de Publicação: Site da Cris Cakes (`criscakes.com.br`)

Este site é **100% estático** (apenas `index.html`, `styles.css`, `script.js` e `assets/img/*.webp`). Por isso, carrega instantaneamente no celular e pode ser hospedado **de graça** com certificado HTTPS automático.

---

## Opção 1: Cloudflare Pages ou Netlify Drop (Grátis e sem linha de comando, em 2 minutos)

1. Acesse [app.netlify.com/drop](https://app.netlify.com/drop) ou o painel do **Cloudflare Pages** (opção *Direct Upload*).
2. Arraste a pasta **`cris-cakes`** (`c:\dev\Meu Brain\projects\cris-cakes`) direto para a área de upload na tela.
3. O site entra no ar na hora com um link gratuito `https://...` pronto para colocar na bio do Instagram `@criscakesb`.

---

## Opção 2: Vercel (Grátis, usando o Vercel CLI que já está no seu ambiente)

Se quiser publicar direto pelo terminal de dentro da pasta `c:\dev\Meu Brain\projects\cris-cakes`:

```powershell
cd "c:\dev\Meu Brain\projects\cris-cakes"
vercel --prod
```

---

## Como conectar um domínio próprio `.com.br` (ex.: `criscakes.com.br`)

1. **Registro do domínio (R$ 40/ano):** registre `criscakes.com.br` direto no site oficial [registro.br](https://registro.br).
2. **Apontamento DNS:**
   - Na hospedagem escolhida (Cloudflare Pages, Vercel ou Netlify), vá em **Custom Domains** e digite `criscakes.com.br`.
   - Copie os registros DNS indicados pela plataforma (geralmente um registro `A` para a raiz e um `CNAME` para `www`) e cole na seção **DNS -> Editar Zona** dentro do painel do Registro.br.
3. **HTTPS automático:** em poucos minutos a própria hospedagem emite o cadeado SSL gratuito.
4. **Google Meu Negócio (Perfil da Empresa no Google):** cadastre o endereço `Rua 10, nº 269, qd 12 lt 01 cs 03 cardoso 2 aparecida de goiania go`, o WhatsApp `(62) 99201-5896` e o link do site no Google Meu Negócio para aparecer no topo do Google Maps em Aparecida de Goiânia e Goiânia.
