import OpenLinkButton from './OpenLinkButton';

const MyStudies = () => {
    return (
        <div
            className="flex flex-row space-x-5"
        >
            <OpenLinkButton
                siteName='notion'
                link="https://sj-openlink.notion.site/js-181ccd28887043a98684f4eb5d293d69"
            />
            <OpenLinkButton
                siteName='github'
                link="https://github.com/db970406"
            />
            <OpenLinkButton
                siteName='velog'
                link="https://velog.io/@db970406"
            />
        </div>
    )
}

export default MyStudies;