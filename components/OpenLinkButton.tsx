import Image from 'next/image';
import Link from 'next/link';


interface IOpenLinkButtonComponent {
    siteName: string;
    link: string;
};

const OpenLinkButton = ({ siteName, link }: IOpenLinkButtonComponent) => {
    return (
        <Link
            href={link}
        >
            <a target="_blank">
                <Image
                    src={`/${siteName}.svg`}
                    alt={siteName}
                    width="40"
                    height="40"
                />
            </a>
        </Link>
    )
}

export default OpenLinkButton;