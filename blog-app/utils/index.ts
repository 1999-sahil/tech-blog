import { serialize } from 'next-mdx-remote/serialize';
import { IArticle } from '../types';


export const formatDate = (dateString: string): string => {
    const date = new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return date;
};


// For Tab Title (Modify)
export const makeCategory = (slug: string): string => {
    if(typeof slug === 'string'){
        return slug.split('-').join(' ');
    }
    return '';
};


//For Tab Title (First Letter Capital)
export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

//For Search Functionality (DeBounce)
export const debounce = (fn: (query: string) => void, timeout = 300) => {
    let timer: NodeJS.Timeout;

    const debounced = (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
    return debounced;
}


// For next-mdx-remote (Serialize the data).
export const serializeMarkdown = async (item: IArticle) => {
    const body = await serialize(item.attributes.Body as string);

    return {
        ...item,
        attributes: {
            ...item.attributes,
            Body: body,
        }
    }
}