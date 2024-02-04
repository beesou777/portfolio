export const useIsLoading = () => {
    return useState('isLoading', () => true);
}

export const useLoaderText = () => {
    return useState('loaderText', () => 'Welcome');
};

export const useIsOpenMenu = () => {
    return useState('isOpenMenu', ()=> false);
}

export const useCursorText = () => {
    return useState('cursorText', ()=> null);
}

export const useCursorIsHovering = () => {
    return useState('cursorIsHovering', ()=> false);
}

export const useCursorIsHidden = () => {
    return useState('cursorIsHidden', ()=> false);
}