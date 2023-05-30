import styles from "./portFolioContainer.module.scss";
import type { StaticImageData } from "next/image";

interface PortfolioProps {
    header: string;
    exampleImg: StaticImageData;
    languages: string[];
    description: string;
}

interface PortfolioContainerProps {
    portfolioValues: PortfolioProps[];
}

const languageClassMap: { [key: string]: string } = {
    React: styles.REACT,
    PHP: styles.PHP,
    Javascript: styles.JAVASCRIPT,
    CSS: styles.CSS,
    HTML: styles.HTML,
    SCSS: styles.SCSS,
    Typescript: styles.TYPESCRIPT,
    NEXT: styles.NEXT
};

const PortfolioContainer: React.FC<PortfolioContainerProps> = ({ portfolioValues }) => {
    return (
        <div className={styles.wrapper}>
            {portfolioValues.map((portfolioItem, index) => (
                <div
                    key={index}
                    className={`${
                        index % 2 === 0
                            ? styles.container
                            : styles.containerRight
                    }`}
                >
                    <div key={index} className={styles.portfolioItem}>
                            <h2 className={styles.header}>
                                {portfolioItem.header}
                            </h2>
                            <div className={styles.langaugeContainer}>
                                {portfolioItem.languages.map((language, index) => (
                                        <p key={index} className={`${languageClassMap[language] ?? styles.defaultLanguage}`} >
                                            {language}
                                        </p>
                                    )
                                )}
                            </div>
                        <img alt="" className={styles.exampleIMG} src={portfolioItem.exampleImg.src} />
                        <p className={styles.description}>
                            {portfolioItem.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PortfolioContainer;
