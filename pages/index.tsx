import styles from "../styles/index.module.scss";
import EventPage from "@/components/eventPage";
import eirikBackground from "../public/homeBackground.png";
import PortfolioContainer from "@/components/portFolioContainer";

import weatherApp from "../public/weatherApp.png";
import politi from "../public/politcs.png";
import nilsLand from "../public/NilsLand.png"

const portfolioValues = [
    {
        header: "Weather App",
        exampleImg: weatherApp,
        languages: ["React", "CSS", "Javascript"],
        description: "This is a React application that displays the daily forecast for a specific location and allows the user to toggle between Celsius and Fahrenheit temperature units. The app uses the WeatherAPI to get the current and hourly weather forecast for the user-entered location and displays it in a table.",

    },
    {
        header: "Nils Sine Land",
        exampleImg: nilsLand,
        languages: ["PHP", "SCSS", "Typescript"],
        description: "This is an HTML file with PHP code embedded in it. The file displays a webpage that allows the user to search for countries and displays information about them in a table. The PHP code takes the user input from the search bar and uses it to query a database for information about the countries."

    },
    {
        header: "Politikere",
        exampleImg: politi,
        languages: ["Typescript", "NEXT", "SCSS"],
        description: "This website is a web application built using the NEXT.JS framework. It allows users to register and keep track of politicians in Norway. The site consists of three main pages: Home, Alle Politikere (All Politicians), and Register Ny Politiker (Register New Politician)."
    }
];

