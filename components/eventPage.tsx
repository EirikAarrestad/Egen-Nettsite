import styles from "./eventPage.module.scss";
import Page from "./page";
import Jumbotron from "./jumbotron";
import type { StaticImageData } from "next/image";

type EventPageProps = {
    title: string;
    description: string;
    background: string | StaticImageData | any;
    children: React.ReactNode;
};

const EventPage = ({title, description, background, children}: EventPageProps) => (
    <Page title={title} description={description}>
        <Jumbotron background={background}>
            <div className={styles.jumbotronOverlay}>
                <div className={styles.overskrift}>
                    <h1>{title.toUpperCase()}</h1>
                    <hr />
                </div>
            </div>
        </Jumbotron>
        <div className={styles.eventPageWrapper}>{children}</div>
    </Page>
);

export default EventPage;
