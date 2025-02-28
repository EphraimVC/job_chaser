Jobchaser frågor

- **Vad är JSX?**  
  JSX (JavaScript XML) är ett syntax-tillägg för JavaScript som låter dig skriva HTML-liknande kod i React.  

- **Vad är en komponent?**  
  En komponent är en återanvändbar, självständig byggsten i React som returnerar JSX och hanterar UI.  

- **Vad är props?**  
  Props (properties) är objekt som skickar data från en förälder till en barnkomponent i React.  

- **Vad menas med one-way-dataflow?**  
  Det innebär att data i React endast flödar från förälder till barnkomponenter via props.  

- **Hur kan man använda sig av konditionell rendering i React?**  
  Man kan använda `if`-satser, ternära operatorer (`condition ? true : false`) eller `&&`-operatorn i JSX.  

- **Vad menas med en återanvändbar komponent?**  
  En komponent som är flexibel och kan användas flera gånger genom att ta in olika props.
  
  - **Vad är state i React?**  
  State är en inbyggd mekanism i React för att hantera och uppdatera komponentens interna data.  

- **Vad är det för skillnad mellan state och props?**  
  State hanterar intern data som kan ändras, medan props skickar data från en förälder till en barnkomponent.  

- **Vad menas med en kontrollerad komponent i React?**  
  En kontrollerad komponent är en input-komponent där värdet hanteras av React via state istället för DOM.  

- **Vad är en callback handler?**  
  En callback handler är en funktion som skickas som prop för att hantera händelser i en annan komponent.  

- **Vad menas med "lifting state up"?**  
  Det innebär att flytta state till en gemensam förälder för att dela data mellan flera barnkomponenter.  

- **Vad är syftet med useEffect-hook i React?**  
  `useEffect` används för att hantera sidoeffekter som API-anrop, timers och uppdateringar utanför renderingen.  

- **Vad är syftet kring den s.k dependency-arrayen i useEffect?**  
  Dependency-arrayen styr när `useEffect` körs genom att ange vilka variabler som ska trigga effekten vid ändring.
  - **Fördelar med Next.js**  
  Server-side rendering (SSR), statisk generering (SSG), bättre SEO, snabbare prestanda och inbyggd routing.  

- **Nackdelar med Next.js**  
  Mer komplex än vanlig React, kräver en server för vissa funktioner, och kan vara överdrivet för små projekt.  

- **Vad menas med Routing?**  
  Routing styr vilken sida/komponent som visas baserat på URL:en i en webbapplikation.  

- **Hur löser Next.js routing jämfört med vanlig React?**  
  Next.js har filbaserad routing (mappar/filer = sidor), medan React använder React Router för manuell routing.  

- **Vad menas med Reacts ekosystem?**  
  Samlingen av bibliotek, verktyg och paket som byggts för att komplettera och förbättra React-applikationer.  

- **Några viktiga bibliotek i Reacts ekosystem**  
  React Router (routing), Redux/Zustand (state management), React Query (data fetching), MUI/Tailwind (UI-styling).  

- **Vad är syftet med useContext?**  
  `useContext` möjliggör global delning av state utan att skicka props genom flera komponenter.  

- **Vilket problem med props löser useContext?**  
  Det löser "props drilling"-problemet där data måste skickas onödigt djupt genom komponentträdet.
  
  - **Vad är Redux Toolkit?**  
  Redux Toolkit (RTK) är en officiell, enklare och effektivare version av Redux för att hantera global state i React.  

- **När vill man använda Redux Toolkit?**  
  När en applikation har komplext state som delas mellan många komponenter, kräver avancerad state-hantering eller caching.








This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