export default function HomePage() {
    return (
        <>
            <div style={{backgroundImage: 'url(./striper.jpg)',opacity: "0.65", position: "absolute", height:"2200px", width:"100%", top: "560px", zIndex: "-1"}}></div>
            <EventPage  title="Eirik Aarrestad" description="Laget av meg" background={eirikBackground}>
                <div className={styles.homePageContainer}>
                    <div style={{ position: "absolute", top: "670px" }} id="omMeg"></div>
                    <div className={styles.infoSection}>
                        <code className={styles.Header}>01 - OM MEG</code>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel facere cupiditate, fugiat accusamus culpa ut eum aliquid quam optio sunt odio quos odit porro nobis architecto perferendis omnis consequatur dicta. Et nobis quisquam, esse fugit libero minima corrupti tenetur ex eius blanditiis exercitationem vero alias at iusto, architecto explicabo doloribus pariatur. Praesentium accusamus sit animi nam ad a tempora facere maxime cumque quasi quidem dicta architecto est repellat ab, vel deleniti non sed ipsa ut reprehenderit fugit optio quisquam! Neque ex repellat adipisci voluptatibus dolorum, quidem ducimus aliquid, fugiat ab minus commodi? Magnam pariatur reiciendis soluta earum placeat suscipit dolorem animi, ipsam quisquam voluptatum quia exercitationem aliquam beatae esse explicabo saepe aut iure vitae, modi eos velit asperiores facilis, deleniti temporibus! Nam, repudiandae iste eveniet minima voluptas tenetur ipsam doloribus laboriosam fuga expedita maxime sint debitis explicabo sunt blanditiis nulla ab eos itaque perferendis dolorum error numquam! Assumenda quibusdam molestiae perferendis cupiditate enim veniam facere. In cupiditate molestias dicta? Quo aut natus aliquid laborum rerum amet recusandae itaque cum! Nemo, fuga inventore. A, harum modi. Dolorum voluptates distinctio velit pariatur mollitia id vero delectus est quibusdam expedita quas harum temporibus eaque dignissimos repellat, officia hic laboriosam consectetur impedit aspernatur quidem.</p>
                    </div>
                    <div style={{ position: "absolute", top: "970px" }} id="ferdigheter"></div>
                    <div className={styles.infoSection}>
                        <code className={styles.Header}>02 - FERDIGHETER</code>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat aut rem accusamus, non blanditiis aperiam ipsa cumque deleniti. At, ullam, possimus vero praesentium nobis distinctio iusto placeat est cumque iste in, esse cupiditate eveniet non? Est officia ex aperiam magni consectetur sequi? Officia ipsum vitae explicabo natus iure unde eos, nostrum maiores, ab ipsam quaerat aperiam totam et aliquam dolorem omnis modi praesentium nobis animi. Non ad assumenda animi facere cupiditate maxime laboriosam, dolor explicabo ratione ea provident eveniet. Alias maiores et dolores, unde beatae consectetur consequuntur! Iste eius aliquam adipisci! Placeat ea perspiciatis facilis quisquam dolore fuga dicta, iste repellat ducimus mollitia soluta, pariatur quasi explicabo? Hic nisi non accusantium eum odio, magni iure vero impedit velit! Eveniet delectus quidem voluptatibus dolores a tempora possimus laborum maiores, laudantium accusamus, amet quia velit iusto ea non labore nesciunt. Velit mollitia debitis quibusdam, rem quod facere consectetur doloremque quia expedita veritatis numquam veniam, iure ut illo commodi culpa aut reiciendis? Dolorum sint sequi illum rem dolorem culpa eos porro distinctio expedita provident, sed cumque quo tenetur reiciendis, doloremque molestias inventore ex pariatur repellat excepturi impedit ratione consectetur? Magni cum iure eveniet aperiam hic velit omnis, voluptatum dolore magnam ullam doloremque.</p>
                    </div>
                    <div  className={styles.infoSection}>       
                        <code className={styles.Header}>03 - PORTEFØLJE</code>
                        <PortfolioContainer portfolioValues={portfolioValues} />
                    </div>
                    <div>
                        <b>Dualiteten av kunstig intelligens</b>
                        <p>Kunstig intelligens har dukket opp som en «game-chaning» teknologi som har forvandlet en stor del av livene våre. Denne fagartikkelen tar sikte på å undersøke fordeler og ulemper med AI, og belyse det enorme potensialet, samtidig som den anerkjenner utfordringene den utgjør. På den ene siden gir AI bemerkelsesverdige fordeler ved å revolusjonere industrier, optimalisere prosesser og fremme vitenskapelig forskning. Imidlertid oppstår det også bekymringer angående etiske hensyn, ansvarlighet, skjevhet og potensiell forskyvning av jobb. Ved å analysere både fordeler og ulemper, kan vi bedre forstå kompleksiteten til AI og navigere ansvarlig integrasjon. Vi skal fordype dualiteten til AI, og erkjenne løftet og behovet for nøye overveielse for å utnytte fordelene samtidig som risikoen reduseres.</p>
                        <p>Kunstig intelligens (AI) har vist seg å være en revolusjonerende teknologi med betydelige fordeler og utfordringer. På den positive siden har AI muliggjort en rekke fremskritt i ulike sektorer, inkludert helsevesen, transport, finans, og mer. Den har forbedret nøyaktigheten og effektiviteten i diagnostisering av sykdommer, muliggjort selvkjørende biler og optimalisert økonomiske prognoser. Disse fordelene har potensial til å forbedre livene våre betydelig.</p>
                        <p>En av de store fordelene med AI er dens evne til å analysere enorme mengder data og avdekke mønstre og innsikter som mennesker kan gå glipp av. Dette har ført til store fremskritt innen forskning og vitenskap. AI kan analysere store datasett innen kort tid og identifisere sammenhenger som kan hjelpe forskere med å finne nye behandlingsmetoder eller løse komplekse problemer.</p>
                        <p>I tillegg har AI bidratt til økt automatisering og effektivisering av arbeidsprosesser. Gjennom automatisering av rutinemessige oppgaver kan ansatte frigjøre tid til å fokusere på mer kreative og strategiske oppgaver. Dette kan føre til økt produktivitet og innovasjon på arbeidsplassen.</p>
                        <p>På den annen side har AI også potensielle ulemper og bekymringer. Et viktig spørsmål er relatert til etikk og ansvarlighet. Hvem er ansvarlig når AI-systemer tar beslutninger som påvirker menneskers liv? Hvordan kan vi sikre at AI-algoritmer ikke er partiske eller diskriminerende? Disse spørsmålene krever nøye overveielse og regulering for å sikre rettferdig og etisk bruk av AI.</p>
                        <p>En annen bekymring er potensialet for arbeidsledighet som følge av automatisering. Mens AI kan effektivisere mange oppgaver, kan det også erstatte menneskelig arbeidskraft i visse sektorer. Dette kan føre til sosiale og økonomiske utfordringer hvis det ikke tas tiltak for å takle arbeidsledighet og omskolering av arbeidstakere.</p>
                        <p>En viktig utfordring knyttet til AI er også skjevhet i dataene som brukes til å trene algoritmene. Hvis dataene er partiske eller ikke representerer mangfoldet i samfunnet, kan det føre til skjeve resultater og urettferdige beslutninger. Dette kan ha negative konsekvenser for ulike grupper i samfunnet og forsterke eksisterende ulikheter.</p>
                        <p>For å utnytte fordelene med AI og samtidig adressere utfordringene, er det nødvendig med en ansvarlig tilnærming. Dette innebærer å investere i forskning og utvikling av AI-algoritmer som er transparente, pålitelige og ikke-diskriminerende. Det krever også utvikling av etiske retningslinjer og regulering som sikrer rettferdig og ansvarlig bruk av AI.</p>
                        <p>Samlet sett er kunstig intelligens en teknologi med betydelige fordeler og utfordringer. Den har potensial til å forvandle industrier, optimalisere prosesser og fremme vitenskapelig forskning. Samtidig er det viktige etiske spørsmål, bekymringer om arbeidsledighet og skjevheter i dataene som må tas på alvor. For å maksimere fordelene og minimere risikoen knyttet til AI, er det nødvendig med en ansvarlig tilnærming som tar hensyn til etikk, ansvarlighet og regulering.</p>
                    </div>
                </div>
            </EventPage>
        </>
    );
}
