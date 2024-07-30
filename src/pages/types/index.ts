export interface IPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
        _acf_changed: boolean;
        footnotes: string;
    };
    categories: number[];
    tags: number[];
    class_list: string[];
    acf: {
        imagem: number;
    };
    acf_medias: {
        imagem: string;
    };
    _links: Links;
}

interface Links {
    self: LinkItem[];
    collection: LinkItem[];
    about: LinkItem[];
    author: EmbeddableLinkItem[];
    replies: EmbeddableLinkItem[];
    "version-history": VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:attachment": LinkItem[];
    "wp:term": TermLinkItem[];
    curies: Curies[];
}

interface LinkItem {
    href: string;
}

interface EmbeddableLinkItem extends LinkItem {
    embeddable: boolean;
}

interface VersionHistory extends LinkItem {
    count: number;
}

interface PredecessorVersion extends LinkItem {
    id: number;
}

interface TermLinkItem extends EmbeddableLinkItem {
    taxonomy: string;
}

interface Curies {
    name: string;
    href: string;
    templated: boolean;
}